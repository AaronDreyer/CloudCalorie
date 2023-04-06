const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);

module.exports = router;