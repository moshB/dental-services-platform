const express = require('express');
const cors = require('cors');
const clinicsRoutes = require('./routes/clinicsRoutes');


const app = express();
const PORT = 5000;

// אפשר CORS לדומיינים הרצויים
app.use(cors({
  origin: ["https://lovable.dev", "https://dental-services-platform.netlify.app","http://localhost"], // רשימת דומיינים מאושרים
  methods: ["GET", "POST", "PUT", "DELETE"], // מתודות מאושרות
  credentials: true // אם נדרש לשלוח קוקיז או אישורים
}));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

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
