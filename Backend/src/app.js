import express from "express";
import cors from 'cors';
import { groupRouter } from "./groups/controllers/groups.controller.js";
import { friendsRouter } from "./friends/controllers/friend.controller.js";
import { transactionRouter } from "./Transactions/Controllers/transactions.controller.js";


const app = express();
const PORT = 3001;

app.use(express.json());

app.use(cors());
app.use('/', groupRouter);
app.use('/', friendsRouter);
app.use('/', transactionRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
