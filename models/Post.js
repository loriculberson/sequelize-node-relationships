const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

  const Post = sequelize.define("post", 
    {
      text: { 
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      underscored: true
    }
  );

module.exports = Post;