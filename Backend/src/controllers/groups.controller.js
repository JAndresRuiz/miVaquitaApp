import groupsService from "../services/groups.service.js";

const getGroups = (req, res) => {
    res.send(groupsService.getGroups());
};

const createGroup = (req, res) => {
    let newGroup = req.body;
    if (newGroup.name.length > 10) {
        res.writeHead(411, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "The name is too long" }));
    } else if (newGroup.name.length < 5) {
        res.writeHead(411, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "The name is too short" }));
    } else {
        res.send(groupsService.createGroup(newGroup));
    }
};

export {
    getGroups,
    createGroup
}
