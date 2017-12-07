function deepEqual(obj1, obj2) {   
  var props1 = Object.getOwnPropertyNames(obj1);
  var props2 = Object.getOwnPropertyNames(obj2);
  
  if (!arraysEqual(props1, props2)) return false;
 
  for (var i = 0; i < props1.length; i++) {
    if (typeof(obj1[props1[i]]) == 'object') {
      if (!deepEqual(obj1[props1[i]], obj2[props2[i]])) {
        return false;
      }
    }
    
    else if (obj1[props1[i]] !== obj2[props2[i]]) {
        return false;
    }
  }
  
  return true;
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

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true