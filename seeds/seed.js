const sequelize = require('../config/connection');
const { User, Calorie } = require('../models');

const userData = require('./userData.json');
const calorieData = require('./calorieData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const calorie of calorieData) {
    await Calorie.create({
      ...calorie,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
