import { ipcMain } from 'electron'
import { UserRepository } from './repositories/user-repository'

const userRepository = new UserRepository()

export function IpcFunction(): void {
  ipcMain.handle('have-users', async () => {
    const users = await userRepository.HaveUsers()
    return users
  })
}
