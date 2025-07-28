import express from  'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from "./routes/users.js"
import dotenv from 'dotenv'
import multer from 'multer'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config()
const app = express();
app.use(cors());

app.use(express.json());  // only for parsing incoming data(in req.body) with json format

app.use(express.urlencoded({ extended: true })); // only for parsing application/x-www-form-urlencoded data type. It converts the x-www-form-urlencoded data (e.g., key1=value1&key2=value2) into a JavaScript object.

app.use(userRouter)
app.use(express.static(path.join(__dirname, 'client/build')));

mongoose.connect(process.env.MONGO_URI).then(()=> {
  console.log('Connected to MongoDB')
}).catch(err => {
   console.error(err)
})
// Serve frontend (if applicable)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')))
// }
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build'));
});

// Multer setup for file uploads
// const storage = multer.memoryStorage(); // Store files in memory buffer
// const upload = multer({ storage });

app.listen(3000, ()=> console.log('server runing on port 3000'))