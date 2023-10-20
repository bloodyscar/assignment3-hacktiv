const pool = require('../../config')
const { Photo, User } = require('../../models')

const createPhoto = async (req, res) => {
    const { title, caption, image_url } = req.body;
    try {
        const result = await Photo.create({
            title,
            caption,
            image_url
        })


        res.status(201).json(result);
    } catch (error) {
        console.error('Error creating photo:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




const getAllPhotos = async (req, res) => {
    try {
        const photo = await Photo.findAll({
            include: User
        });
        res.status(200).json(photo);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getPhotoById = async (req, res) => {
    const photoId = req.params.id;

    try {
        const photo = await Photo.findByPk(photoId);

        if (photo) {
            res.status(200).json(photo);
        } else {
            // Photo not found, return a 404 status
            res.status(404).json({ error: 'Foto tidak ditemukan' });
        }
    } catch (error) {
        console.error('Error fetching photo:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllPhotos,
    getPhotoById,
    createPhoto
}