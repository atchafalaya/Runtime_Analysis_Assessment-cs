function findLongestWord(str) {
    const splStrArray = str.split(' ');
  
    let longestWord = "";
    for(let index = 0; index < splStrArray.length; index++){
      if(splStrArray[index].length > longestWord.length){
           longestWord = splStrArray[index];
       }
    }
   return longestWord
  }

const perf = require('execution-time')();
perf.start();
findLongestWord("The quick brown fox jumped over the lazy dogs");
let results = perf.stop();
console.log('Results for the longest word');
console.log(results);

// time: 0.2359,
// words: '236 μs',
// preciseWords: '235.9 μs',
// verboseWords: '235 microseconds 900 nanoseconds'