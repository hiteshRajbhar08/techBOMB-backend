const express = require('express');
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

module.exports = router;
