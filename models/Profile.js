const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

  const Profile = sequelize.define("profile", 
    {
        name: {
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


module.exports = Profile;
