// index.js

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/virtual-Kitchen', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Define routes
const virtualKitchenRouter = require('./routes/VirtualKitchen')
app.use(express.json())
app.use('/api/virtual-kitchens', virtualKitchenRouter)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
