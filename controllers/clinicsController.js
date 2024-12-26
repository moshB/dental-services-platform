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

const searchClinicsWithRadius = async (req, res) => {
    const { service, latitude, longitude, radius } = req.body;

    try {
        console.log('Starting search with radius filter...');

        // Earth radius in kilometers
        const R = 6371;

        // Properly reference the column names matching the database
        const { data, error } = await supabase
            .from('clinics')
            .select()
            .ilike('"Dentist_Type"', `%${service}%`) // Ensuring exact match with column name

            // Latitude filter
            .filter('Latitude', 'gte', latitude - (radius / R))
            .filter('Latitude', 'lte', latitude + (radius / R))

            // Longitude filter
            .filter('Longitude', 'gte', longitude - (radius / (R * Math.cos(latitude * Math.PI / 180))))
            .filter('Longitude', 'lte', longitude + (radius / (R * Math.cos(latitude * Math.PI / 180))));

        if (error) {
            console.error('Supabase error:', error);
            return res.status(500).json({ error: error.message });
        }

        console.log('Filtered Data from Supabase:', data);
        res.json(data);
    } catch (err) {
        console.error('Error during search:', err.message);
        res.status(500).json({ error: err.message });
    }
};

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
