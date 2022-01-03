const User = require('./User')
const Profile = require('./Profile')
const Post = require('./Post')

User.hasOne(Profile, {
  onDelete: "cascade",
})

Profile.belongsTo(User);

User.hasMany(Post, {
  onDelete: "cascade",
});

Post.belongsTo(User);

module.exports = { User, Profile, Post }