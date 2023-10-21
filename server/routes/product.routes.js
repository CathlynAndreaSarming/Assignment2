import express from 'express'
import productController from '../controllers/product.controller.js'
const router = express.Router ()
router.route('/api/products')
    .get(productController.list)
    .post(productController.create)
router.route('/api/products/:productId')
    .get(productController.read)
    .put(productController.update)
    .delete(productController.remove)
router.param('productId', productController.productByID)
router.route('/api/products') .post(productController.create)
router.route('/api/products') .get(productController.list)
router.route('/api/products/:productId') .get(productController.read)
router.route('/api/products/:productId') .put(productController.update)
router.route('/api/products/:productId') .delete(productController.remove)

export default router