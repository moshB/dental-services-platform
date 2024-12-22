const express = require('express');
const cors = require('cors');
const clinicsRoutes = require('./routes/clinicsRoutes');

const app = express();
const PORT = 5000;

// אפשר ל-Frontend לגשת לשרת
app.use(cors());

// כדי לקרוא נתוני JSON שנשלחים לשרת
app.use(express.json());

// נתיבים
app.use('/api/clinics', clinicsRoutes);

// נתיב ראשי לבדיקה
app.get('/', (req, res) => {
    res.send({ message: 'Server is running!' });
});

// האזנה לשרת
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// הפעלת השרת
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
