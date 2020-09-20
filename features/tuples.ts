const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi2: Drink = ['brown', true, 40];
