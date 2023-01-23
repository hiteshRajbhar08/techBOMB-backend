const express = require('express');
const { loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/login').post(loginUser);
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
