const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController')
const UsersController = require('../controllers/UsersController')

router.get('/', PagesController.home);
router.post('/users', UsersController.store);

module.exports = router;