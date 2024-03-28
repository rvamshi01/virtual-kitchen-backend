// routes/virtualKitchen.js

const express = require('express') ;
const router = express.Router()
const VirtualKitchen = require('../models/VirtualKitchen')

// Get all virtual kitchens
router.get('/', async (req, res) => {
    try {
        const virtualKitchens = await VirtualKitchen.find()
        res.json(virtualKitchens);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Create a new virtual kitchen
router.post('/', async (req, res) => {
    const virtualKitchen = new VirtualKitchen({
        name: req.body.name,
        location: req.body.location
    });

    try {
        const newVirtualKitchen = await virtualKitchen.save();
        res.status(201).json(newVirtualKitchen);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Implement similar routes for updating and deleting virtual kitchens
module.exports=router;
