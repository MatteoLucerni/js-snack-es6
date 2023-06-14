console.log('---------------------- SNACK 4 -----------------------');
console.log('JS 4 OK');

// funzione per random numbers inclusi
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min)) + min;

const teams = [
  {
    nome: 'Inter',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: 'Milan',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: 'Juve',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: 'Torino',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: 'Sassuolo',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    nome: 'Benevento',
    'punti fatti': 0,
    'falli subiti': 0,
  },
];

let teamRecivedFouls = [];

teams.forEach(team => {
  team['punti fatti'] = getRandomNumber(10, 80);
  team['falli subiti'] = getRandomNumber(1, 20);

  //deconstrutto per stampare il nuovo array
  let { nome, 'punti fatti': puntiFatti, 'falli subiti': falliSubiti } = team;

  teamRecivedFouls.push({
    nome,
    'falli subiti': falliSubiti,
  });
});

console.table(teams);

console.table(teamRecivedFouls);
