document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');

    let posX = 550;
    let posY = -50;

    function animation() {
        update();
        draw();

        window.requestAnimationFrame(animation);
    }

    function update() {
        posX -= 5;
        posY += 5;
    }

    function draw() {
        ctx.beginPath();
        ctx.moveTo(posX, posY);
        ctx.lineTo(posX - 40, posY + 40);
        ctx.lineTo(posX, posY + 40);
        ctx.lineTo(posX + 40, posY);
        ctx.lineTo(posX, posY);

        ctx.stroke();
        ctx.strokeStyle = "#000000";
        ctx.fillStyle = "#000000";

        ctx.fill();
        ctx.closePath();
    }

    window.requestAnimationFrame(animation);
});