// validationSchema.js
import { body, param } from 'express-validator';

export const validationRulesCreateGroup = [
    body('name').isString().withMessage('The name must not be numeric').notEmpty().isLength({ min: 1, max: 30 }).withMessage(`'Name must have within 1 to 30 characters`),
];

export const validationRulesUpdateGroup = [
    param('id').notEmpty().isNumeric(),
    body('name').isString().withMessage('The name must not be numeric').notEmpty().isLength({ min: 1, max: 30 }).withMessage(`'Name must have within 1 to 30 characters`),
];

export function getRandomNum() {
    let min = 0;
    let max = 6;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
