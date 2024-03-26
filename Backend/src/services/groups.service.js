const BD = [];

const getGroups = () => {
    return BD;
}

const createGroup = (newGroup) => {
        BD.push(newGroup);
        return "201";
}

export default { getGroups, createGroup };
