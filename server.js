const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const mongoose = require('mongoose');
const app = express();

require("dotenv").config({path: './config/.env'});
require('./config/db')


// Middleware
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());

// Import routes
const productsRoutes = require('./routes/productsRoutes');
const userRouter= require('./routes/userRoutes');
app.use('/api', userRouter);
app.use('/', productsRoutes);

// Routes
app.get('/', (req, res) => {
  res.send("API is running...");
});

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.listen(6000, () => {
    console.log('Server is running on port 3000');
});


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/auth-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(6000, () => {
  console.log('Server is running on port 6000');
});
