import { Request, Response } from 'express'
import { User } from '../entities/User'

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User()
    const { firstName, lastName } = req.body
    user.firstName = firstName
    user.lastName = lastName

    await user.save()

    return res.json(user)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await User.findOneBy({ id: Number(id) })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    await User.update({ id: Number(id) }, req.body)
    res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await User.delete({ id: Number(id) })
    if (result.affected === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
