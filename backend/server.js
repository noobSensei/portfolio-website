import express from 'express'
import dotenv from 'dotenv'
import connnetDB from './config/db.js'
import colors from 'colors'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
   
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

const app = express()

app.use(express.json())

connnetDB()

dotenv.config()

const corsOptions = {
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200,
}

app.get('/', (req, res) => {
  res.send('API is runnig')
})

app.use('/api/products', cors(corsOptions), productRoutes)
app.use('/api/users', cors(corsOptions), userRoutes)
app.use('/api/orders', cors(corsOptions), orderRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)
