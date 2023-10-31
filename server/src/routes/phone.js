import express from "express";
import {body} from 'express-validator';

const router = express.Router();

import phoneController from '../controllers/phone-controller.js';
import { validateObjectId, validateInputFields, ctrlWrapper } from '../middlewares/index.js';

const categoryValidations = [
  body('title').isLength({ min: 3, max: 100 }).isString(),
  body('imageUrl').isURL()
];

router.get('/', ctrlWrapper(phoneController.getPhones));
router.get('/:id', validateObjectId, ctrlWrapper(phoneController.getPhoneById));
router.post('/', validateInputFields(categoryValidations), ctrlWrapper(phoneController.addPhone));

export default router;