import express from 'express'
const router = express.Router()
import {authUser} from '../controllers/userController.js'

router.get('/', (req,res) => {
  res.send('Hello user')
})
router.post('/login', authUser)

export default router;