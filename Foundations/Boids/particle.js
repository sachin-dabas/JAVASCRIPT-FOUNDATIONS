//click and get the circle
// attracted to the point
// restricted to the radius
// 

function Particle(x,y) {
    this.pos = createVector(x,y);
    this.vel = createVector();
    this.acc = createVector();

    this.show = function() {
        stroke(255);
        strokeWeight(10);
        circle(this.pos.x,this.pos.y);
        point(this.pos.x,this.pos.y);
    }

    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        // this.acc.mult(0);
    }

    this.attracted = function(target) {
        var force = p5.Vector.sub(target,this.pos);
        // var d = force.magSq();
        // d = constrain(d,5,25);
        // var G = 100;
        // var strength = G / (d * d);
        force.setMag(1);
        // if (d < 5) {
        //     force.mult(-1);
        // } 
        this.acc = force;
    }
}



// this.pos = createVector(x,y);
// this.radius = r;
// this.vel = createVector();
// // this.vel = createVector();
// this.acc = createVector();

// this.show = function() {
//     stroke(255);
//     strokeWeight(1);
//     circle(this.pos.x,this.pos.y,r);
//     point(this.pos.x,this.pos.y);
// }

// this.update = function() {
//     this.vel.add(this.acc);
//     this.pos.add(this.vel);
//     // this.acc.mult(0);
// }

// this.attracted = function(target) {
//     var force = p5.Vector.sub(target,this.pos);
//     // var d = force.magSq();
//     // d = constrain(d,5,25);
//     // var G = 100;
//     // var strength = G / (d * d);
//     force.setMag(1);
//     // if (d < 5) {
//     //     force.mult(-1);
//     // } 
//     this.acc = force;
// }
// }