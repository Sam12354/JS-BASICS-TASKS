function mooOnline(input){
    let health = 100;
    let coins = 0;
    let array = input.split('|');
    let room = 1;

    for(let commands of array){

        if(commands.includes('potion')){
            let curCommand = commands.split(' ');
            let heal = Number(curCommand[1]);
            if(health + heal > 100){
                let healed = 100 - health;
                health = 100;
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
            }else{
                health += heal
                console.log(`You healed for ${heal} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        }else if(commands.includes('chest')){
            let curCommand = commands.split(' ');
            let coinsFound = Number(curCommand[1]);
            coins += coinsFound
            console.log(`You found ${coinsFound} bitcoins.`);

        }else{
            let curCommand = commands.split(' ');
            let monster = curCommand[0];
            let bossAttack = Number(curCommand[1]);

            health -= bossAttack
            if(health > 0){
                console.log(`You slayed ${monster}.`);
            }else{
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${room}`);
                return;
            }
        }
        room++
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`);
}
mooOnline
("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
