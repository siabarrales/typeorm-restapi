import { Router } from 'express'
import {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
} from '../controllers/user.controllers'

const router = Router()

router.post('/users', createUser)
router.get('/users', getUsers)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router
