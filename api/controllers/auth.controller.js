import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    console.log('Hashed password created');

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    console.log('New user saved successfully');

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error in signup:', error);
    next(errorHandler(500, error.message));
  }
};
