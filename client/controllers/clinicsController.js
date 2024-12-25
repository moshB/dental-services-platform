import { createClient } from '@supabase/supabase-js';


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// console.log('supabaseUrl:', supabaseUrl);
// console.log('supabaseKey:', supabaseKey);

const supabase = createClient(supabaseUrl, supabaseKey);

export const searchClinicsWithRadius = async (service, latitude, longitude, radius) => {
  try {
    console.log('Starting search with radius filter...');

    // רדיוס כדור הארץ בק"מ
    const R = 6371;

    const { data, error } = await supabase
      .from('clinics')
      .select()
      .ilike('Dentist_Type', `%${service}%`) // חיפוש לפי סוג שירות

      // Latitude filter
      .gte('Latitude', latitude - radius / R)
      .lte('Latitude', latitude + radius / R)

      // Longitude filter
      .gte('Longitude', longitude - radius / (R * Math.cos((latitude * Math.PI) / 180)))
      .lte('Longitude', longitude + radius / (R * Math.cos((latitude * Math.PI) / 180)));

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message);
    }

    console.log('Filtered Data from Supabase:', data);
    return data;
  } catch (err) {
    console.error('Error during search:', err.message);
    throw err;
  }
};


// פונקציה למציאת מרפאה לפי ID
export const getClinicById = async (id) => {
  try {
    console.log('Fetching clinic by ID:', id);

    const { data, error } = await supabase
      .from('clinics')
      .select()
      .eq('id', id) // סינון לפי עמודת ID

      // מביא רק את הרשומה הראשונה
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message);
    }

    console.log('Clinic Data:', data);
    return data;
  } catch (err) {
    console.error('Error fetching clinic by ID:', err.message);
    throw err;
  }
};