function Body(mass, distance, velocity, colour) {
    this.mass = mass
    this.pos = distance
    this.vel = velocity
    this.d = this.mass * 2
    this.path = []

    this.gravity = function () {
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
        this.path.push(createVector(this.pos.x, this.pos.y))
        if (this.path.length > 150) this.path.splice(0, 1)
    }

    this.applyForce = function (f) {
        this.vel.x += f.x / this.mass
        this.vel.y += f.y / this.mass
    }

    this.attract = function (attractor) {
        let r = dist(this.pos.x, this.pos.y, attractor.pos.x, attractor.pos.y)
        let f = (this.pos.copy()).sub(attractor.pos)
        f.setMag((G * this.mass * attractor.mass) / (r * r))
        attractor.applyForce(f)
    }

    this.show = function () {
        stroke(0, 60)
        for (let i = 0; i < this.path.length - 2; i++) {
            line(this.path[i].x, this.path[i].y, this.path[i + 1].x, this.path[i + 1].y)
        }
        stroke(colour)
        fill(colour);
        noStroke()
        ellipse(this.pos.x, this.pos.y, this.d, this.d)
    }

}
