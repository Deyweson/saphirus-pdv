import { prisma } from '../prisma-client'
import { UserRepositoryInterface } from './user-repository-interface'

export class UserRepository implements UserRepositoryInterface {
  async HaveUsers(): Promise<boolean> {
    const count = await prisma.user.count()
    const response = count > 0
    return response
  }
}
