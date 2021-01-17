import express from 'express'
const router = express.Router()
import {getProducts, getProductById, deleteProduct} from '../controllers/productController.js'

router.route('/').get(getProducts)

router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router