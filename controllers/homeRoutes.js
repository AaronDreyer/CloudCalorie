const router = require('express').Router();
// Need connection.js in config
const sequelize = require('../config/connection');
const { User, Profile } = require('../models');

