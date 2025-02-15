import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', (req, res, next) => {
  console.log('Received signup request');
  console.log('Request body:', req.body);
  signup(req, res, next);
});

router.post('/signin', (req, res) => {});

export default router;
