import { Router } from 'express'
import * as userControllers from './userControllers'

const router = Router()

/**
 * GET /api/user
 */
router.get('/', userControllers.getAllUser)

/**
 * post /api/user/login
 */
router.post('/login', userControllers.loginUser)

/**
 * PUT /api/user/add
 */
router.post('/', userControllers.addUser)

/**
 * PUT /api/user/:id
 */
router.put('/:id', userControllers.updateUser);

/**
 * DELETE /api/user/:id
 */
router.delete('/:id', userControllers.deleteUser);






export default router
