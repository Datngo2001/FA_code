class Vec {
    #X;
    #Y;
    get X() {
        return this.#X
    }
    get Y() {
        return this.#Y
    }
    get length() {
        return ((this.#X) ** 2 + (this.#Y) ** 2) ** 0.5
    }

    constructor(x, y) {
        this.#X = x;
        this.#Y = y;
    }

    plus(newVec) {
        this.#X += newVec.X
        this.#Y += newVec.Y
        return this
    }

    minus(newVec) {
        this.#X -= newVec.X
        this.#Y -= newVec.Y
        return this
    }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)))
console.log(new Vec(1, 2).minus(new Vec(2, 3)))
console.log(new Vec(1, 2).length)