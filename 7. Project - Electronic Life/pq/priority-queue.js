function PriorityQueue() {
    this.data = [];
}

Object.defineProperty(PriorityQueue.prototype, 'length', {
    get: function() {
        return this.data.length;
    }
});

PriorityQueue.prototype.clear = function() {
    this.data = [];
};

PriorityQueue.prototype.containsKey = function(key) {
    for(var i = 0; i < this.data.length; i++) {
        if (this.data[i][0] === key) {
            return true;
        }
    }

    return false;
};

PriorityQueue.prototype.isEmpty = function() {
    if (this.length === 0) {
        return true;
    }

    return false;
};

PriorityQueue.prototype.peek = function() {
    return this.data[this.data.length - 1][0];
};

PriorityQueue.prototype.pop = function() {
    return this.data.pop()[0];
};

/**
 * @param {VALUE} element
 * @param {number} priority
 */

PriorityQueue.prototype.push = function(element, priority) {
    if (priority === undefined) {
        priority = 0;
    }

    this.data.push([element, priority]);
    
    return this.data.sort(function(a, b) {
        if (a[1] > b[1]) {
            return -1;
        }

        return 1;
    });
};

PriorityQueue.prototype.shift = function() {
    return this.data.shift()[0];
};

if (typeof module != "undefined" && module.exports)
  module.exports = PriorityQueue;