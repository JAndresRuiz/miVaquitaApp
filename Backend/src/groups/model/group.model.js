/**
 * 
 * {
 *  id: number,
 *  name: string,
 *  debt: number,
 *  color: string,
 * }
 * 
 * 
 */

export const group = {
    total: [],
    create(newGroup){
        newGroup.id = this.total.length + 1;
        this.total.push(newGroup)
        return
    },
    
    getAll(){
        return this.total
    },

    update(id, updatedGroup){
        const index = this.total.findIndex(group => group.id ===  parseInt(id));
        if (index !== -1) {
            this.total[index] = { ...this.total[index], ...updatedGroup };
            return true; // Indicates success
        }
        return false;
    }
}
