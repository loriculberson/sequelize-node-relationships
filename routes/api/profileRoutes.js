const router = require('express').Router();
const { Profile, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const profileData = await Profile.findAll();
    res.status(200).json(profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const profileData = await Profile.findByPk(req.params.id, {
      include: [{ model: User }]
    });

    if (!profileData) {
      res.status(404).json({ message: 'No profile found with that id!' });
      return;
    }

    res.status(200).json(profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newProfile = await Profile.create(req.body)
    res.status(200).json(newProfile);
  } catch (err) {
    res.status(500).json(err);
  }
})
module.exports = router;