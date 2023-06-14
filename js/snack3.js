console.log('---------------------- SNACK 3 -----------------------');
console.log('JS 3 OK');

const bikeTarget = document.getElementById('bike');

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

const bikesWeights = bikes.map(({ weight }) => weight);

const lowestWeight = Math.min(...bikesWeights);

const lowestWeightBike = bikes.filter(({ weight }) => weight === lowestWeight);

const { name, weight } = lowestWeightBike[0];

console.log(`The lowest weight bike is the ${name}, it weights ${weight} kg`);

bikeTarget.innerText = `La bici più leggera è la ${name}, pesa ${weight} kg`;
