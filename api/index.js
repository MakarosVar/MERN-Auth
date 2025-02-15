import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const app = express();
app.use((req, res, next) => {
  console.log(
    `${new Date().toISOString()} - ${req.method} ${req.url}`
  );
  next();
});
app.use(express.json());

app.use(cors());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = err.message || 'Server Error';
  console.log(err);
  res
    .status(statusCode)
    .json({ successs: false, message, statusCode });
});
