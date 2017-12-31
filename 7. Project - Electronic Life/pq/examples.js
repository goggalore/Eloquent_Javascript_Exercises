const PriorityQueue = require('./priority-queue')

var pQueue = new PriorityQueue();

console.log(pQueue.isEmpty());
// → true

pQueue.push('a', 1);
pQueue.push('b', 2);
pQueue.push('c', 0.5);

console.log(pQueue.isEmpty());
// → false
console.log(pQueue.length);
// → 3
console.log(pQueue.peek());
// → b
console.log(pQueue);
// → PriorityQueue { data: [ [ 'c', 0.5 ], [ 'a', 1 ], [ 'b', 2 ] ] }
console.log(pQueue.pop());
// → b
console.log(pQueue);
// → PriorityQueue { data: [ [ 'c', 0.5 ], [ 'a', 1 ] ] }
console.log(pQueue.containsKey('a'));
// → true
console.log(pQueue.containsKey('j'));
// → false