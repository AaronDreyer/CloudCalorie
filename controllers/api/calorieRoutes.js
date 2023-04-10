const router = require('express').Router();
const { Calorie } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCalorie = await Calorie.create({
      meal_type: calorie.meal_type,
      meal: calorie.meal,
      number_of_calories: calorie.number_of_calories,
      user_id: calorie.user_id
    });

    res.status(200).json(newCalorie);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const calorieData = await Calorie.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!calorieData) {
      res.status(404).json({ message: 'No calorie count with this id! '});
      return;
    }

    res.status(200).json(calorieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;