class ShadyCarDealership {
    availableCars = []; 
    soldCars = [];

    constructor(dealerName, revenue = 0){
        this.dealerName = dealerName;
        this.revenue = revenue;
    }

    addCar(model, year, mileage, price){
        if(!model){
            throw new Error("Invalid car!");
        }

        if(year < 1950 || !year){
            throw new Error("Invalid car!");
        }

        if(mileage < 0){
            throw new Error("Invalid car!");
        }

        if(price < 0){
            throw new Error("Invalid car!");
        }

        const carProperties = {model, year, mileage, price}
        this.availableCars.push(carProperties)

        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    }

    sellCar (model, desiredYear){
        const curCarToFind = this.availableCars.find(car => car.model === model);

        if(!curCarToFind){
            throw new Error(`${model} was not found!`)
        }

        let soldPrice = curCarToFind.price;
        let currentyearCar = curCarToFind.year;
        let difference = Math.abs(curCarToFind.year - desiredYear);

        if(currentyearCar >= desiredYear){
            soldPrice = curCarToFind.price;
        }else if(difference <= 5){
            soldPrice = curCarToFind.price * 0.9;
        }else if(difference > 5){
            soldPrice = curCarToFind.price * 0.8;
        }

        this.availableCars = this.availableCars.filter(car => car.model !== model)
        this.soldCars.push({
            model: curCarToFind.model,
            year: curCarToFind.year,
            mileage: curCarToFind.mileage, 
            soldPrice
        })
        
        this.revenue += soldPrice;

        return `${curCarToFind.model} (${curCarToFind.year}) was sold for ${soldPrice.toFixed(2)}$`
    }

    prepareCarForSale (model){
        const curCarToFind = this.availableCars.find(car => car.model === model);

        if(!curCarToFind){
            return `${model} was not found for preparation!`
        }

        curCarToFind.mileage *= 0.5;
        curCarToFind.price += curCarToFind.price * 0.3;

        return `${curCarToFind.model} (${curCarToFind.year}) is prepared for sale with ${curCarToFind.mileage} km. - ${curCarToFind.price.toFixed(2)}$`
    }

    salesJournal (criteria){
        const criterias = ['year', 'model'];

        if(!criterias.includes(criteria)){
            throw new Error ("Invalid criteria!");
        }

        const sorters = {
            year: (a, b) => b.year - a.year,
            model: (a, b) => a.model.localeCompare(b.model),
        }

        let messages = [
            `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`,
            `${this.soldCars.length} cars sold:`
        ];

        this.soldCars.sort(sorters[criteria]).forEach(car => {
            messages.push(`${car.model} (${car.year}) / ${car.mileage} km. / ${car.soldPrice.toFixed(2)}$`)
        })

        return messages.join('\n');
    }
}
let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
console.log(retailer.addSmartphone('', 512, 1900, 'good'));
