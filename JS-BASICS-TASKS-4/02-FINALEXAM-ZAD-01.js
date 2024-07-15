function zad1(array){
    let travelStops = array.shift()

    let row = array.shift();
    while(row !== "Travel"){
        
        if(row.includes('Add')){
            let commands = row.split(":");
            let index = Number(commands[1]);
            let string = commands[2];

            if(index >= 0 && index <= travelStops.length - 1){
                travelStops = travelStops.slice(0, index) + string + travelStops.slice(index);
            }
            console.log(travelStops);
        }else if(row.includes('Remove')){
            let commands = row.split(':')
            let startIndex = Number(commands[1]);
            let endIndex = Number(commands[2]);

            if((startIndex >= 0 && startIndex <= travelStops.length - 1) && (endIndex >= 0 && endIndex <= travelStops.length - 1)){
                travelStops = travelStops.slice(0 , startIndex) + travelStops.slice(endIndex + 1);
            }
            //така или иначе трябва да се отпечата, конзол лога не трябва да е в къдравите скоби горе
            console.log(travelStops);
        }else if(row.includes('Switch')){
            let commands = row.split(':');
            let oldString = commands[1];
            let newString = commands[2];

            if(travelStops.includes(oldString)){
                travelStops = travelStops.replace(oldString, newString)
                
            }
            console.log(travelStops);
        }

        row = array.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${travelStops}`);
}
zad1
([
    "Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"
])