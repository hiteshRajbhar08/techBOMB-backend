const express = require('express');
const { addOrderItems } = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').post(protect, addOrderItems);

module.exports = router;
