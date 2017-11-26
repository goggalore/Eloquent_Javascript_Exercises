// prints a pyramid with specified height using character char

function logPyramid (height, char) {
  var string = '';
  
  for(var row = 0; row < height; row++) {
    for(var column = 0; column < row + 1; column++){
      string += char;
    }
    string += '\n';
  }
  console.log(string);
} 

logPyramid(10, '#');