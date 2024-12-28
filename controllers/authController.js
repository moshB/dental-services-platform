const supabase = require('../supabaseClient');

const handleUserSignup = async (req, res) => {
    const {
        email,
        password,
        full_name,
        // date_of_birth,
        // phone,
        // address,
        // nhs_number,
        // medical_history,
        // dental_history,
        // allergies,
        // medications,
    } = req.body;

    try {
        // יצירת משתמש חדש
        const { data: user, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
        });

        if (signUpError) {
            return res.status(400).json({ error: signUpError.message });
        }

        // הוספת נתונים לטבלת profiles
        const { error: profileError } = await supabase
            .from('profiles')
            .insert({
                id: user.user.id, // חובה - המפתח הראשי
                email, // אימייל של המשתמש
                full_name: full_name || null, // שם מלא
                // date_of_birth: date_of_birth || null, // תאריך לידה
                // phone: phone || null, // טלפון
                // address: address || null, // כתובת
                // nhs_number: nhs_number || null, // מספר NHS
                // medical_history: medical_history || null, // היסטוריה רפואית
                // dental_history: dental_history || null, // היסטוריה דנטלית
                // allergies: allergies || null, // אלרגיות
                // medications: medications || null, // תרופות
                created_at: new Date(), // תאריך יצירה
                updated_at: new Date(), // תאריך עדכון
            });

        if (profileError) {
            return res.status(500).json({ error: 'Failed to update profile table', details: profileError.message });
        }

        res.status(201).json({ message: 'User and profile created successfully!' });
    } catch (err) {
        console.error('Error during signup:', err);
        res.status(500).json({ error: 'An error occurred during signup' });
    }
};

module.exports = {
    handleUserSignup,
};
