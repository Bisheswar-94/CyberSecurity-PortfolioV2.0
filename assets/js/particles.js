// ==========================================
// CYBER PARTICLES
// CyberPortfolio v3.0
// ==========================================

const particleCanvas = document.createElement("canvas");
particleCanvas.id = "particles";

document.body.appendChild(particleCanvas);

const pctx = particleCanvas.getContext("2d");

function resizeParticles() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}

resizeParticles();

window.addEventListener("resize", resizeParticles);

const particles = [];

const PARTICLE_COUNT = 80;

class Particle {

    constructor() {

        this.reset();

    }

    reset() {

        this.x = Math.random() * particleCanvas.width;
        this.y = Math.random() * particleCanvas.height;

        this.radius = Math.random() * 2 + 1;

        this.speedY = Math.random() * 0.6 + 0.2;

        this.speedX = (Math.random() - 0.5) * 0.3;

        this.alpha = Math.random() * 0.5 + 0.2;

    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y > particleCanvas.height) {

            this.y = -10;
            this.x = Math.random() * particleCanvas.width;

        }

    }

    draw() {

        pctx.beginPath();

        pctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        pctx.fillStyle = `rgba(0,245,255,${this.alpha})`;

        pctx.fill();

    }

}

for (let i = 0; i < PARTICLE_COUNT; i++) {

    particles.push(new Particle());

}

function animateParticles() {

    pctx.clearRect(
        0,
        0,
        particleCanvas.width,
        particleCanvas.height
    );

    particles.forEach((particle) => {

        particle.update();
        particle.draw();

    });

    requestAnimationFrame(animateParticles);

}

animateParticles();