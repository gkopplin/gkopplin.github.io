import React from 'react';
import Line from './line';
import Tab from './tab';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.initialDraw = this.initialDraw.bind(this);
        this.mouseOnDraw = this.mouseOnDraw.bind(this);
        this.checkMousePos = this.checkMousePos.bind(this);
        this.colors = ["#7d7d7d", "#808080", "#838382", "#868686", "#858685"];
        this.state = {mouseX: 0, 
                      mouseY: 0,
                      mouseColor: "#f5f5f5",
                      tabs: [],
                      animating: false};
    }

    checkMousePos(e) {
        if (this.state.animating) return;
        this.setState({ mouseX: e.clientX, mouseY: e.clientY });

        const imgData = this.ctx.getImageData(this.state.mouseX, this.state.mouseY, 1, 1).data;
        let hex = "#" + (this.rgbToHex(imgData[0], imgData[1], imgData[2]));

        this.state.tabs.forEach((tab, idx) => {
            if(tab.color === hex && 
               this.state.mouseColor !== hex &&
               this.state.mouseColor !== "#f4f4f4") {
                let newTabs = this.state.tabs;
                newTabs[idx].limit += 50;
                newTabs[idx].posY -= 10;
                newTabs[idx].posX += 10;
                if(newTabs[idx].posX % 10 === 9) newTabs[idx].posX += 1;
                this.setState({tabs: newTabs});
                tab.done = false;
                this.mouseOnDraw(tab);
            }
            if(tab.color === this.state.mouseColor &&
                hex !== tab.color &&
                hex !== "#f4f4f4") {
                let newTabs = this.state.tabs;
                newTabs[idx].limit -= 50;
                newTabs[idx].posY += 10;
                newTabs[idx].posX -= 11;
                this.setState({tabs: newTabs});
                tab.done = false;
                this.mouseOffDraw(tab);
            }
        });
        this.setState({mouseColor: hex});
    }

    rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }


    componentDidMount(){
        const canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.line = new Line({ posX: 100, ctx: this.ctx });
        this.setState({tabs: [new Tab({ limit: 220, posX: 540, posY: -250, ctx: this.ctx, color: this.colors[0]}),
            new Tab({ limit: 170, posX: 630, posY: -200, ctx: this.ctx, color: this.colors[1] }),
            new Tab({ limit: 340, posX: 720, posY: -150, ctx: this.ctx, color: this.colors[2] }),
            new Tab({ limit: 260, posX: 960, posY: -250, ctx: this.ctx, color: this.colors[3] }),
            new Tab({ limit: 230, posX: 1000, posY: -150, ctx: this.ctx, color: this.colors[4] })]});

        window.requestAnimationFrame(this.initialDraw);
        canvas.onmousemove = this.checkMousePos;
    }

    initialDraw() {
        this.setState({animating: true});
        this.state.tabs.forEach(tab => {
            tab.update();
            if(!tab.done) tab.draw();
        });

        if (this.state.tabs.every(tab => tab.done)) {
            this.line.update();
            this.line.draw();
        }
        if (!this.line.done) {
            window.requestAnimationFrame(this.initialDraw);
        } else {
            this.setState({animating: false});
        }
    }

    mouseOnDraw(tab) {
        this.setState({ animating: true });
        tab.update();
        tab.draw();

        if (!tab.done) {
            window.requestAnimationFrame(() => this.mouseOnDraw(tab));
        } else {
            this.setState({ animating: false });
        }
    }

    mouseOffDraw(tab) {
        this.setState({ animating: true });
        tab.reverseUpdate();
        tab.reverseDraw();

        if (!tab.done) {
            window.requestAnimationFrame(() => this.mouseOffDraw(tab));
        } else {
            this.setState({ animating: false });
        }
    }

    render() {
        return (
            <>
            <canvas width="900" height="400" id="canvas"></canvas>
            <header>
                <h1><a href="index.html" id="logo">Grant Kopplin</a></h1>

                <nav id="nav">
                    <a href="index.html" id="home">Home</a>
                    <a href="about_me.html" id="about-me">About Me</a>
                    <a href="portfolio.html" id="portfolio">Portfolio</a>
                    <a href="resume.html" id="resume">Resume</a>
                    <a href="contact.html" id="contact">Contact</a>
                </nav>
            </header>
            </>
        );
    }
};


export default Header;