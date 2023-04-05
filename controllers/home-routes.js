const router = require('express').Router();
// Need connection.js in config
const sequelize = require('../config/connection');
const {
    User, 
    Calories,
} = require('../models');

router.get('/')