const express = require('express');
const cors = require('cors');
const clinicsRoutes = require('./routes/clinicsRoutes');

const app = express();
const PORT = process.env.PORT || 5000; // שימוש ב-PORT מ-Heroku

// אפשר CORS לדומיינים הרצויים
app.use(cors({
  origin: ["https://lovable.dev", "https://dental-services-platform.netlify.app", "http://localhost"], // רשימת דומיינים מאושרים
  methods: ["GET", "POST", "PUT", "DELETE"], // מתודות מאושרות
  credentials: true // אם נדרש לשלוח קוקיז או אישורים
}));

// כדי לקרוא נתוני JSON שנשלחים לשרת
app.use(express.json());

// נתיבים
app.use('/api/clinics', clinicsRoutes);

// נתיב ראשי לבדיקה
app.get('/', (req, res) => {
  res.send({ mes
