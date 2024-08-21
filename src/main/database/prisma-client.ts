import { PrismaClient } from '@prisma/client'
import { app } from 'electron'
import path from 'node:path'

const isDev = process.env.NODE_ENV === 'development'
const dbPath = isDev
  ? path.join(app.getPath('userData'), 'database.db') // Caminho para dev
  : path.join(__dirname, '..', '..', '..', '..', 'database.db') // Caminho para prod

console.log(`file:${dbPath}`)

export const prisma = new PrismaClient({
  datasourceUrl: `file:${dbPath}`
})
