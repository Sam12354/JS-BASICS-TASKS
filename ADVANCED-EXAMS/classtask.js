class RefurbishedSmartphones {
    availableSmartphones = [];
    soldSmartphones = [];
    constructor(retailer, revenue = 0){
        this.retailer = retailer;
        this.revenue = revenue;
    }

    // do tuk napravihme vsi4ko v samoto na4alo do zadachata chak to HINT You can add more properties to help you finish the task. 
    // purviq metod koito trqbva da dobavim e addSmartphone

    addSmartphone(model, storage, price, condition){
        // medova priema spored zadachata (model, storage, price, condition)
        // ako nqkoe ot tezi 4 ne6ta ne e fulfiled trqbva da hvurlq gre6ka "Invalid smartphone"

        // purvo e ako Model – non-empty string;

        if(!model){
            // nai lesniq na4in da proverq dali e false value
            // dali prazen string, null, undefined, i taka natatuk
            throw new Error("Invalid smartphone!");
        }

        // sega e za storage da e positive number
        if(!Number.isInteger(storage) || storage < 0){
            throw new Error("Invalid smartphone!");
        }

        // sega price
        if(price < 0){
            throw new Error("Invalid smartphone!");
        }

        if(!condition){
            throw new Error("Invalid smartphone!");
        }

        // ina4e dobavqme telefona ako nqma gre6ka zatova pravim obekta spored
        // Otherwise, you should add the smartphone, with properties: {model, storage, price, condition} 
    
        const smartPhone = {model, storage, price, condition}; 
    
        // da dobavq kum available smart phones koeto 6te e mnogo obekti koito sa minali bez gre6ka
        this.availableSmartphones.push(smartPhone);

        // dobavqm kum prazniq masiv koito mi dadoha v na4aloto

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
        // tova go pishe v zada4ata 4e ako vsi4ko minava tova suob6teniq se returnva nakraq
    }

    // gotovo s addSmartphone metoda i sega vtoriq metod
    // sellSmartphone koito priema (model, desiredStorage) 

    sellSmartphone (model, desiredStorage){
        // namirame smartphone po model 
        const smartphone = this.availableSmartphones.find(phone => phone.model === model);
        // ako ne go namerim
        if(!smartphone){
            throw new Error(`${model} was not found!`);
        }

        // ako ne go namerim throw greshka
        let currentPrice = smartphone.price;
        // tova e za sega6niq telefon i sega6nata my cena, demek za telefona koito sum otkril smartPhone s find method
        

        let insaficientStorage = smartphone.storage - desiredStorage;
        // If the difference between the smartphone’s storage and the desiredStorage 
        if(insaficientStorage < 0 && insaficientStorage >= -128){
            currentPrice = currentPrice * 0.9;
        }
        // If the difference between the smartphone’s storage and the desiredStorage 
        // is less or equal to 128 GB – the price gets deducted by 10%
        if(insaficientStorage < -128){
            currentPrice = currentPrice * 0.8;
            // moje da se proveri i po drug na4in
        }

        // sega trqbva da mahna masiva ot available
        // s filtur za6toto e masiv ot obekti
        //You should remove the smartphone from the availableSmartphones array and add it to the soldSmartphones array in the following format: {model, storage, soldPrice}
        this.availableSmartphones = this.availableSmartphones.filter(phone => phone.model !== model);
        //ako e minal prez tezi testove do sega go slagam v drugiq masiv, demek moga da go prodam i toi otgovarq
        //na iziskvaniqta, pravq go s filtur

        // i sega im pravim obekta koito iskat ot nas
        // add it to the soldSmartphones array in the following format: {model, storage, soldPrice}

        // pushvam obetka i go pravq masiv za da polzvam push soldSmartphones e novieq array koito e otgore
        // vse edno 4e sum go prodal sled kato be6e v available 

        this.soldSmartphones.push({
            model,
            storage: smartphone.storage,
            soldPrice: currentPrice,
        });

        // add the soldPrice to the revenue and return:
        this.revenue += currentPrice;

        // i sega return
        return `${model} was sold for ${currentPrice.toFixed(2)}$`;
    }

    // drugata function
    upgradePhones(){ 

        //This method should find the storage for every available smartphone and double it, 
        // koeto zna4i da iterira prez nego za da moje da promeni storage po 2

        // ako nqma tova If there are no available smartphones, throw
        if(this.availableSmartphones.length === 0){
            throw new Error("There are no available smartphones!");
        }
        
        let resultMessage = ['Upgraded Smartphones:'];

        this.availableSmartphones.forEach(phone => {
            phone.storage *= 2;
            // vseki telefon koito e v masiva e every available phone

            //add resultMessage
            const message = `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`;
            // vzimam gi ot tazi funkciq po nagore deto e
            // addSmartphone

            resultMessage.push(message);
        });
        return resultMessage.join('\n');
    }

    salesJournal (criteria){
        const criterias = ["storage", "model"];
        // The two possible criteria are – "storage" or "model";

        if(!criterias.includes(criteria)){
            throw new Error("Invalid criteria!");
            // tova e - If the given criteria do not match either of the possible criteria, an error with the following message should be thrown:
        }

        const sorters = {
            storage: (a, b) => b.storage - a.storage,
            model: (a, b) => a.model.localeCompare(b.model),
        };

        // sortiraneto moje i da se izbegne ako se polzvat if-ove
        
        // tova sa dvata metoda sort za dvata slu4aq
        //If the given criteria is "storage" – 
        //the sold smartphones must be sorted by their storage in descending order;

        //If the given criteria is "model" – the sold smartphones must be sorted alphabetically by their model;

        let messages = [
            `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`,
            `${this.soldSmartphones.length} smartphones sold:`
        ];

        this.soldSmartphones.sort(sorters[criteria]).forEach(phone => {
            messages.push(`${phone.model} / ${phone.storage} GB / ${phone.soldPrice.toFixed(2)}$`);
        });

        return messages.join('\n');
    }
}
let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
console.log(retailer.addSmartphone('', 512, 1900, 'good'));
