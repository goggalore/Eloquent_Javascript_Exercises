function logCheckerboard(width, height, char) {
  var string = '';
  width *= 2; // to make board look symmetric, actually makes double width
  
  for(var row = 0; row < height; row++){
  	for(var column = 0; column < width; column++) {
      if((row + column) % 2 === 0) {
        string += ' ';
      }
      else {
        string += char;
      }
    }
    
    string += '\n'
  }
  
  return string;
}

console.log(logCheckerboard(10, 10, '#'));