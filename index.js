// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;

    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return 2 * Math.PI * this.radius;
    }



}