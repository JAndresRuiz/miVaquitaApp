import { group } from "../model/group.model.js";

//Get all groups
export const getAllGroups = () => {
    return group.getAll();
}

export const createGroup = (newGroup) => {
    group.create(newGroup)
    return newGroup;
}

export const updateGroup = (id, data) => {
    return group.update(id, data)
}
