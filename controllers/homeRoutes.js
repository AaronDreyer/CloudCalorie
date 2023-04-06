const router = require('express').Router();
// Need connection.js in config
const { Calorie, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const calorieData = await Calorie.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const calories = calorieData.map((calorie) => calorie.get({ plain: true }));

    res.render('homepage', {
      calories,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/calorie/:id', async (req, res) => {
  try {
    const calorieData = await Calorie.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const calorie = calorieData.get({ plain: true });

    res.render('calorie', {
      meal_type: calorie.meal_type,
      meal: calorie.meal,
      number_of_calories: calorie.number_of_calories,
      user_id: calorie.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/calorie', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ['password'] },
      include: [{ model: Calorie }],
    });

    const user = userData.get({ plain: true });

    res.render('calorie', {
      name: user.name,
      email: user.email
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/calorie');
    return;
  }
  res.render('login');
});

module.exports = router;