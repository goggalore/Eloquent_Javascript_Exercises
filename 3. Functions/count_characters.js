function countBs(string) {
  var letter = 'B';
  var counter = 0;
  
  string = string.split('');
  for (var i = 0; i < string.length; i++){
    if (string[i] === letter) {
      counter++;
    }
  }
  
  return counter;
}

// generalized
function countChar(string, letter) {
  var counter = 0;
  
  string = string.split('');
  
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      counter++;
    }
  }
  
  return counter;
}

// generalized, ignore case, counts any pattern of chars
function insensitiveCountChars(string, chars) {
  var counter = 0;
  var substring = '';

  string = string.toLowerCase().split('');
  chars = chars.toLowerCase().split('');

  for (var i = 0; i < string.length; i++){
    substring = string.slice(i, i + chars.length);

    if (arraysEqual(substring, chars)) {
      counter++
    } 
  }

  return counter;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == undefined || b == undefined) return false;
  if (a.length !== b.length) return false;

  
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]){
      return false
    }
  }
  
  return true;
}

console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4
console.log(insensitiveCountChars('Your couch', 'OU'));
// → 2