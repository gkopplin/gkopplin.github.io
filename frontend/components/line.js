class Line {
    constructor ({ posX, ctx}) {
        this.posX = posX;
        this.ctx = ctx;
    }

    update() {
        if (this.posX + 25 < 1000) {
            this.posX += 25;
        } else {
            this.done = true;
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX, 100);
        this.ctx.lineTo(this.posX + 25, 100);
        this.ctx.lineTo(this.posX + 25, 101);
        this.ctx.lineTo(this.posX, 101);
        this.ctx.lineTo(this.posX, 100);

        this.ctx.globalCompositeOperation = "source-over";
        this.ctx.fillStyle = "#f4f4f4";
        this.ctx.fill();

        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.moveTo(this.posX, 135);
        this.ctx.lineTo(this.posX + 25, 135);
        this.ctx.lineTo(this.posX + 25, 136);
        this.ctx.lineTo(this.posX, 136);
        this.ctx.lineTo(this.posX, 135);

        this.ctx.globalCompositeOperation = "source-over";
        this.ctx.fillStyle = "#f4f4f4";
        this.ctx.fill();

        this.ctx.closePath();

    }
}

export default Line;