import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import * as dotenv from 'dotenv'
dotenv.config()


const app = express();
const corsOptions = {
    origin: ['http://localhost:3000','https://destination-client.vercel.app']
  }
  
app.use(cors(corsOptions))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/api/posts', postRoutes);
app.use("/api/user", userRouter);
app.get('/', (req,res) => {
    res.send('APP IS RUNNING OK')
})

const DB_CONNECTION_URL = process.env.MONGO_DB_URL;
const PORT = process.env.PORT|| 5000;

mongoose.set("strictQuery", false);
mongoose.connect(DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


