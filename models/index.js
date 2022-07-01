const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE'
});

module.exports = {User, Post, Comment};