const { Router } = require('express');
const { getAllPhotos, getPhotoById, createPhoto } = require('./controller');
const router = Router();
const jwt = require('jsonwebtoken');
const { verifikasiToken } = require('../../middleware');

router.get('/all', verifikasiToken, getAllPhotos)
router.post('/upload', verifikasiToken, createPhoto)
router.get('/:id', getPhotoById)

module.exports = router;