const { User, Post, Comment } = require('../models');

const users = [

    {
        username: 'Lucy',
        password: 'test12345'
    },

    {
        username: 'Jeff',
        password: '12345678'
    },

    {
        username: 'Yassi',
        password: 'abcd6789'
    },

    {
        username: 'Arya',
        password: '1234abcd'
    },

]

const posts = [

    {
        title: 'why coding is so fun?',
        content: 'Because it is',
        user_id: 2
    },

    {
        title: 'Cool App',
        content: 'This app is so cool',
        user_id: 1
    },

    {
        title: 'Testing',
        content: 'What does this post look like?',
        user_id: 3
    },

]

const comments = [

    {
        content: 'Test number one',
        user_id: 2,
        post_id: 1
    },

    {
        content: 'Test number two',
        user_id: 3,
        post_id: 1
    },

]


const plantSeeds = async () => {


    await User.bulkCreate(users, { individualHooks: true });
    await Post.bulkCreate(posts);
    await Comment.bulkCreate(comments);

}

plantSeeds();