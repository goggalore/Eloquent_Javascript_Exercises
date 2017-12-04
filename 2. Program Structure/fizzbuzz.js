// print fizz when divisible by 3, buzz when divisible by 5
// fizzbuzz when divisible by both 3 and 5

function fizzbuzz(start, end) {
  var temp = 0;
  
  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }
  
  for (start; start <= end; start++) {
    if (start % 3 === 0 && start % 5 === 0) {
      console.log('fizzbuzz')
    }
    else if (start % 3 === 0) {
      console.log('fizz');
    }
    else if (start % 5 === 0) {
      console.log('buzz');
    }
    else {
      console.log(start);
    }
  }
}

fizzbuzz(0, 0);