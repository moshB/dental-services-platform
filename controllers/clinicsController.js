// const supabase = require('../supabaseClient');



// // פונקציה לחיפוש מרפאות לפי רדיוס
// const searchClinicsWithRadius = async (req, res) => {
//     const { service, latitude, longitude, radius } = req.body;

//     try {
//         console.log('Starting search with radius filter...');

//         // רדיוס כדור הארץ בק"מ
//         const R = 6371;

//         // שאילתה עם חישוב מרחק לפי קורדינטות
//         const { data, error } = await supabase
//             .from('clinics')
//             .select('*')
//             .like('"Dentist_type"', `%${service}%`) // חיפוש לפי סוג שירות
//             .filter('Latitude', 'gte', latitude - (radius / R))
//             .filter('Latitude', 'lte', latitude + (radius / R))
//             .filter('Longitude', 'gte', longitude - (radius / (R * Math.cos(latitude * Math.PI / 180))))
//             .filter('Longitude', 'lte', longitude + (radius / (R * Math.cos(latitude * Math.PI / 180))));

//         if (error) {
//             console.error('Supabase error:', error);
//             throw error;
//         }

//         console.log('Filtered Data from Supabase:', data);

//         res.status(200).json(data);
//     } catch (err) {
//         console.error('Error during search:', err.message);
//         res.status(500).json({ error: err.message });
//     }
// };
// // פונקציה לחיפוש מרפאות
// const searchClinics = async (req, res) => {
//     try {
//         const { query } = req.query;

//         if (!query) {
//             return res.status(400).json({ error: 'Query parameter is required' });
//         }

//         // חיפוש בטבלה clinics
//         const { data, error } = await supabase
//             .from('clinics')
//             .select('*')
//             .ilike('Name', `%${query}%`); // חיפוש לפי עמודת Name

//         if (error) {
//             throw error;
//         }

//         res.status(200).json(data);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Failed to fetch clinics' });
//     }
// };

// module.exports = {
//     searchClinicsWithRadius,
// };
const supabase = require('../supabaseClient');

// const searchClinicsWithRadius = async (req, res) => {
//     const { service, latitude, longitude, radius, clinicName } = req.body;

//     if (clinicName) {
//         try {
//             console.log(`Fetching clinic with ID: ${id}`);

//             // Fetch clinic data from Supabase
//             const { data, error } = await supabase
//                 .from('clinics')
//                 .select()
//                 .eq('Name', clinicName) // Filter by the provided ID
//                 .single(); // Ensure only one record is fetched

//             if (error) {
//                 console.error('Supabase error:', error);
//                 return res.status(500).json({ error: error.message });
//             }

//             if (!data) {
//                 return res.status(404).json({ error: 'Clinic not found' });
//             }

//             console.log('Clinic Data:', data);



//             res.json(data);
//         } catch (err) {
//             console.error('Error fetching clinic:', err.message);
//             res.status(500).json({ error: err.message });
//         }

//     }

//     try {
//         console.log('Starting search with radius filter...');

//         // Earth radius in kilometers
//         const R = 6371;

//         // Properly reference the column names matching the database
//         const { data, error } = await supabase
//             .from('clinics')
//             .select()
//             .ilike('"Dentist_Type"', `%${service}%`) // Ensuring exact match with column name

//             // Latitude filter
//             .filter('Latitude', 'gte', latitude - (radius / R))
//             .filter('Latitude', 'lte', latitude + (radius / R))

//             // Longitude filter
//             .filter('Longitude', 'gte', longitude - (radius / (R * Math.cos(latitude * Math.PI / 180))))
//             .filter('Longitude', 'lte', longitude + (radius / (R * Math.cos(latitude * Math.PI / 180))));

//         if (error) {
//             console.error('Supabase error:', error);
//             return res.status(500).json({ error: error.message });
//         }

//         console.log('Filtered Data from Supabase:', data);
//         res.json(data);
//     } catch (err) {
//         console.error('Error during search:', err.message);
//         res.status(500).json({ error: err.message });
//     }
// };



