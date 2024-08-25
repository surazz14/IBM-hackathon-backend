import { Router } from 'express'
import * as messageController from './messageController'

const router = Router()

router.post('/', messageController.getResponse)



export default router