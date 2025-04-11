const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

let hearts = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 100;
  this.size = Math.random() * 10 + 10;
  this.speed = Math.random() * 1 + 0.5;
  this.opacity = Math.random();

  this.draw = function () {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = '#ff69b4';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x + this.size / 2, this.y - this.size,
                      this.x + this.size * 1.5, this.y + this.size / 3,
                      this.x, this.y + this.size);
    ctx.bezierCurveTo(this.x - this.size * 1.5, this.y + this.size / 3,
                      this.x - this.size / 2, this.y - this.size,
                      this.x, this.y);
    ctx.fill();
  }

  this.update = function () {
    this.y -= this.speed;
    if (this.y < -10) {
      this.y = canvas.height + Math.random() * 100;
    }
  }
}

function init() {
  for (let i = 0; i < 60; i++) {
    hearts.push(new Heart());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart) => {
    heart.update();
    heart.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();
