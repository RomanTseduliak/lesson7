let teslaX = {}
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = '50000';

console.log(teslaX.price);

teslaX.beep = function() {
    console.log('tesla X beep-beep');
}
teslaX.beep

let wolkswagenBug = {}
wolkswagenBug.make = 'wolkswagen';
wolkswagenBug.model = 'bug';
wolkswagenBug.price = '35000';
beep: function() {
    console.log('wolkswagen bug beep-beep');
}
};
wolkswagenBug.beep();let teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = 90000;

console.log(teslaX.price);

teslaX.beep = beep;

teslaX.beep();

let volkswagenAtlas = {
    make: 'Volkswagen',
    model: 'Atlas',
    price: 35000,
    beep: beep
};

volkswagenAtlas.beep();

function beep() {
    console.log(this.make + ' ' + this.model + ' beep-beep!')
}
function Car(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
    return this;
}
Car.prototype.beep = beep;

let audiQ8 = new Car('Audi', 'Q8', 70000);
audiQ8.beep();

class SuperCar {
    constructor(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price;
    }
    beep() {
        console.log(this.make + ' ' + this.model + ' beep-beep!');
    }
}