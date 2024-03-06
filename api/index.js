// SmSTyCeN0r8Y3rgs
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/userRoute.js";
import authRouter from './routes/authRoute.js'
import cookieParser from "cookie-parser";
import dataa from "./models/dataSchema.js";
import DefaultData from "./defaultdata.js";
import path from "path";
import cors from 'cors'

const app= express();
app.use(express.json());

app.use(cookieParser());
app.use(cors({
  origin:["http://localhost:5173"],
  credentials:true
}))

const DB =process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  }); 


const __dirname = path.resolve();


app.listen(5000, () =>{
    console.log('Server is running on port 5000')
});

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)


app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*',(req, res)=>{
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });

  DefaultData();