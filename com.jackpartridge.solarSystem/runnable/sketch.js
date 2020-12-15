let planets = []
let sun
let numPlanets = 5;
let G = 9.81
let destabilise = 0.15

function setup() {
    createCanvas(windowWidth, windowHeight)
    sun = new Body(198, createVector(0, 0), createVector(0, 0), color(227, 148, 0))

    // Initialise the planets
    planet(0.328, 69.79, 90, -PI / 2, color(151, 151, 159)); //mercury
    planet(4.86, 107.99, 180, -PI / 2, color(187, 183, 171)); //venus
    planet(5.09, 147.24, 220, -PI / 2, color(107, 147, 214)); //earth
    planet(0.639, 223.81, 280, -PI / 2, color(147, 72, 56)); //mars
    planet(18.9, 363.64, 30, -PI / 2, color(167, 156, 134)); //jupiter
    /*planet(4, 250, 30, PI / 2, 'indigo'); //saturn
    planet(41, 350, 30, -PI / 2, 'violet'); //uranus
    planet(18, 135, 30, -PI / 2, 'black'); //neptune */

}

function draw() {
    background(50)
    translate(width / 2, height / 2)
    for (let i = numPlanets - 1; i >= 0; i--) {
        sun.attract(planets[i])
        planets[i].gravity()
        planets[i].show()
    }
    sun.show()
}