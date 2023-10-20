const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Temporary storage for photos (replace with a database in a real application)
const photos = [];

// API create photo
app.post('/photos', (req, res) => {
    const { title, url } = req.body;
    const newPhoto = { id: photos.length + 1, title, url };
    photos.push(newPhoto);
    res.status(201).json(newPhoto);
});

// API get all photos
app.get('/photos', (req, res) => {
    res.json(photos);
});

// API get photo by ID
app.get('/photos/:id', (req, res) => {
    const photoId = parseInt(req.params.id);
    const photo = photos.find(photo => photo.id === photoId);

    if (photo) {
        res.json(photo);
    } else {
        res.status(404).json({ error: 'Photo not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export the app for testing
