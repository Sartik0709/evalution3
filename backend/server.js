import express from 'express'
import { config } from 'dotenv'
import connectToDB from './src/config/db.js';
import userRouter from './src/routes/userRoute.js';
import bookRoute from './src/routes/bookRoute.js';
import cors from 'cors'

config();
const port = process.env.PORT || 8080;
const dburl=process.env.DB_URL || null;

const app= express()

app.use(express.json());  
app.use(cors({
  origin : `http://localhost:5173`
}))

//userRoter
app.use('/user', userRouter)

//books router
app.use('/books', bookRoute)

app.get('/', (req, res) => {
   res.send('Hello World!')
 }) 

 
app.listen(port,async ()=>{

 try {
   await connectToDB(dburl)
   console.log("server is running");
 } catch (error) {
   console.log(console.error());
   console.log("stuck");
 }
 
})