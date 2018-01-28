// Set, similar to those in mathematics,

// Set objects are collections of values (elements)
// A value in a set may only occur once (unique)

const mySet = new Set([1, 1, 1, 2, 3, 3, 4])

console.log(mySet); // Set { 1, 2, 3, 4 }

// iterates through insertion order

// === operator to compare elements, NaN is considered the same as NaN

// -------------------------------------------------------------------

// implementation of some basic set operations

// set containment

Set.prototype.isSubset = function(subset) {
    for (let element of subset) {
        if (!this.has(element)) {
            return false;
        }
    } 

    return true;
}

Set.union = function(...sets) {
    return sets.reduce((accumulator, current) => {
        for (let element of current) {
            accumulator.add(element);
        }

        return accumulator;
    }, new Set());
};

Set.intersection = function(...sets) {
    let checked = new Set();

    return sets.reduce((accumulator, current) => {
        for (let element of current) {
            if (checked.has(element)) {
                continue;
            }

            checked.add(element);

            for (let set of sets) {
                if (!set.has(element)) {
                    return accumulator;
                }  
            }
            
            return accumulator.add(element);  
        }
    }, new Set());
};

Set.difference = function(setA, setB) {
    let difference = new Set(setA)

    for (let element of setB) {
        difference.delete(element);
    }

    return difference;
};

const setA = new Set([1, 2, 3]);
const setB =  new Set([3, 4, 5]);
const setC = new Set([3, 6]);

const subsetA = new Set([1, 2])

console.log(Set.union(setA, setB, setC)); // Set { 1, 2, 3, 4, 5, 6 }
console.log(Set.intersection(setA, setB, setC)); // Set { 3 }
console.log(Set.difference(setA, setC)); // Set { 1, 2 }

console.log(setA.isSubset(subsetA)); // true
console.log(setA.isSubset(setB)); // false

// just as the case with maps, weak sets exist as well,
// and they only hold objects which can be garbage collected,
// if there is no other reference to the object.