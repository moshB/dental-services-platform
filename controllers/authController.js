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

// module.exports = {
//     handleUserSignup,
// };
// חיבור לסופבייס
// const supabase = require('../supabaseClient');

// פונקציית לוגאין
const handleUserLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { data: user, error: loginError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (loginError) {
            return res.status(400).json({ error: loginError.message });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'An error occurred during login' });
    }
};

// פונקציית יציאה
const handleUserLogout = async (req, res) => {
    try {
        const { error: logoutError } = await supabase.auth.signOut();

        if (logoutError) {
            return res.status(400).json({ error: logoutError.message });
        }

        res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
        console.error('Error during logout:', err);
        res.status(500).json({ error: 'An error occurred during logout' });
    }
};

// בדיקת משתמש מחובר
const checkUserSession = async (req, res) => {
    try {
        const { data: session } = await supabase.auth.getSession();

        if (!session) {
            return res.status(401).json({ error: 'No active session' });
        }

        res.status(200).json({ message: 'User is logged in', session });
    } catch (err) {
        console.error('Error checking session:', err);
        res.status(500).json({ error: 'An error occurred while checking session' });
    }
};

// קבלת פרופיל משתמש
const getUserProfile = async (req, res) => {
    try {
        const { data: user } = await supabase.auth.getUser();

        if (!user) {
            return res.status(401).json({ error: 'No user is logged in' });
        }

        const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

        if (profileError) {
            return res.status(500).json({ error: 'Failed to fetch profile', details: profileError.message });
        }

        res.status(200).json({ profile });
    } catch (err) {
        console.error('Error fetching profile:', err);
        res.status(500).json({ error: 'An error occurred while fetching profile' });
    }
};

module.exports = {
    handleUserSignup,
    handleUserLogin,
    handleUserLogout,
    checkUserSession,
    getUserProfile,
};
