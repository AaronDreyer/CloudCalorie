const router = require('express').Router();
const { Calorie } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newCalorie = await Calorie.create({
      meal_type: req.body.meal_type,
      meal: req.body.meal,
      number_of_calories: req.body.number_of_calories,
    });
    console.log(newCalorie);

    res.status(200).json(newCalorie);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    // Fetch all calorie information from the database
    const calories = await Calorie.findAll();

    // Send the fetched calorie information as response
    res.status(200).json(calories);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
