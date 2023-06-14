console.log('---------------------- SNACK 3 -----------------------');
console.log('JS 3 OK');

const bikes = [
  {
    name: 'Basso',
    weight: 15,
  },
  {
    name: 'Fantic',
    weight: 10,
  },
  {
    name: 'Bianchi',
    weight: 12,
  },
  {
    name: 'Torpado',
    weight: 8,
  },
  {
    name: 'Piaggio',
    weight: 14,
  },
  {
    name: 'Olmo',
    weight: 17,
  },
];

const bikesWeights = bikes.map(bike => bike.weight);

const lowestWeight = Math.min(...bikesWeights);

const lowestWeightBike = bikes.filter(bike => bike.weight === lowestWeight);

console.log(
  `The lowest weight bike is the ${lowestWeightBike[0].name}, it weights ${lowestWeightBike[0].weight} kg`
);
