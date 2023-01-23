const express = require('express');
const {
  loginUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(loginUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
