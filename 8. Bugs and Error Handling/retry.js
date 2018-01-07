/*
*
* PROMPT: 
* Say you have a function primitiveMultiply that, in 50 percent of cases, 
* multiplies two numbers, and in the other 50 percent, raises an exception of 
* type MultiplicatorUnitFailure. Write a function that wraps this clunky 
* function and just keeps trying until a call succeeds, after which 
* it returns the result
*
* Make sure you handle only the exceptions you are trying to handle.
*
*/

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  var result = 0;
  
  for(;;) {
  	try {
      result = primitiveMultiply(a, b);
      break;
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }
  
  return result;
}

console.log(reliableMultiply(8, 8));
// → 64