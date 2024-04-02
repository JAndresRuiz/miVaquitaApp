import express from "express";
import { getBills, createBill, updateBill } from "../services/transaction.service.js";

const router = express.Router();

router.get('/transactions', (req, res) => {
    return res.status(200).json(getBills());
});

router.post('/transaction', (req, res) => {
    return res.status(201).json(createBill(req.body));
});

router.put('/transaction/:id', (req, res) => {
    const {id} = req.params;
    return res.status(204).json(updateBill(id, req.body));
});

export  {router as transactionRouter}
