// spread syntax, allows an iterable to be expanded

const sum = (x, y, z) => {return x + y + z}
console.log(...[1, 2, 3]);
console.log(sum(...[1, 2, 3]));

// when the ... syntax is used as the last argument 
// to a function however, it's called a rest

function subtract(...args) {
  return args.reduce((accum, current) => {
    return accum - current;
  })
}

console.log(subtract(1, 2, 3));

// or used in destructuring with arrays

let [a, ...b] = [1, 2, 3, 4, 5];

console.log(a, b);

let [c, d, e] = [1, 2, 3];

console.log(c, d, e);

let {f, g} = {
  f: 'bob', 
  g: 12
};

console.log(f, g);
 
// convenient for swapping variables

const logSwap = (a, b) => {
  let log1 = `Variable 1 was ${a}`;
  let log2 = `\nVariable 2 was ${b}`;
  
  [a, b] = [b, a];
  
  log1 += `, and now is ${a}`;
  log2 += `, and now is ${b}`;
  
  console.log(log1, log2);
};

logSwap('hello', 'world');

// useful for even unpacking even url

const parseProtocol = (url) => {
  let parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  
  const [, protocol, fullhost, fullpath] = parsedURL;
  // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]
  
  return protocol;
}
  
console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript'));

// interesting unpacking
// foo becomes a variable with value 42,
// and bar becomes a variable with value true

// useful for assigning variables with a different name
// than the object property

let o = {p: 42, q: true};
let {p: foo, q: bar} = o;
 
console.log(foo); // 42 
console.log(bar); // true

// default values

let {bazz = 10, bee = 12} = {bazz: 3};

console.log(bazz, bee);

// assinging new variable names
// alternative to above?

let {x:x1, y:y1} = {x: 1, y: 0};

console.log(x1, y1);

// can be used above with default values,
// i.e. {x:x1 = 10, y:y1 = 12}

// started using functions here for examples because of
// namespace polution

// for/of iteration and destructuring

const iterateDeconstruct = () => {
  let people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];
  
  for (let {name: n, family: {mother: m}} of people) {
    console.log(`Name: ${n}, Mother: ${m}`);
  }
}

iterateDeconstruct();

const getUserDetails = () => {
  let user = { 
    id: 42, 
    displayName: 'jdoe',
    fullName: { 
        firstName: 'John',
        lastName: 'Doe'
    }
  };
  
  const userId = ({id}) => {
    return id;
  }
  
  const whois = ({displayName, fullName: {firstName, lastName}}) => {
    console.log(`${displayName} is ${firstName} ${lastName}`)
  };
  
  console.log(userId(user));
  whois(user);
};

getUserDetails();