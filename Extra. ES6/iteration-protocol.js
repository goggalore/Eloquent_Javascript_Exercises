// iterations protocols
// lets Javascript objects define or customize their
// iteration behavior

// must implement the @@iterator method
// meaning the object (or one up in its protoype chain)
// must have a property with an iterator key
// avalable by the constant Symbol.iterator

const stringProtocol = (string) => {
  const iterator = string[Symbol.iterator]();
  console.log(iterator);
  
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
};

stringProtocol('hi');

// the Symbol.iterator property of an iterable 
// defines how the for/of loop should behave
// on that iterable

// note that the function* declaration defines a generator function

const symbolIterator = () => {
  const iterable = {};
  
  iterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  };
  
  console.log([...iterable]) // [1, 2, 3]
  
  for (let iteration of iterable) {
    console.log(iteration);
  }
};

symbolIterator();

const makeIterator = (string) => {
  let nextIndex = 0;
  
  return {
    next: () => {
      return nextIndex < string.length ?
        { value: string[nextIndex++], done: false } :
        { done : true}
    }
  }
}

const logIterable = () => {
  let it = makeIterator('hi');
  
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
};

logIterable();

const robotIterator = (name) => {
  let step = 0;
  
  return {
    next: function() {
      if (step === 0) {
        step += 1;
        return { value: `Hello ${name}!`, done: false } 
      }
      if (step === 1) {
        step += 1;
        return { value: `Can't talk right now, gotta go!`,
                 done: false }
      }
      if (step === 2) {
        return { done: true };
      }
    }
  }
};

const talkToRobot = (name) => {
  let robot = robotIterator(name);
  
  console.log(robot.next().value);
  console.log(robot.next().value);
  console.log(robot.next().done);
};

talkToRobot('user');

// a generator (intantiated with function* declar.) are functions
// which can be exited and later re-entered

// their context (variable bindings) will be saved across re-entrances

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

let gen = generator(0);

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 10

// note that generators can yield another generator, 
// as shown above, using the yield* syntax

// now, let's try integrating a generator with the iteration protcol

// creates an iterator that writes up to the nth term of the
// fibonacci numbers

const fibonacci = {
  [Symbol.iterator]: function* () {
    let current = 0;
    let next = 1;
    
    for(;;)
    {
      [current, next] = [next, next + current];  
      yield next;
    }
  }
};

const logFibonacci = (n) => {
  let counter = 1;
  
  for (let term of fibonacci) {
    if (counter > n) break; 
    console.log(`Fibonacci term ${counter}: ${term}`);
    counter++;
  }
}

logFibonacci(5);