const User = require('./User');
const Calorie = require('./Calorie');

User.hasMany(Calorie, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Calorie.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  module.exports = { User, Calorie };