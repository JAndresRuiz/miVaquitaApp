/**
 * 
 * {
 *  id: string,
 *  name: string,
 *  value: double,
 *  state: string,
 *  gruopID: string,
 *  participants: [
 *   {name: string,
 *    ID: String,
 *   }
 *   {name: string,
 *    ID: String,
 *   }
 *  ];
 * }
 * 
 * 
 */

// validationSchema.js
import { body, param } from 'express-validator';

export const validationRulesCreateBill = [
    param('id').notEmpty().isNumeric(),
    body('name').isString().withMessage('The name must not be numeric').notEmpty().withMessage("Add a name to your bill"),
    param('id').notEmpty().isNumeric(),
    body('name').isString().withMessage('The name must not be numeric').notEmpty().withMessage("Add a name to your bill"),
];
