const express = require('express');
const router = express.Router()
const { signup } = require('../../controllers/users');

// PUBLIC
router.post('/signup', signup)


// PROTECTED


module.exports = router;