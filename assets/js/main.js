import Line from './line.js';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');
    const line = new Line({limit: 0, posX: 550, posY: -50, ctx: ctx});

    function animation() {
        line.update();
        line.draw();

        window.requestAnimationFrame(animation);
    }

    

    

    window.requestAnimationFrame(animation);
});