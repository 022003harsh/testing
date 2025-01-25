const express = require('express');
const { getCaptions } = require('../controllers/videoController');
const router = express.Router();

// Route to fetch YouTube captions
router.get('/captions', getCaptions);

module.exports = router;
