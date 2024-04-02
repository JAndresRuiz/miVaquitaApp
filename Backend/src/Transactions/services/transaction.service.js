import { transactions } from "../model/transaction.model.js";

//Get all friends
export const getBills = () => {
    return transactions.getBills();
}

export const createBill = (newBill) => {
    transactions.createBill(newBill)
    return newBill;
}

export const updateBill = (id, data) => {
    return transactions.updateBill(id, data)
}
