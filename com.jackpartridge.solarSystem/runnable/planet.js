let planetPos, planetVel;

function planet(pMass, pRadius, pAngle, pDirection, pColour) {

    this.pMass = pMass;
    this.pRadius = pRadius + sun.mass;
    this.pAngle = pAngle;
    this.pDirection = pDirection;
    this.pColour = pColour;
    planetPos = createVector(this.pRadius * cos(this.pAngle), this.pRadius * sin(this.pAngle))

    // Find direction of orbit and set velocity
    planetVel = planetPos.copy()

    planetVel.rotate(this.pDirection)  // Direction of orbit
    planetVel.normalize()
    planetVel.mult(sqrt((G * sun.mass) / (this.pRadius))) // Circular orbit velocity
    //planetVel.mult(random(1 - destabilise, 1 + destabilise)) // create elliptical orbit
    //let colour = this.pColour;

    planets.push(new Body(this.pMass, planetPos, planetVel, this.pColour));
}