const searchClinicsWithRadius = async (req, res) => {
    const { service, latitude, longitude, radius = 10, clinicName } = req.body;

    if (!latitude || !longitude && !clinicName) {
        return res.status(400).json({ error: "Latitude and Longitude are required." });
    }

    if (clinicName) {
        // Case 1: Clinic name provided
        try {
            console.log(`Fetching clinic with Name: ${clinicName}`);

            // Fetch clinic data from Supabase
            const { data: clinicData, error: clinicError } = await supabase
                .from('clinics')
                // .select('Latitude, Longitude, Dentist_Type') // Fetch specific columns
                .select()
                // .eq
                .ilike('Name', clinicName) // Filter by the provided clinic name
                .single(); // Ensure only one record is fetched

            if (clinicError) {
                console.error('Supabase error:', clinicError);
                return res.status(500).json({ error: clinicError.message });
            }

            if (!clinicData) {
                return res.status(404).json({ error: 'Clinic not found' });
            }

            console.log('Clinic Data:', clinicData);

            const { Latitude: clinicLat, Longitude: clinicLon, Dentist_Type: clinicService } = clinicData;

            // Search for nearby clinics of the same type within the radius
            console.log('Searching for nearby clinics...');
            const R = 6371; // Earth radius in kilometers

            const { data: nearbyClinics, error: nearbyError } = await supabase
                .from('clinics')
                // .select('Name, Latitude, Longitude, Dentist_Type')
                .select()
                .ilike('Dentist_Type', `%${clinicService}%`) // Match service type
                .filter('Latitude', 'gte', clinicLat - (radius / R))
                .filter('Latitude', 'lte', clinicLat + (radius / R))
                .filter('Longitude', 'gte', clinicLon - (radius / (R * Math.cos(clinicLat * Math.PI / 180))))
                .filter('Longitude', 'lte', clinicLon + (radius / (R * Math.cos(clinicLat * Math.PI / 180))));

            if (nearbyError) {
                console.error('Supabase error during nearby search:', nearbyError);
                return res.status(500).json({ error: nearbyError.message });
            }

            console.log('Nearby Clinics:', nearbyClinics);

            // Sort results: primary clinic first
            const results = [
                { ...clinicData, isPrimary: true },
                ...nearbyClinics.filter((clinic) => clinic.Name !== clinicName),
            ];

            return res.status(200).json(results);
        } catch (err) {
            console.error('Error fetching clinic data:', err.message);
            return res.status(500).json({ error: err.message });
        }
    }

    // Case 2: No clinic name provided
    try {
        console.log('Searching clinics by radius and service type...');
        const R = 6371; // Earth radius in kilometers

        const { data: clinics, error: radiusError } = await supabase
            .from('clinics')
            // .select('Name, Latitude, Longitude, Dentist_Type')
            .select()
            .ilike('Dentist_Type', `%${service}%`) // Match service type
            .filter('Latitude', 'gte', latitude - (radius / R))
            .filter('Latitude', 'lte', latitude + (radius / R))
            .filter('Longitude', 'gte', longitude - (radius / (R * Math.cos(latitude * Math.PI / 180))))
            .filter('Longitude', 'lte', longitude + (radius / (R * Math.cos(latitude * Math.PI / 180))));

        if (radiusError) {
            console.error('Supabase error during radius search:', radiusError);
            return res.status(500).json({ error: radiusError.message });
        }

        console.log('Clinics by Radius:', clinics);
        return res.status(200).json(clinics);
    } catch (err) {
        console.error('Error during search:', err.message);
        return res.status(500).json({ error: err.message });
    }
};

// const searchClinicsWithRadius = async (req, res) => {
//     const { service, latitude, longitude, radius = 10, clinicName } = req.body;

//     if (!latitude || !longitude && !clinicName) {
//         return res.status(400).json({ error: "Latitude and Longitude are required." });
//     }

//     if (clinicName) {
//         // Case 1: Clinic name provided
//         try {
//             console.log(`Fetching clinic with Name: ${clinicName}`);

//             // Fetch clinic data from Supabase
//             const { data: clinicData, error: clinicError } = await supabase
//                 .from('clinics')
//                 .select()
//                 .ilike('Name', clinicName) // Filter by the provided clinic name
//                 .single(); // Ensure only one record is fetched
//             console.log('case 1.1');
//             // if (clinicError) {
//             //     console.error('Supabase error:', clinicError);
//             //     return res.status(500).json({ error: clinicError.message });
//             // }

//             // if (!clinicData) {
//             //     return res.status(404).json({ error: 'Clinic not found' });
//             // }

//             console.log('Clinic Data:', clinicData);

