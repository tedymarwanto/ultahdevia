function tampilkanPesan() {
  const pesan = document.getElementById("pesan");
  pesan.classList.remove("hidden");
}

function tampilFoto(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function tutupFoto() {
  document.getElementById("lightbox").style.display = "none";
}

// Konfetti hati
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 100; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1,
    opacity: Math.random(),
    direction: Math.random() * 2 * Math.PI
  });
}

function drawHeart(x, y, size, opacity) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
  ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size * 2);
  ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y);
  ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
  ctx.fillStyle = `rgba(255, 102, 153, ${opacity})`;
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hearts.forEach(heart => {
    drawHeart(heart.x, heart.y, heart.size, heart.opacity);
    heart.y += heart.speed;
    heart.x += Math.sin(heart.direction);

    if (heart.y > canvas.height) {
      heart.y = -heart.size * 2;
      heart.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

animate();