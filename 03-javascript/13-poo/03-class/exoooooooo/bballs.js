<<<<<<< HEAD
/*//first version small balls
let Ball = function() {
    this.x = Math.floor(Math.random() * 400);
    this.y = Math.floor(Math.random() * 400);
    this.xSpeed = -2;
    this.ySpeed = 3;
  };
  
  
  let circle = function(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  };
  
  Ball.prototype.draw = function() {
    circle(this.x, this.y, 3, true);
  };
  
  Ball.prototype.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  };
  
  Ball.prototype.checkCollision = function() {
    if (this.x < 0 || this.x > width) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed = -this.ySpeed;
    }
  };
  
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  
  
  const width = canvas.width;
  const height = canvas.height;
  
  const ballsCount = 10;
  const balls = [];
  for(var i = 0; i < ballsCount; i++){
      var ball = new Ball()
      balls.push(ball);
  }
  
  setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < balls.length; ++i) {
      balls[i].draw();
      balls[i].move();
      balls[i].checkCollision();
    }
    ctx.strokeRect(0, 0, width, height);
  }, 30);
 */

//second version
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var explosions = [];
var mouseX;
var mouseY;

canvas.addEventListener('mousemove', setMouse, false);

canvas.addEventListener('click', function() {
    explosions.push(new explosion(mouseX, mouseY));
}, false);

function loop() {
    ctx.clearRect(0, 0, 500, 500);
    drawExplosion();
    requestAnimationFrame(loop);
}

loop();

function drawExplosion() {
    if (explosions.length === 0) {
        return;
    }

    for (let i = 0; i < explosions.length; i++) {
        const explosion = explosions[i];
        const projectiles = explosion.projectiles;

        if (projectiles.length === 0) {
            explosions.splice(i, 1);
            return;
        }

        const projectilesRemove = projectiles.slice();

        for (let ii = 0; ii < projectiles.length; ii++) {
            const projectile = projectiles[ii];

            // remove projectile if radius is below 0
            if (projectile.radius < 0) {
                projectilesRemove.splice(ii, 1);
                continue;
            }

            // draw
            ctx.beginPath();
            ctx.arc(projectile.x, projectile.y, projectile.radius, Math.PI * 2, 0, false);
            ctx.closePath();
            ctx.fillStyle = 'hsl(' + projectile.h + ',' + projectile.s + '%,' + projectile.l + '%)';
            ctx.fill();


            // update
            projectile.x -= projectile.vx * 1;
            projectile.y -= projectile.vy * 1;
            projectile.radius -= 0.02;


            // collisions
            if (projectile.x > 500) {
                projectile.x = 500;
                projectile.vx *= -1;
            }

            if (projectile.x < 0) {
                projectile.x = 0;
                projectile.vx *= -1;
            }

            if (projectile.y > 500) {
                projectile.y = 500;
                projectile.vy *= -1;
            }

            if (projectile.y < 0) {
                projectile.y = 0;
                projectile.vy *= -1;
            }
        }

        explosion.projectiles = projectilesRemove;
    }
}

function explosion(x, y) {
    this.projectiles = [];

    for (let i = 0; i < 100; i++) {
        this.projectiles.push(
            new projectile(x, y)
        );
    }
}

function projectile(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 2 + Math.random() * 4;
    this.vx = -10 + Math.random() * 20;
    this.vy = -10 + Math.random() * 20;
    this.h = 200;
    this.s = Math.floor((Math.random() * 100) + 70);
    this.l = Math.floor((Math.random() * 70) + 30);
}

function setMouse(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
=======
/*//first version small balls
let Ball = function() {
    this.x = Math.floor(Math.random() * 400);
    this.y = Math.floor(Math.random() * 400);
    this.xSpeed = -2;
    this.ySpeed = 3;
  };
  
  
  let circle = function(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  };
  
  Ball.prototype.draw = function() {
    circle(this.x, this.y, 3, true);
  };
  
  Ball.prototype.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  };
  
  Ball.prototype.checkCollision = function() {
    if (this.x < 0 || this.x > width) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed = -this.ySpeed;
    }
  };
  
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  
  
  const width = canvas.width;
  const height = canvas.height;
  
  const ballsCount = 10;
  const balls = [];
  for(var i = 0; i < ballsCount; i++){
      var ball = new Ball()
      balls.push(ball);
  }
  
  setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < balls.length; ++i) {
      balls[i].draw();
      balls[i].move();
      balls[i].checkCollision();
    }
    ctx.strokeRect(0, 0, width, height);
  }, 30);
 */

//second version
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var explosions = [];
var mouseX;
var mouseY;

canvas.addEventListener('mousemove', setMouse, false);

canvas.addEventListener('click', function() {
    explosions.push(new explosion(mouseX, mouseY));
}, false);

function loop() {
    ctx.clearRect(0, 0, 500, 500);
    drawExplosion();
    requestAnimationFrame(loop);
}

loop();

function drawExplosion() {
    if (explosions.length === 0) {
        return;
    }

    for (let i = 0; i < explosions.length; i++) {
        const explosion = explosions[i];
        const projectiles = explosion.projectiles;

        if (projectiles.length === 0) {
            explosions.splice(i, 1);
            return;
        }

        const projectilesRemove = projectiles.slice();

        for (let ii = 0; ii < projectiles.length; ii++) {
            const projectile = projectiles[ii];

            // remove projectile if radius is below 0
            if (projectile.radius < 0) {
                projectilesRemove.splice(ii, 1);
                continue;
            }

            // draw
            ctx.beginPath();
            ctx.arc(projectile.x, projectile.y, projectile.radius, Math.PI * 2, 0, false);
            ctx.closePath();
            ctx.fillStyle = 'hsl(' + projectile.h + ',' + projectile.s + '%,' + projectile.l + '%)';
            ctx.fill();


            // update
            projectile.x -= projectile.vx * 1;
            projectile.y -= projectile.vy * 1;
            projectile.radius -= 0.02;


            // collisions
            if (projectile.x > 500) {
                projectile.x = 500;
                projectile.vx *= -1;
            }

            if (projectile.x < 0) {
                projectile.x = 0;
                projectile.vx *= -1;
            }

            if (projectile.y > 500) {
                projectile.y = 500;
                projectile.vy *= -1;
            }

            if (projectile.y < 0) {
                projectile.y = 0;
                projectile.vy *= -1;
            }
        }

        explosion.projectiles = projectilesRemove;
    }
}

function explosion(x, y) {
    this.projectiles = [];

    for (let i = 0; i < 100; i++) {
        this.projectiles.push(
            new projectile(x, y)
        );
    }
}

function projectile(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 2 + Math.random() * 4;
    this.vx = -10 + Math.random() * 20;
    this.vy = -10 + Math.random() * 20;
    this.h = 200;
    this.s = Math.floor((Math.random() * 100) + 70);
    this.l = Math.floor((Math.random() * 70) + 30);
}

function setMouse(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
}