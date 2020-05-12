var Car = /** @class */ (function () {
    function Car(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    return Car;
}());
// attention vu qu'il s'agit d'un array d'array (tableau de cars) il faut indiquer car(ou autre nom).price (cf constructeur de cars)
var maxPrice = function (cars) { return cars.reduce(function (max, car) { return (car.price > max ? max = car.price : max); }, cars[0].price); };
var minPrice = function (cars) { return cars.reduce(function (min, car) { return (car.price < min ? min = car.price : min); }, cars[0].price); };
var averagePrice = function (cars) { return cars.reduce(function (somme, car) { return (somme + car.price); }, 0) / cars.length; };
var averagePriceByBrand = function (cars) { return function (brand) { return averagePrice(cars.filter(function (car) { return car.brand === brand; })); }; };
var cars = [new Car('Renault', 'Twizy', 7540),
    new Car('Alfa Romeo', 'Mito', 15490),
    new Car('Volkswagen', 'Golf', 21990),
    new Car('Porsche', '718', 55040),
    new Car('BMW', 'Serie 1', 23200),
    new Car('Audi', 'A4', 33670),
    new Car('Porsche', 'Macan', 58835),
    new Car('Volkswagen', 'Polo', 14430),
];
console.log('Max price: ' + maxPrice(cars));
console.log('Min price: ' + minPrice(cars));
console.log('Average price: ' + averagePrice(cars));
console.log('Average price for Porsche: ' + averagePriceByBrand(cars)('Porsche'));
