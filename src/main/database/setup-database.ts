import { app } from 'electron'
import path from 'node:path'
import sqlite from 'sqlite3'

const isDev = process.env.NODE_ENV === 'development'
const dbPath = isDev
  ? path.join(app.getPath('userData'), 'database.db') // Caminho para dev
  : path.join(__dirname, '..', '..', '..', '..', 'database.db') // Caminho para prod

export const setupDatabase = async (): Promise<void> => {
  const db = new sqlite.Database(dbPath, (err) => {
    if (err) {
      return console.error(err.message)
    }
  })

  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY,
      name TEXT,
      password TEXT
    )`,
    (err) => {
      if (err) {
        console.error('Error creating table:', err.message)
      } else {
        console.log('Table created successfully')
      }
    }
  )

  db.close((err) => {
    if (err) {
      console.error(err.message)
    }
    console.log('Close the database connection.')
  })
}
