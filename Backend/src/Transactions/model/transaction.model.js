/**
 * 
 * {
 *  id: string,
 *  name: string,
 *  value: double,
 *  state: boolean,
 *  gruopID: string,
 *  participants: [
 *   {name: string,
 *    ID: String,
 *   }
 *   {name: string,
 *    ID: String,
 *   }
 *  ];
 * }
 * 
 * 
 */


export const transactions = {
    total: [],
    createBill(newBill){
        newBill.id = this.total.length + 1;
        this.total.push(newBill)
        return
    },
    
    getBills(){
        return this.total
    },

    updateBill(id, updatedGroup){
        const index = this.total.findIndex(group => group.id ===  parseInt(id));
        if (index !== -1) {
            this.total[index] = { ...this.total[index], ...updatedGroup };
            return true; // Indicates success
        }
        return false;
    }
};
