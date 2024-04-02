/**
 * 
 * {
 *  id: number,
 *  name: string,
 *  participate: booblean
 * }
 * 
 * 
 */



export const friends = {
    total: [],
    createFriend(newfriend){
        newfriend.id = this.total.length + 1;
        this.total.push(newfriend)
        return
    },
    
    getFriends(){
        return this.total
    },

    updateFriend(id, updatedGroup){
        const index = this.total.findIndex(group => group.id ===  parseInt(id));
        if (index !== -1) {
            this.total[index] = { ...this.total[index], ...updatedGroup };
            return true; // Indicates success
        }
        return false;
    }
};
