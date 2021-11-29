
const perf = require('execution-time')();
const charString =("Thequickbrownfoxjumpedoverthelazydogs");

function uniqueCheck(charString){
    for (let i =0; i < charString.length; i++ ) {
        for (let j =0; j < charString.length; j++) {
            if (charString[i] === charString[j])
            return false;

            return true;
        }

    }

}
perf.start();
uniqueCheck(charString);
let results = perf.stop();
console.log('Results for the unique character check');
console.log(results);

// time: 0.4104,
// words: '410 μs',
// preciseWords: '410.4 μs',
// verboseWords: '410 microseconds 400 nanoseconds'