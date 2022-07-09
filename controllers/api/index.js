const router = require('express').Router();

const postRoute = require('./postRoutes')

router.use('/post', postRoute)





module.exports = router