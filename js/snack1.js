console.log('---------------------- SNACK 1 -----------------------');
console.log('JS 1 OK');

const vips = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin',
];
// const placeholder = [];

// for (let i = 0; i < vips.length; i++) {
//   placeholder.push({
//     table: 'Tavolo VIP',
//     name: vips[i],
//     place: 'Posto: ' + (i + 1),
//   });
// }

const placeholder = vips.map((vip, i) => ({
  table: 'Tavolo VIP',
  name: vip,
  place: 'Posto: ' + (i + 1),
}));
console.table(placeholder);
