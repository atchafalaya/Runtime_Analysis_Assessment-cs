let array = [28, 43, -12, 30, 4, 0, 12]

function addToZero (array) {
let value = "False"
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      } 
    }
  }
}
}

//console.log(value)

const perf = require('execution-time')();
perf.start();
addToZero(array);
let results = perf.stop();
console.log('Results for the Add to Zero');
console.log(results);

// time: 0.1512,
// words: '151 μs',
// preciseWords: '151.2 μs',
// verboseWords: '151 microseconds 200 nanoseconds'