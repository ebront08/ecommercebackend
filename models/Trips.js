const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id',
      },
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'traveller',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trips',
  }
);

module.exports = Trips;
