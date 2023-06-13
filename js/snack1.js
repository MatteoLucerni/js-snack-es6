console.log('JS 1 OK');

const placeholderList = document.getElementById('gastby-list');

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
const placeholder = [];

for (let i = 0; i < vips.length; i++) {
  placeholder.push({
    table: 'Tavolo VIP',
    name: vips[i],
    place: 'Posto: ' + (i + 1),
  });
}

console.table(placeholder);

// Stampo in pagina

placeholderList.innerText = placeholder;
