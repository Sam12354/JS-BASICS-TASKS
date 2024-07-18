function createSortedList() {
 
    let arrayStore = [];
 
    let object = {
        add: (data) => {
            arrayStore.push(data);
            arrayStore.sort((a, b) => a - b) 
 
        },
 
        remove: (index) => {
            
            if(index >= 0 && index <= arrayStore.length - 1){ 
                arrayStore.splice(index, 1);
            }
 
        },
 
        get: (index) => {
            if(index >= 0 && index <= arrayStore.length -1){
                return arrayStore[index];
            }
        },
 
        get size()  { 
            return arrayStore.length;
        },
 
    }
 
    return object;
 
}
 
 
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1)); 
