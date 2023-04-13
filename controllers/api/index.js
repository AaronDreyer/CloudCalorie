const router = require('express').Router();
const userRoutes = require('./userRoutes');
const calorieRoutes = require('./calorieRoutes');

router.use('/users', userRoutes);
router.use('/calories', calorieRoutes);

module.exports = router;