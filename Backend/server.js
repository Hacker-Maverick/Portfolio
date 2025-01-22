import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

//route imports
import homeRoute from './routes/home.js';
import createRoute from './routes/create.js'
import imgroute from './routes/image.js'

const port = 3000;
const app = express();

try { let db = await mongoose.connect("mongodb://localhost:27017/Portfolio") }
catch (e) { console.log(e) };

//middlewares
app.use(express.static('public'))
app.use(cors())

//routes
app.use(homeRoute)
app.use(createRoute)
app.use(imgroute)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})