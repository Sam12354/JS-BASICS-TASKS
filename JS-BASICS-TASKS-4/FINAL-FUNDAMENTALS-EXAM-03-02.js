function mirrorWords(array){
    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let exec = pattern.exec(array);
    let mirrorWordsFound = 0;
    let wordsFound = 0;

    let mirrorWords = [];
    while(exec !== null){
        let word = exec[2];
        let mirrorWord = exec[3];
        let reversedWord = mirrorWord.split('').reverse().join('');

        if(reversedWord === word){
            let wordsToPush = `${exec[2]} <=> ${exec[3]}`
            mirrorWords.push(wordsToPush);
        }else{
            wordsFound++;
        }
        mirrorWordsFound++;


        exec = pattern.exec(array);
    }


    if (mirrorWordsFound > 0) {
        console.log(`${mirrorWordsFound} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }
 
    if (mirrorWords.length > 0) {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '));
    } else {
        console.log('No mirror words!');
    }
}
mirrorWords
// ([
//     '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
// ])
([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])
