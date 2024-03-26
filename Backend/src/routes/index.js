import express from "express";
import { getGroups, createGroup } from "../controllers/groups.controller.js";

const router = express.Router();

//Routes
router.get('/groups', getGroups );
router.post('/creategroup', createGroup );

export { router };
