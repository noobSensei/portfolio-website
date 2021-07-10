import express from 'express'

import {
  authUser,
  getUserProfile,
  resisterUser,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(resisterUser)
router.route('/login').post(authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
