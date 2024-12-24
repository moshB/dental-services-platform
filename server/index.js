// const express = require('express');
// const cors = require('cors');
// const path = require('path'); // משמש להגשת קבצים סטטיים
// const dotenv = require('dotenv');
// require('dotenv').config();
// dotenv.config();

// const clinicsRoutes = require('./routes/clinicsRoutes');

// // טען משתני סביבה מקובץ .env
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000; // שימוש ב-PORT מ-Heroku

// // הגדרת CORS
// const allowedOrigins = ["https://lovable.dev", "https://dental-services-platform.netlify.app"];
// if (process.env.NODE_ENV === "development") {
//   allowedOrigins.push("http://localhost");
// }

// app.use(cors({
//   origin: allowedOrigins,
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true, // מאפשר שליחת cookies
// }));

// // Middleware לקריאת נתוני JSON שנשלחים לשרת
// app.use(express.json());

// // נתיבים ל-API
// app.use('/api/clinics', clinicsRoutes);

// // הגשת צד הלקוח (Frontend)
// console.log("Static files served from:", path.join(__dirname, '../client/dist'));

// // app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use(express.static(path.join(__dirname, '/../client/dist')));

// // נתיב ראשי להגשת ה-Frontend עבור כל נתיב שלא נמצא
// app.get('*', (req, res) => {
//   console.log("Static files served from:", path.join(__dirname, '../client/dist'));
//   res.sendFile(path.join(__dirname, '/../client/dist', 'index.html'));
// });

// // Middleware לטיפול בשגיאות
// app.use((err, req, res, next) => {
//   console.log("qwerty");
//   console.error(err.stack);
//   res.status(500).send({ message: "Something went wrong!" });
// });

// // הפעלת השרת
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const clinicsRoutes = require('./routes/clinicsRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// הגדרת CORS
const allowedOrigins = ["https://lovable.dev","https://polar-fjord-74717-41c63b3e90ed.herokuapp.com/", "https://dental-services-platform.netlify.app"];
if (process.env.NODE_ENV === "development") {
  allowedOrigins.push("http://localhost");
}

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

app.use('/api/clinics', clinicsRoutes);

// הגשת צד הלקוח (Frontend)
const clientBuildPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientBuildPath));

// נתיב ראשי להגשת ה-Frontend עבור כל נתיב שלא נמצא
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// Middleware לטיפול בשגיאות
app.use((err, req, res, next) => {
  console.error('An error occurred:', err.message);
  res.status(500).send({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});