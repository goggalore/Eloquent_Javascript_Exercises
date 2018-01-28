// Arrow function expression is shorter syntax than a function expression,
// and does not have its own this value
// thus these expressions are best suited for non-method functions
// as they cannot be used as constructors

const evens = [0, 2, 4, 6, 8, 10, 12, 14];

console.log(evens.map(i => i + 1));
console.log(evens.map((v, i) => v + i));

const pairs = evens.map(v => ({even: v, odd: v + 1}));

let fives = [];
for(let i = 0; i < pairs.length; i++) {
  const keys = Object.keys(pairs[i]);
  
  for(let j = 0; j < keys.length; j++) {
    if (pairs[i][keys[j]] % 5 === 0) 
      fives.push(pairs[i][keys[j]])
  }
}

console.log(fives);

const bob = {
  _name: 'Bob',
  _friends: ['Jane', 'Patrick', 'Leia'],
  printFriends() {
    this._friends.forEach(f => 
      console.log(this._name + " knows " + f))
  }
};

bob._friends.push('Ted')
bob.printFriends();