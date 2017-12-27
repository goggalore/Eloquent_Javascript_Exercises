// logs the average age difference between child and mother for persons with known mothers in the ancestry file

const ancestry = require('./ancestry.js');

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ageDifferences = ancestry.map(function(child) {
  if (byName[child['mother']] === undefined) {
  	return null;
  }
 
  return child.born - byName[child['mother']].born;
});

ageDifferences = ageDifferences.filter(function(age) {
  return age !== null;
});

var average = average(ageDifferences);
console.log(average);
// → 31.2