// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any other key-value pair
}

function createCar(manufacturer: string, model: string, ...additionalInfo: { [key: string]: any }[]): Car {
    const car: Car = { manufacturer, model, ...additionalInfo };
    return car;
}

const myCar = createCar('Toyota', 'Corolla', { color: 'blue' }, { year: 2022 });
console.log(myCar);
