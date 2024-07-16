function passwordReset(array) {
    let password = array.shift();
    let row = array.shift();

    while(row !== 'Done'){

        if(row.includes('TakeOdd')){
            let newPass = '';
            let index = 0;

            for(let letter of password){
                if(index % 2 !== 0){
                    newPass += letter;
                }

                index++;
            }
            password = newPass;
            console.log(password);

        }else if(row.includes('Cut')){
            let commands = row.split(' ')
            let index = Number(commands[1]);
            let length = Number(commands[2]);

            password = password.slice(0, index) + password.slice(index + length);
            console.log(password);

        }else if(row.includes('Substitute')){
            let commands = row.split(' ');
            let substring = commands[1];
            let substitute = commands[2];

            if(password.includes(substring)){
                while(password.includes(substring)){
                    password = password.replace(substring, substitute)
                }
                console.log(password);
            }else{
                console.log("Nothing to replace!");
            }
        }

        row = array.shift();
    }
    console.log(`Your password is: ${password}`);

}
passwordReset
(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
