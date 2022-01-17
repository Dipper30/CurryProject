import { Router } from 'express'
import { 
  AuthController,
  RecordController,
  // ConfigController,
} from '../controller/index'

const router: Router = Router()

// auth
// router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/record', RecordController.postRecord)

module.exports = router