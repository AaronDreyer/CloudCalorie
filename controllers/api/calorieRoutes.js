const router = require('express').Router();
const { Calorie } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {

    const userId = req.session.user_id;

    const newCalorie = await Calorie.create({
      meal_type: req.body.meal_type,
      meal: req.body.meal,
      number_of_calories: req.body.number_of_calories,
      user_id: userId,
    });
    console.log(newCalorie);

    res.status(200).json(newCalorie);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;
