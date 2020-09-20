const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

const carsByMake2: string[][] = [];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompativle values
carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
  return car;
});
