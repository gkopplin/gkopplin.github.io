import Line from './line';
import Tab from './tab';

class Header {
    constructor(ctx) {
        this.colors = ["#7d7d7d", "#808080", "#838382", "#868686", "#858685"];
        this.links = ["/", "/about-me", "/portfolio", "/resume", "/contact"];
        this.ctx = ctx;
        this.line = new Line({ posX: 100, ctx: this.ctx });
        this.tabs = [new Tab({ limit: 220, posX: 540, posY: -250, ctx: this.ctx, color: this.colors[0] }),
            new Tab({ limit: 170, posX: 630, posY: -200, ctx: this.ctx, color: this.colors[1] }),
            new Tab({ limit: 340, posX: 720, posY: -150, ctx: this.ctx, color: this.colors[2] }),
            new Tab({ limit: 260, posX: 960, posY: -250, ctx: this.ctx, color: this.colors[3] }),
            new Tab({ limit: 230, posX: 1000, posY: -150, ctx: this.ctx, color: this.colors[4] })];
        this.animating = false;
        this.initialDraw = this.initialDraw.bind(this);
        this.mouseOnDraw = this.mouseOnDraw.bind(this);
        this.checkMousePos = this.checkMousePos.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    initialDraw() {
        this.animating = true;
        this.tabs.forEach(tab => {
            tab.update();
            if (!tab.done) tab.draw();
        });

        if (this.tabs.every(tab => tab.done)) {
            this.line.update();
            this.line.draw();
        }
        if (!this.line.done) {
            window.requestAnimationFrame(this.initialDraw);
        } else {
            this.animating= false;
        }
    }

    checkMousePos(e) {
        if (this.animating) return;
        this.mouseX= e.offsetX;
        this.mouseY= e.clientY;

        const imgData = this.ctx.getImageData(this.mouseX, this.mouseY, 1, 1).data;
        let hex = "#" + (this.rgbToHex(imgData[0], imgData[1], imgData[2]));

        this.tabs.forEach((tab, idx) => {
            if (tab.color === hex &&
                this.mouseColor !== hex &&
                this.mouseColor !== "#f4f4f4") {
                let newTabs = this.tabs;
                newTabs[idx].limit += 50;
                newTabs[idx].posY -= 10;
                newTabs[idx].posX += 10;
                if (newTabs[idx].posX % 10 === 9) newTabs[idx].posX += 1;
                this.tabs = newTabs;
                tab.done = false;
                this.mouseOnDraw(tab);
            }
            if (tab.color === this.mouseColor &&
                hex !== tab.color &&
                hex !== "#f4f4f4") {
                let newTabs = this.tabs;
                newTabs[idx].limit -= 50;
                newTabs[idx].posY += 10;
                newTabs[idx].posX -= 11;
                this.tabs = newTabs;
                tab.done = false;
                this.mouseOffDraw(tab);
            }
        });
        this.mouseColor = hex;
    }

    rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }

    mouseOnDraw(tab) {
        document.body.style.cursor = 'pointer';
        this.animating = true;
        tab.update();
        tab.draw();

        if (!tab.done) {
            window.requestAnimationFrame(() => this.mouseOnDraw(tab));
        } else {
            this.animating = false;
        }
    }

    mouseOffDraw(tab) {
        document.body.style.cursor = 'auto';
        this.animating = true;
        tab.reverseUpdate();
        tab.reverseDraw();

        if (!tab.done) {
            window.requestAnimationFrame(() => this.mouseOffDraw(tab));
        } else {
            this.animating = false;
        }
    }

    redirect() {
        this.tabs.forEach((tab, idx) => {
            if (tab.color === this.mouseColor) {
                this.props.history.push(this.links[idx]);
            }
        });
    }

}

document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let header = new Header(ctx);
    canvas.addEventListener('click', header.redirect);
    window.requestAnimationFrame(header.initialDraw);
    canvas.onmousemove = header.checkMousePos;
});




