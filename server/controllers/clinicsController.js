const supabase = require('../supabaseClient');
// פונקציה לחיפוש מרפאות לפי רדיוס
const searchClinicsWithRadius = async (req, res) => {
    const { service, latitude, longitude, radius } = req.body;

    try {
        console.log('Starting search with radius filter...');

        // רדיוס כדור הארץ בק"מ
        const R = 6371;

        // שאילתה עם חישוב מרחק לפי קורדינטות
        const { data, error } = await supabase
            .from('clinics')
            .select('*')
            .ilike('Service_Types', `%${service}%`) // חיפוש לפי סוג שירות
            .filter('Latitude', 'gte', latitude - (radius / R))
            .filter('Latitude', 'lte', latitude + (radius / R))
            .filter('Longitude', 'gte', longitude - (radius / (R * Math.cos(latitude * Math.PI / 180))))
            .filter('Longitude', 'lte', longitude + (radius / (R * Math.cos(latitude * Math.PI / 180))));

        if (error) {
            console.error('Supabase error:', error);
            throw error;
        }

        console.log('Filtered Data from Supabase:', data);

        res.status(200).json(data);
    } catch (err) {
        console.error('Error during search:', err.message);
        res.status(500).json({ error: err.message });
    }
};
// פונקציה לחיפוש מרפאות
const searchClinics = async (req, res) => {
    try {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        // חיפוש בטבלה clinics
        const { data, error } = await supabase
            .from('clinics')
            .select('*')
            .ilike('Name', `%${query}%`); // חיפוש לפי עמודת Name

        if (error) {
            throw error;
        }

        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch clinics' });
    }
};

module.exports = {
    searchClinicsWithRadius,
};
