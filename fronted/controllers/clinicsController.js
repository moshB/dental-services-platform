// השתמש ב:
import { createClient } from '@supabase/supabase-js';



// פרטי החיבור ל-Supabase (שנה את הערכים בהתאם לחשבונך)
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
// console.log('Supabase Key:', import.meta.env.VITE_SUPABASE_ANON_KEY);
// console.log('Test Variable:', import.meta.env.VITE_TEST_VARIABLE);

// console.log('All Env Variables:', import.meta.env);

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
