class Car{
    constructor(carBrand, model, year, power){
        this.carBrand = carBrand;
        this.model = model;
        this.year = year;
        this.power = power;
    }

    getSummary(){
        return `${this.carBrand} ${this.model} was created in ${this.year} and has ${this.power}horsepower`;
    }

    revise(newYear) {
      this.year = newYear;
      this.revised = true;
    }
}

class Bus extends Car{
    constructor(carBrand, model, year, power, seatsCount, type){
        super(carBrand, model, year, power);
        this.type = type;
        this.seatsCount = seatsCount;
    }

    getPrice(price){
        return `The cost of travel on this ${this.type} is ${price} rubles`
    }

    getCount(count){
        const freePlaces = this.seatsCount - count;
        if (freePlaces > 0) {
            return `${freePlaces} seats available`
        } else {
            return `${this.type} is full`
        }
        
    }
}
class Truck extends Car{
    constructor(carBrand, model, year, power, capacity){
        super(carBrand, model, year, power);
        this.capacity = capacity;
    }
    getCapacity(weight){
        const freePlaces = this.capacity - weight;
        if (freePlaces >= 0) {
            return `On this ${this.carBrand} ${this.model} you can transport this cargo`
        } else{
            return `U cannot transport this cargo`
        }
    }
}

// Instantiate object
const car1 = new Car(
    'Tesla',
    'Model X',
    2019,
    350
)

const eBus = new Bus(
    'Mercedes',
    'Benz',
    '2010',
    500,
    60,
    'electro bus')

const truck1 = new Truck(
    'Volvo',
    'T1',
    '2012',
    1000,
    5000)