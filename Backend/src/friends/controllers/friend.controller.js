import express from "express";
//Service import
import { getAllFriends, createFriend, updateFriend } from "../services/friend.service.js";

const router = express.Router();

// Controller get all friends
router.get('/friends', (req, res) => {
    return res.status(200).json(getAllFriends());
});

router.post('/friend', (req, res) => {
    return res.status(201).json(createFriend(req.body));
});

router.put('/friend/:id', (req, res) => {
    const {id} = req.params;
    return res.status(204).json(updateFriend(id, req.body));
});

export  {router as friendsRouter}
