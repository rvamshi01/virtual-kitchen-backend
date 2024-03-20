// models/VirtualKitchen.js

const mongoose = require('mongoose');

const virtualKitchenSchema = new mongoose.Schema({
    name: String,
    location: String
});

const VirtualKitchen = mongoose.model('VirtualKitchen', virtualKitchenSchema)

module.exports = VirtualKitchen
