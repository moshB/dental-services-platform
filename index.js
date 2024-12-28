const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const clinicsRoutes = require('./routes/clinicsRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// הגדרת CORS
const allowedOrigins = ["http://localhost:8080","https://lovable.dev","polar-fjord-74717-41c63b3e90ed.herokuapp.com","https://polar-fjord-74717-41c63b3e90ed.herokuapp.com", "https://dental-services-platform.netlify.app"];
// if (process.env.NODE_ENV === "development") {
//   allowedOrigins.push("http://localhost");
// }

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

app.use('/api/clinics', clinicsRoutes);
app.use('/api/auth', authRoutes);


// הגשת צד הלקוח (Frontend)
const clientBuildPath = path.join(__dirname, './client/dist');
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