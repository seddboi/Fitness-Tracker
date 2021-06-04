const router = require('express').Router();
const path = require('path');

// sets up index.html (mainpage) route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// sets up exercise.html (individual exercise) route
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// sets up stats.html route
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;