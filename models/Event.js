const { DataTypes } = require('sequelize');
const db = require('../config/database');

const eventSchema = {
  name: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
    default: null,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    default: null,
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    default: null,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  owner: {
    type: DataTypes.STRING,
    default: null,
    allowNull: true,
  },
  coordinates: {
    type: DataTypes.FLOAT,
    default: null,
    allowNull: true,
  },
  ticket_price: {
    type: DataTypes.INTEGER,
  },
  date_from: {
    type: DataTypes.TIME,
  },
  date_to: {
    type: DataTypes.TIME,
    default: null,
    allowNull: true,
  },
  time: {
    type: DataTypes.TIME,
  },
  source_url: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.INTEGER,
    default: null,
    allowNull: true,
  },
  created_by: {
    type: DataTypes.INTEGER,
  },
};

const Event = db.define('events', eventSchema);

module.exports = Event;
