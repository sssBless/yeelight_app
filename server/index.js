import express from 'express';
import cors from 'cors';
import { router as yeelightRouter } from './routes/yeelight.js';
import { config } from 'dotenv';

config();

const app = express();
const APP_PORT = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/yeelight', yeelightRouter);

app.listen(APP_PORT, () => {
  console.log(`Server running on port ${APP_PORT}...`);
});