//             // Check if the provider name matches the clinicName
//             const { data: providerData, error: providerError } = await supabase
//                 .from('clinics')
//                 .select()
//                 .ilike('Provider_Name', clinicName) // Match provider name
//                 .single();
//             console.log('case 1.1');
//             // if (providerError) {
//             //     console.error('Supabase error during provider name check:', providerError);
//             //     return res.status(500).json({ error: providerError.message });
//             // }

//             let primaryClinic;

//             if (providerData.Provider_Name !== clinicData.Name) {
//                 console.log('Provider name matches a different clinic. Choosing the closer match.');
//                 const nameSimilarity = (str1, str2) => {
//                     const levenshtein = require('js-levenshtein');
//                     return levenshtein(str1.toLowerCase(), str2.toLowerCase());
//                 };

//                 const clinicNameSimilarity = nameSimilarity(clinicData.Name, clinicName);
//                 const providerNameSimilarity = nameSimilarity(providerData.Provider_Name, clinicName);

//                 primaryClinic = clinicNameSimilarity <= providerNameSimilarity ? clinicData : providerData;
//             } else {
//                 primaryClinic = clinicData;
//             }

//             console.log('Primary Clinic:', primaryClinic);

//             const { Latitude: clinicLat, Longitude: clinicLon, Dentist_Type: clinicService } = primaryClinic;

//             // Search for nearby clinics of the same type within the radius
//             console.log('Searching for nearby clinics...');
//             const R = 6371; // Earth radius in kilometers

//             const { data: nearbyClinics, error: nearbyError } = await supabase
//                 .from('clinics')
//                 .select()
//                 .ilike('Dentist_Type', `%${clinicService}%`) // Match service type
//                 .filter('Latitude', 'gte', clinicLat - (radius / R))
//                 .filter('Latitude', 'lte', clinicLat + (radius / R))
//                 .filter('Longitude', 'gte', clinicLon - (radius / (R * Math.cos(clinicLat * Math.PI / 180))))
//                 .filter('Longitude', 'lte', clinicLon + (radius / (R * Math.cos(clinicLat * Math.PI / 180))));

//             if (nearbyError) {
//                 console.error('Supabase error during nearby search:', nearbyError);
//                 return res.status(500).json({ error: nearbyError.message });
//             }

//             console.log('Nearby Clinics:', nearbyClinics);

//             // Sort results: primary clinic first
//             const results = [
//                 { ...primaryClinic, isPrimary: true },
//                 ...nearbyClinics.filter((clinic) => clinic.Name !== primaryClinic.Name),
//             ];

//             return res.status(200).json(results);
//         } catch (err) {
//             console.error('Error fetching clinic data:', err.message);
//             return res.status(500).json({ error: err.message });
//         }
//     }

//     // Case 2: No clinic name provided
//     try {
//         console.log('Searching clinics by radius and service type...');
//         const R = 6371; // Earth radius in kilometers

//         const { data: clinics, error: radiusError } = await supabase
//             .from('clinics')
//             .select()
//             .ilike('Dentist_Type', `%${service}%`) // Match service type
//             .filter('Latitude', 'gte', latitude - (radius / R))
//             .filter('Latitude', 'lte', latitude + (radius / R))
//             .filter('Longitude', 'gte', longitude - (radius / (R * Math.cos(latitude * Math.PI / 180))))
//             .filter('Longitude', 'lte', longitude + (radius / (R * Math.cos(latitude * Math.PI / 180))));

//         if (radiusError) {
//             console.error('Supabase error during radius search:', radiusError);
//             return res.status(500).json({ error: radiusError.message });
//         }

//         console.log('Clinics by Radius:', clinics);
//         return res.status(200).json(clinics);
//     } catch (err) {
//         console.error('Error during search:', err.message);
//         return res.status(500).json({ error: err.message });
//     }
// };


// Get clinic by ID

const getClinicById = async (req, res) => {
    const { id } = req.body; // ID will be provided as a route parameter

    try {
        console.log(`Fetching clinic with ID: ${id}`);

        // Fetch clinic data from Supabase
        const { data, error } = await supabase
            .from('clinics')
            .select()
            .eq('id', id) // Filter by the provided ID
            .single(); // Ensure only one record is fetched

        if (error) {
            console.error('Supabase error:', error);
            return res.status(500).json({ error: error.message });
        }

        if (!data) {
            return res.status(404).json({ error: 'Clinic not found' });
        }

        console.log('Clinic Data:', data);
        res.json(data);
    } catch (err) {
        console.error('Error fetching clinic:', err.message);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    searchClinicsWithRadius,
    getClinicById, // Export the new function
};
