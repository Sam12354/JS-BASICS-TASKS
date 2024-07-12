function inventory(array){
    let curHero = {};
    let allHeroes = [];
 
    for(let heroGame of array){
        let commands = heroGame.split(' / ');
        let hero = commands[0];
        let level = Number(commands[1]);
        let items = commands[2];
 
        curHero = { hero, level, items };
        allHeroes.push(curHero);
    }
 
    allHeroes.sort((a, b) => a.level - b.level);
    for(let hero of allHeroes){
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory
([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
])
