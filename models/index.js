const User = require('./User')
const Profile = require('./Profile')
const Post = require('./Post')

User.hasOne(Profile, {
  onDelete: "cascade",
})

Profile.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Post, {
  onDelete: "cascade"
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Profile, Post }