import express from 'express'
import cors from 'cors'
import { connectDB } from './dbConnection.js'

const app = express()

app.use(express.json({
    limit: "100mb",
    extended: true
}))

app.use(express.urlencoded({
    extended: true,
    limit: "100mb"
}))

app.use(cors())

app.get('/', (req, res) => {
    res.send('App Is running')
})

const PORT = process.env.PORT || 5000

//DB connecttion
try {
    connectDB()
} catch (e) {
    console.log(e)
}