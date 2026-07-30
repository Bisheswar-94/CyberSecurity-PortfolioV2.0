// ==========================================
// MATRIX RAIN EFFECT
// CyberPortfolio v3.0
// ==========================================

const canvas = document.getElementById("matrix");

if (canvas) {

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    const characters =
        "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*(){}[]<>/\\|";

    const fontSize = 16;

    let columns = Math.floor(canvas.width / fontSize);

    let drops = new Array(columns).fill(1);

    function drawMatrix() {

        ctx.fillStyle = "rgba(5,8,22,0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00F5FF";
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {

            const text =
                characters.charAt(
                    Math.floor(Math.random() * characters.length)
                );

            ctx.fillText(
                text,
                i * fontSize,
                drops[i] * fontSize
            );

            if (
                drops[i] * fontSize > canvas.height &&
                Math.random() > 0.975
            ) {

                drops[i] = 0;

            }

            drops[i]++;

        }

    }

    let matrixInterval = setInterval(drawMatrix, 35);

    window.addEventListener("resize", () => {

        clearInterval(matrixInterval);

        resizeCanvas();

        columns = Math.floor(canvas.width / fontSize);

        drops = new Array(columns).fill(1);

        matrixInterval = setInterval(drawMatrix, 35);

    });

}
