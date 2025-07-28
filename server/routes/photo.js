import express from 'express';
import Photo from './models/Photo'; // Import the Photo model

const router = express.Router();

// POST endpoint to save photo metadata
router.post('/photos', async (req, res) => {
  try {
    const { name, category, photoName } = req.body;

    // Save metadata to MongoDB
    const newPhoto = new Photo({
      name,
      category,
      photo: photoName, // Store the photo name
      dateUploaded: new Date(),
      isActive: true,
    });

    await newPhoto.save();
    res.status(201).json({ message: 'Photo metadata saved successfully!' });
  } catch (error) {
    console.error('Error saving photo metadata:', error);
    res.status(500).json({ message: 'Failed to save photo metadata.' });
  }
});

module.exports = router;
