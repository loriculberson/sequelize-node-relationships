const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

  const User = sequelize.define("user", 
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      freezeTableName: true
    }
  );

module.exports = User;