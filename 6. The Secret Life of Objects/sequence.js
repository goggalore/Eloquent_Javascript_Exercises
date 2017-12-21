function ArraySeq(array) {
  this.position = -1;
  this.array = array;
}
ArraySeq.prototype.next = function() {
  if (this.position >= this.array.length - 1)
    return false;
  this.position++;
  return true;
};
ArraySeq.prototype.current = function() {
  return this.array[this.position];
};

function RangeSeq(from, to) {
  this.position = from - 1;
  this.to = to;
}
RangeSeq.prototype.next = function() {
  if (this.position >= this.to)
    return false;
  this.position++;
  return true;
};
RangeSeq.prototype.current = function() {
  return this.position;
};

function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next())
      break;
    console.log(sequence.current());
  }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104