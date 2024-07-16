function secretChat(array) {
 
    let concealMessage = array.shift();
 
    let row = array.shift();
 
    while (row !== 'Reveal') {
        let operations = row.split(':|:');
 
        if (operations[0] === 'InsertSpace') {
            let givenIndex = Number(operations[1]);
            concealMessage = concealMessage.slice(0, givenIndex) + ' ' + concealMessage.slice(givenIndex);
            console.log(concealMessage);
 
        } else if (operations[0] === 'ChangeAll') {
            let substring = operations[1];
            let replacement = operations[2];
 
            while (concealMessage.includes(substring)) { 
                
                concealMessage = concealMessage.replace(substring, replacement);
                
            }
 
            console.log(concealMessage);
 
        } else if (operations[0] === 'Reverse') {
            let substring = operations[1];
 
            if (concealMessage.includes(substring)) {
                
                let reversedSubstr = substring.split("").reverse().join("");
                concealMessage = concealMessage.replace(substring, reversedSubstr);
               
 
                console.log(concealMessage);
            } else {
                console.log('error');
            }
        }
 
        row = array.shift()
    }
    console.log(`You have a new text message: ${concealMessage}`);
 
}
secretChat
([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])
