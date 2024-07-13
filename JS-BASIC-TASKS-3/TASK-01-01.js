function computerStore(input){
    let index = 0
    let command = input[index]
    index++;
    let allMoney = 0;
    while(command !== "special" && command !== "regular"){
        let money = Number(command)
        if(money <= 0){
            console.log("Invalid price!");
            command = input[index]
            index++
            continue;
        }

            allMoney += money

        command = input[index]
        index++
    }
    
    if(allMoney === 0){
        console.log("Invalid order!");
        return;
    }

    if(command === "special"){
        let taxes = allMoney * 0.2
        let specialTaxes = (allMoney + taxes) * 0.9

        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${allMoney.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${specialTaxes.toFixed(2)}$`);

    }else if(command === "regular"){
        let taxes = allMoney * 0.2
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${allMoney.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        let totalPrice = taxes + allMoney
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}
computerStore
([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
