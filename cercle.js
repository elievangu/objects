class Cercle {
    constructor(r) {
        this.rayon = r
    }
    perimetre() {
        return 2 * Math.PI * this.rayon;
    }
    aire() {
        return Math.pow(this.rayon, 2) * Math.PI;
    }
}

let monCercle = new Cercle(12)

console.log(`Le rayon de mon cercle est de ${monCercle.rayon} cm, le pémirimètre de ${monCercle.perimetre()} et l'aire de ${monCercle.aire()}`)