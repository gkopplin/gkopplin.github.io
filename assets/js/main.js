import Line from './line.js';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');
    const lines = [new Line({ limit: 100, posX: 580, posY: -250, ctx: ctx }),
                   new Line({ limit: 50, posX: 660, posY: -200, ctx: ctx }),
                   new Line({limit: 220, posX: 740, posY: -150, ctx: ctx}),
                   new Line({ limit: 140, posX: 970, posY: -250, ctx: ctx }),
                   new Line({ limit: 110, posX: 1000, posY: -150, ctx: ctx })];

    function animation() {
        lines.forEach(line => {
            line.update();
            line.draw();
        });

        window.requestAnimationFrame(animation);
    }

    

    

    window.requestAnimationFrame(animation);
});