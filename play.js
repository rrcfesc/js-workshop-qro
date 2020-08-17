const City = require('./city');

const qro = new City('Querétaro');

console.log(qro.name);

qro.printStats()
  .then((stats) => {
    console.log('callback after printStats()!');
    console.log(stats);

    return Math.round(stats.population);
  })
  .then((population) => {
    console.log(population);
  })
;

console.log('End of script!');
