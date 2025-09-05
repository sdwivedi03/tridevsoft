const express = require('express');
const router = express.Router();
const App = require('../models/App');

// CREATE
router.post('/', async (req, res) => {
  try {
    const newTile = new App(req.body);
    await newTile.save();
    res.status(201).json(newTile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL (non-deleted)
router.get('/', async (req, res) => {
  try {
    const tiles = await App.find({ deleted: false });
    res.json(tiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE (non-deleted)
router.get('/:id', async (req, res) => {
  try {
    const tile = await App.findOne({ _id: req.params.id, deleted: false });
    if (!tile) return res.status(404).json({ message: 'Tile not found' });
    res.json(tile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updatedTile = await App.findOneAndUpdate(
      { _id: req.params.id, deleted: false },
      req.body,
      { new: true }
    );
    if (!updatedTile) return res.status(404).json({ message: 'Tile not found' });
    res.json(updatedTile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// SOFT DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deletedTile = await App.findOneAndUpdate(
      { _id: req.params.id },
      { deleted: true },
      { new: true }
    );
    if (!deletedTile) return res.status(404).json({ message: 'Tile not found' });
    res.json({ message: 'Tile soft deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;