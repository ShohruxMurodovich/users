const express = require('express')
const users = require('./users/users')
const verify = require('../middlewares/verify')

const router = express.Router()

router
    .post('/login', users.LOGIN)
    .get('/users',verify,  users.ALL_USERS)
    .post('/add/user', users.ADD_USER)
    .post('/del/user', users.DEL_USER)
    .post('/edit/user', users.EDIT_USER)



module.exports = router