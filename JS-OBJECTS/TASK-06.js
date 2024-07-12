function dictionary(array) {
    let allTerms = {};

    for (let curTerm of array) {
        let newCurTerm = JSON.parse(curTerm);
        let key = Object.keys(newCurTerm)[0];
        let value = newCurTerm[key];

        allTerms[key] = value;
    }
 
    let sortedKeys = Object.keys(allTerms).sort((a, b) => a.localeCompare(b));
 
    for (let term of sortedKeys) {
        console.log(`Term: ${term} => Definition: ${allTerms[term]}`);
    }
}
dictionary
([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    
])
