class Tab {
    constructor ({limit, posX, posY, ctx, color}) {
        this.limit = limit;
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.color = color;
    }

    update() {
        if (this.posY + 8 < this.limit) {
            this.posX -= 8;
        } else {
            this.done = true;
        }
        if (this.posY + 8 < this.limit) {
            this.posY += 8;
        } else {
            this.done = true;
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(this.posX - 130, this.posY + 130);
        this.ctx.lineTo(this.posX, this.posY + 130);
        this.ctx.lineTo(this.posX + 130, this.posY);
        this.ctx.lineTo(this.posX, this.posY);

        this.ctx.globalCompositeOperation = "destination-over";
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle = this.color;

        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Tab;