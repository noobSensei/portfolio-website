import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'

const router = express.Router()

//@description fetch all products
//@route GET /api/products
//@access public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

//@description fetch single product
//@route GET /api/products/:id
//@access public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const prductId = mongoose.Types.ObjectId(req.params.id)
    const product = await Product.findById(prductId)

    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
