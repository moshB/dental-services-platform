const express = require('express');
const cors = require('cors');
const path = require('path'); // משמש להגשת קבצים סטטיים
const dotenv = require('dotenv');
// require('dotenv').config();

const clinicsRoutes = require('./routes/clinicsRoutes');

// טען משתני סביבה מקובץ .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // שימוש ב-PORT מ-Heroku

// הגדרת CORS
const allowedOrigins = ["https://lovable.dev", "https://dental-services-platform.netlify.app"];
if (process.env.NODE_ENV === "development") {
  allowedOrigins.push("http://localhost");
}

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // מאפשר שליחת cookies
}));

// Middleware לקריאת נתוני JSON שנשלחים לשרת
app.use(express.json());

// נתיבים ל-API
app.use('/api/clinics', clinicsRoutes);

// הגשת צד הלקוח (Frontend)
app.use(express.static(path.join(__dirname, '../client/build')));

// נתיב ראשי להגשת ה-Frontend עבור כל נתיב שלא נמצא
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Middleware לטיפול בשגיאות
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong!" });
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
