const router = require('express').Router();

const userRoutes = require('./user-routes');
const calorieRoutes = require('./calorie-routes');

router.use('/users', userRoutes);
router.use('/calories', calorieRoutes);

module.exports = router;