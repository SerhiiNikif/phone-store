import express from 'express';
import {body} from 'express-validator';

const router = express.Router();

import authController from '../controllers/auth-controller.js';
import { ctrlWrapper, validateInputFields } from '../middlewares/index.js';

const authValidations = [
  body('email').isEmail(),
  body('password').isLength({min: 3, max: 32}).isString()
];

router.post('/registration', validateInputFields(authValidations), ctrlWrapper(authController.registration));
router.get('/activate/:link', ctrlWrapper(authController.activate));
router.post('/login', ctrlWrapper(authController.login));

export default router