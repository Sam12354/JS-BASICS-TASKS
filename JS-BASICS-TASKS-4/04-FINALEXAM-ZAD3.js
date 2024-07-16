function heroesOfCodeAndLogic(array) {
    let iterate = Number(array.shift());
    let row = array.shift();
    let curHero = {};
    let allHeroes = [];

    for(let i = 0; i < iterate; i++){
        let commands = row.split(' ');
        let hero = commands[0];
        let hp = Number(commands[1]);
        let mp = Number(commands[2]);

        if(hp > 100){
            hp = 100;
        }
        
        if(mp > 200){
            mp = 200;
        }

        curHero = { hero, hp, mp };
        allHeroes.push(curHero);

        row = array.shift();
    }

    while(row !== 'End'){
        let commands = row.split(' - ');

        if(commands[0] === 'CastSpell'){
            let hero = commands[1];
            let mpNeed = Number(commands[2]);
            let spellName = commands[3];
            
            let findHero = allHeroes.find(h => h.hero === hero);
            if(findHero){

                if(findHero.mp >= mpNeed){
                    findHero.mp -= mpNeed
                    console.log(`${hero} has successfully cast ${spellName} and now has ${findHero.mp} MP!`);
                }else{
                    console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                }

            }

        }else if(commands[0] === 'TakeDamage'){
            let hero = commands[1];
            let dmg = Number(commands[2]);
            let attacker = commands[3];

            let findHero = allHeroes.find(h => h.hero === hero);
            if(findHero){

                findHero.hp -= dmg;
                if(findHero.hp > 0){
                    console.log(`${hero} was hit for ${dmg} HP by ${attacker} and now has ${findHero.hp} HP left!`);
                }else{
                    let idx = allHeroes.indexOf(findHero);
                    allHeroes.splice(idx, 1);
                    console.log(`${hero} has been killed by ${attacker}!`);
                }

            }

        }else if(commands[0] === 'Recharge'){
            let hero = commands[1];
            let amount = Number(commands[2]);

            let findHero = allHeroes.find(h => h.hero === hero);
            if(findHero){

                if((findHero.mp + amount) > 200){
                    let healed = 200 - findHero.mp;
                    findHero.mp = 200;
                    console.log(`${hero} recharged for ${healed} MP!`);
                }else{
                    findHero.mp += amount;
                    console.log(`${hero} recharged for ${amount} MP!`);
                }

            }

        }else if(commands[0] === 'Heal'){
            let hero = commands[1];
            let amount = Number(commands[2]);

            let findHero = allHeroes.find(h => h.hero === hero);
            if(findHero){

                if((findHero.hp + amount) > 100){
                    let healed = 100 - findHero.hp;
                    findHero.hp = 100
                    console.log(`${hero} healed for ${healed} HP!`);
                }else{
                    findHero.hp += amount
                    console.log(`${hero} healed for ${amount} HP!`);
                }

            }
        }

        row = array.shift();
    }

    for(let hero of allHeroes){
        console.log(`${hero.hero}`);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    }
}
heroesOfCodeAndLogic
([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])
// ([
//     "4",
//     "Adela 90 150",
//     "SirMullich 70 40",
//     "Ivor 1 111",
//     "Tyris 94 61",
//     "Heal - SirMullich - 50",
//     "Recharge - Adela - 100",
//     "CastSpell - Tyris - 1000 - Fireball",
//     "TakeDamage - Tyris - 99 - Fireball",
//     "TakeDamage - Ivor - 3 - Mosquito",
//     "End"
// ])