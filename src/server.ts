import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import { userRouter, bannerRouter } from './routes'

dotenv.config()

const app = express()
app.use(cors())

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false }))

app.use(
  '/uploads',
  express.static(path.join(__dirname, '..', '..', 'tmp', 'uploads'))
)
app.use(userRouter, bannerRouter)

app.listen(process.env.PORT || 3000, () => { console.log('🚀 server is running') })
