const express = require('express');
const cors = require('cors');
const path = require('path'); // משמש להגשת קבצים סטטיים
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

// נתיבים ל-API
app.use('/api/clinics', clinicsRoutes);

// הגשת צד הלקוח (Frontend)
app.use(express.static(path.join(__dirname, '../fronted/build')));

// נתיב ראשי להגשת ה-Frontend עבור כל נתיב שלא נמצא
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../fronted/build', 'index.html'));
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
