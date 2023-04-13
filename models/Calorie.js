const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Calorie extends Model {}

Calorie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    meal_type:{
      type: DataTypes.STRING,
      // allowNull: false,
    },
    meal: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    number_of_calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'CloudCalorie',
  }
);

module.exports = Calorie;
