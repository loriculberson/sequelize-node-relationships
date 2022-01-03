const sequelize = require('../config/connection');
const faker = require('faker')
const { User, Profile, Post } = require('../models');
const userData = require('./userData.json');

function randomPostCount() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData)

  for (const { id } of users ){
    await Profile.create({ name: `${faker.name.firstName()} ${faker.name.lastName()}` , user_id: id })
    
    let i = 0;
    while (i < randomPostCount()) {
      i++;
      await Post.create({ text: faker.lorem.sentence(), user_id: id })
    }
  }
  console.log('Database seeded!')
  process.exit(0);
};

seedDatabase();