const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING } = Sequelize;
const db = require('../db');

const Pokemon = db.define('pokemon', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false
  },
});

module.exports = Pokemon;
