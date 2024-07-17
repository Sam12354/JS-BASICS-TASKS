function emojiDetector(array) {
    let array2 = array.slice();
    let pattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let exec = pattern.exec(array2);
    let allEmojis = [];

    let coolThershold = 1

    let iterate = array.join("").split(' ')

    for(let word of iterate){
        
        for(let letter of word){
            if(/[0-9]/.test(letter)){
                coolThershold *= letter
            }
        }

    }
    console.log(`Cool threshold: ${coolThershold}`);

    let emojiFound = 0;
    while(exec !== null){
        let curEmoji = exec[0];
        let curWordEmoji = exec[2]

        let sum = 0;
        for(let letter of curWordEmoji){
            sum += letter.charCodeAt();
        }

        if(sum > coolThershold){
            allEmojis.push(curEmoji);
        }

        emojiFound++;
        exec = pattern.exec(array2);
    }

    console.log(`${emojiFound} emojis found in the text. The cool ones are:`);
    for(let emoji of allEmojis){
        console.log(emoji);
    }
}
emojiDetector
(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])