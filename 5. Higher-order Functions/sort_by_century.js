//logs the average age per century for entries in the ancestry file

var centuries = {};
const ancestry = require(ancestry.js);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function sortAgesToCentury() {
  var person = {};
  var yearOfDeath = 0;
  
  for(var i = 0; i < ancestry.length; i++) {
    person = ancestry[i];
    yearOfDeath = Math.ceil(person.died / 100);
    
    if(centuries[yearOfDeath] === undefined) {
    	centuries[yearOfDeath] = [];
    }
    
    centuries[yearOfDeath].push(person.died - person.born);
  }
}

function logAverageAge() {
  for(const prop in centuries) {
  	console.log(prop.toString() + ': ' + average(centuries[prop]));
  }
}
sortAgesToCentury();
logAverageAge();
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94