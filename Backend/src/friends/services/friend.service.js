import { friends } from "../model/friend.model.js";

//Get all friends
export const getAllFriends = () => {
    return friends.getFriends();
}

export const createFriend = (newFriend) => {
    friends.createFriend(newFriend)
    return newFriend;
}

export const updateFriend = (id, data) => {
    return friends.updateFriend(id, data)
}
