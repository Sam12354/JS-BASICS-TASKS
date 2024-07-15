function registration(array){
    let username = array.shift();
    let row = array.shift()

    while(row !== 'Registration'){

        if(row.includes('Letters')){
            let commands = row.split(' ')
            let kindLetters = commands[1]

            if(kindLetters === 'Upper'){
                username = username.slice().toUpperCase()
                console.log(username);
            }else{
                username = username.slice().toLowerCase()
                console.log(username);
            }

        }else if(row.includes('Reverse')){
            let commands = row.split(' ')
            let startIndex = Number(commands[1]);
            let endIndex = Number(commands[2]);

            if((startIndex >= 0 && startIndex <= username.length - 1) && (endIndex >= 0 && endIndex <= username.length - 1)){
                let stringToChange = username.slice(startIndex , endIndex + 1)
                let reversed = stringToChange.split('').reverse().join('') 
                console.log(reversed);
            }

        }else if(row.includes('Substring')){
            let commands = row.split(' ');
            let substring = commands[1];

            if(username.includes(substring)){
                username = username.replace(substring, '')
                console.log(username);
            }else{
                console.log(`The username ${username} doesn't contain ${substring}.`);
            }

        }else if(row.includes('Replace')){
            let commands = row.split(' ');
            let char = commands[1];

            while(username.includes(char)){
                username = username.replace(char, '-')
            }
            console.log(username);

        }else if(row.includes('IsValid')){
            let commands = row.split(' ');
            let char = commands[1];

            if(username.includes(char)){
                console.log("Valid username.");
            }else{
                console.log(`${char} must be contained in your username.`);
            }

        }

        row = array.shift()
    }

}
registration
([
    "ThisIsSoftUni",
"Reverse 1 3",
"Replace S",
"Substring hi",
"Registration"

])
// ([
//     "John",
//     "Letters Lower",
//     "Substring SA",
//     "IsValid @",
//     "Registration"
// ])
