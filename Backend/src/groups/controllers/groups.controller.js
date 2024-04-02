import express from "express";
// Services import
import { createGroup, getAllGroups, updateGroup } from "../services/groups.service.js";
//Validator
import { validationRulesCreateGroup, validationRulesUpdateGroup, getRandomNum } from "../schema/group.schema.js";
import { validate } from "../../middlewares/validate.js";

const router = express.Router();

function randomColor () {
    let selectColor = ["#d50cbc", "#3cde12", "#36190D", "#ffffff", "#ffab00", "#fc8cbe", "#ff0000"];
    return selectColor[getRandomNum()];
}

// Controller get all groups
router.get('/groups', (req, res) => {
    return res.status(200).json(getAllGroups());
});

router.post('/group', validate(validationRulesCreateGroup), (req, res, next) => {
    let inData = req.body;
    function color() {
        if (!inData.color) {
            inData.color = randomColor();
        }
    }
    color();
    return res.status(201).json(createGroup(inData));
});

router.put('/group/:id', validate(validationRulesUpdateGroup), (req, res, next) => {
    const {id} = req.params;
    return res.status(204).json(updateGroup(id, req.body));
});

export  {router as groupRouter}


//