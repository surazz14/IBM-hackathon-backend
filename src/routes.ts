import { Router } from 'express'

import messageRoutes from './modules/Message/messageRoute'
/**
 * Contains all API routes for the application.
 */
const router = Router()
router.use('/message', messageRoutes)
export default router