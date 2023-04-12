const router = require('express').Router();
// Need connection.js in config
const { Calorie, User } = require('../models');
// const withAuth = require('../utils/auth');

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

router.get('/calorie', async (req, res) => {

  try {
    // const projectData = await User.findByPk(req.params.id, {
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    // });
    // console.log(projectData)
    // const project = projectData.get({ plain: true });
    console.log('made it to calories');
    res.render('calorie', {
      // ...project,
      // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Calorie }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});




module.exports = router;