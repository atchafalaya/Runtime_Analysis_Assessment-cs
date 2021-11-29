function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
  
const perf = require('execution-time')();
perf.start();
isPangram("The quick brown fox jumped over the lazy dogs");
let results = perf.stop();
console.log('Results for the Pangram');
console.log(results);

//time: 0.4345,
//words: '435 μs',
//preciseWords: '434.5 μs',
//verboseWords: '434 microseconds 500 nanoseconds'