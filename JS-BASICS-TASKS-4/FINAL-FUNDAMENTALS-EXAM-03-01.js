function zad1(array) {
 
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
                
                concealMessage = concealMessage.replace(substring, replacement);// - заменяме съвпадението с новия стринг!
                
            }
 
            console.log(concealMessage);
 
        } else if (operations[0] === 'Reverse') {
            let substring = operations[1];
 
            if (concealMessage.includes(substring)) {
                //let index = concealMessage.indexOf(substring); - не ти трябват индекси, директно заместваш!!!
                let reversedSubstr = substring.split("").reverse().join("");
                concealMessage = concealMessage.replace(substring, reversedSubstr);
                //concealMessage = concealMessage.slice(0, index) + concealMessage.slice(index + substring.length) + reversedSubstr;
 
                console.log(concealMessage);
            } else {
                console.log('error');
            }
        }
 
        row = array.shift()
    }
    console.log(`You have a new text message: ${concealMessage}`);
 
}
zad1
([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])
