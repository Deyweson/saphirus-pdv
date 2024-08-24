import { prisma } from '../prisma-client'
import { UserRepositoryInterface } from './user-repository-interface'

export class UserRepository implements UserRepositoryInterface {
  async CheckUsername(username: string): Promise<boolean> {
    const checkUsername = await prisma.user.findFirst({ where: { name: username } })
    if (checkUsername === null) {
      return false
    } else {
      return true
    }
  }
  async RegisterUser(username: string, password: string): Promise<void> {
    await prisma.user.create({ data: { name: username, pasword: password } })
  }
  async HaveUsers(): Promise<boolean> {
    const count = await prisma.user.count()
    const response = count > 0
    return response
  }
}
