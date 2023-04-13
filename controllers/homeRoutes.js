const router = require('express').Router();
// Need connection.js in config
const { Calorie, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/homepage', async (req, res) => {
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

router.get('/calorie', withAuth, async (req, res) => {
  try {
    // Render the calorie.handlebars view
    res.render('calorie', {
      logged_in: true
    });
  } catch (err) {
    // Render the calorie.handlebars view with a 500 status code on error
    res.status(500).render('calorie');
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

module.exports = router;
