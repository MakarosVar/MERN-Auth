import User from '../models/user.model';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, hashedPassword });
  try {
    await newUser.save();
    res.status(201).json('New user created successfully');
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
