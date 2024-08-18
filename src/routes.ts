import { Router } from 'express'

import userRoutes from './modules/user/userRoutes'
/**
 * Contains all API routes for the application.
 */
const router = Router()
router.use('/user', userRoutes)
export default router