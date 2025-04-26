function updateTime() {
    const now = new Date();
    const timeEl = document.getElementById('current-time');
    const dateEl = document.getElementById('current-date');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    if (timeEl) {
        timeEl.textContent = `${hours}:${minutes}:${seconds}`;
    }

    const options = { day: 'numeric', month: 'long' };
    const formattedDate = now.toLocaleDateString('ru-RU', options);
    if (dateEl) {
        const dateSpan = dateEl.childNodes[0];
        if (dateSpan && dateSpan.nodeType === Node.TEXT_NODE) {
             dateSpan.textContent = formattedDate + ' ';
        } else if (dateSpan && dateSpan.tagName === 'SPAN') {
             dateSpan.textContent = formattedDate;
        }
    }
}
setInterval(updateTime, 1000);
updateTime();

document.addEventListener('DOMContentLoaded', () => {
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".card[data-tilt]"), {
            max: 8,
            speed: 400,
            glare: true,
            "max-glare": 0.3
        });
    } else {
        console.error("VanillaTilt is not loaded");
    }

    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray;

        const particleColor = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim() || 'rgba(255, 255, 255, 0.7)';
        const lineColor = getComputedStyle(document.documentElement).getPropertyValue('--line-color').trim() || 'rgba(255, 255, 255, 0.1)';

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        }
        window.addEventListener('resize', resizeCanvas);

        let mouse = {
            x: null,
            y: null,
            radius: (canvas.height / 110) * (canvas.width / 110)
        };

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });
         window.addEventListener('mouseout', () => {
            mouse.x = undefined;
            mouse.y = undefined;
        });

        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
                this.originalX = x; // Store original position for return effect
                this.originalY = y;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius + this.size) {
                    // Push away from mouse
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 3;
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 3;
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 3;
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 3;
                    }
                } else {
                    // Smooth return to original position or general movement
                     // if (this.x !== this.originalX || this.y !== this.originalY) {
                     //   let returnDx = this.originalX - this.x;
                     //   let returnDy = this.originalY - this.y;
                     //   this.x += returnDx / 30; // Adjust speed of return
                     //   this.y += returnDy / 30;
                     //} else {
                       this.x += this.directionX / 2; // Slower general movement
                       this.y += this.directionY / 2;
                     //}
                }

                 // Keep particles within bounds after push/pull
                 if (this.x < this.size) this.x = this.size;
                 if (this.x > canvas.width - this.size) this.x = canvas.width - this.size;
                 if (this.y < this.size) this.y = this.size;
                 if (this.y > canvas.height - this.size) this.y = canvas.height - this.size;

                this.draw();
            }
        }

        function initParticles() {
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1; // Smaller particles
                let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 1 - 0.5); // Slower speed
                let directionY = (Math.random() * 1 - 0.5);
                let color = particleColor;
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        function connectParticles() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a + 1; b < particlesArray.length; b++) { // Start b from a + 1
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                                 + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000); // Fade line with distance

                        // Check if lineColor already has alpha, parse it
                        let parsedLineColor = lineColor;
                        let baseColor = lineColor;
                        let currentAlpha = 1;

                        if (lineColor.startsWith('rgba')) {
                           let match = lineColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
                           if (match) {
                               baseColor = `rgb(${match[1]}, ${match[2]}, ${match[3]})`;
                               currentAlpha = match[4] ? parseFloat(match[4]) : 1;
                           }
                        }
                        let finalAlpha = Math.min(currentAlpha, opacityValue > 0 ? opacityValue : 0); // Ensure alpha is not negative
                        parsedLineColor = baseColor.replace('rgb', 'rgba').replace(')', `, ${finalAlpha})`);

                        ctx.strokeStyle = parsedLineColor;
                        ctx.lineWidth = 0.5; // Thinner lines
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            requestAnimationFrame(animateParticles);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connectParticles();
        }

        resizeCanvas(); // Initial setup
        animateParticles(); // Start animation
    }
});

Copy