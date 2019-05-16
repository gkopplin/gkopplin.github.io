class Line {
    constructor ({limit, posX, posY, ctx}) {
        this.limit = limit;
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
    }

    update() {
        this.posX -= 5;
        this.posY += 5;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(this.posX - 40, this.posY + 40);
        this.ctx.lineTo(this.posX, this.posY + 40);
        this.ctx.lineTo(this.posX + 40, this.posY);
        this.ctx.lineTo(this.posX, this.posY);

        this.ctx.stroke();
        this.ctx.strokeStyle = "#000000";
        this.ctx.fillStyle = "#000000";

        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Line;