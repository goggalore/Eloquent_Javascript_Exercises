class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    } 

    get norm() {
        return this.calcNorm();
    }

    calcNorm() {
        return Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2)))
    }

    static add(a, b) {
        const [x, y] = [a.x + b.x, a.y + b.y]

        return new Vector(x, y);
    };

    static substract(a, b) {
        const [x, y] = [a.x - b.x, a.y - b.y];

        return new Vector(x, y);
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }

    static dotProduct(a, b) {
        const [x, y] = [a.x * b.x, a.y * b.y];

        return new Vector(x, y);
    }

    static rotate(vector, angle) {
        angle *= Math.PI/180;

        const [x, y] = [vector.x * Math.cos(angle) - vector.y * Math.sin(angle),
                        vector.x * Math.sin(angle) + vector.y * Math.cos(angle)];

        return new Vector(x, y);
    }
}

function isMultipleOf(a, b) {
    if (a < b) { 
        return false; 
    }

    if (a/b % 1 === 0) {
        return true;
    }
    
    return false;
}

const goldenRatio = (1 + Math.sqrt(5))/2;

export { Vector, isMultipleOf, goldenRatio };