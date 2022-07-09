const router = require('express').Router();
const {User, Post, Comment} = require('../models');

router.get('/', async(req, res) => {
   try{
    const post = await Post.findAll({
        include: [User]
    })
    const postData = post.map(post => post.get({plain: true}));
    res.render('homepage', {postData});
   } catch (err) {
    res.status(500).json(err);
   }
});







router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});
// findbypk
router.get('/singlepost', (req, res) => {
    res.render('singlepost');
});




module.exports = router