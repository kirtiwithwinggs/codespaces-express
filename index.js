const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables (optional for production setup)
// require('dotenv').config();

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/abc'; // Update with your Compass connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('debug', true);

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Initialize Expresss
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
const itemsRouter = require('./routes/items');
app.use('/api/items', itemsRouter);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
