import { ipcMain } from 'electron'
import { UserRepository } from './repositories/user-repository'
import bcrypt from 'bcryptjs'

const userRepository = new UserRepository()

export function IpcFunction(): void {
  ipcMain.handle('have-users', async () => {
    const users = await userRepository.HaveUsers()
    return users
  })

  ipcMain.handle(
    'register-user',
    async (__event, username: string, password: string): Promise<void> => {
      const checkUsername = await userRepository.CheckUsername(username)
      if (checkUsername) {
        throw new Error('User already exists')
      }

      const hashedPassword = await bcrypt.hash(password, 8)

      userRepository.RegisterUser(username, hashedPassword)
    }
  )
}
