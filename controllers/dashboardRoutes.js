// Import
const router = require('express').Router();
const { User, Post } = require('../models');
// const loggedIn = require('../utils/auth');

//end point of /dashboard
router.get('/dashboard', async (req, res) => {
  try {
    const userData = await User.findOne({
      include: [{ all: true, nested: true }],
      where: {
        user_id: req.session.user_id,
      },
    });

    if (!userData) {
      return res.status(404).json({
        message: 'This user ID does not exist. Please enter a valid user ID!',
      });
    }

    const postData = await Post.findAll({
      include: [{ model: User }],
      where: {
        user_id: req.params.id
      }
    })
    // Render data
    const users = userData.get({ plain: true });
    const posts = postData.map(post =>
      post.get({ plain: true })
    )
    res.render('profile', {
      users,
      posts,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;