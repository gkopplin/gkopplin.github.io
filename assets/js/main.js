// import Tab from '.../../components/header/line.js
// import Line from './line.js';

// document.addEventListener("DOMContentLoaded", () => {
//     const canvas = document.getElementsByTagName('canvas')[0];
//     const ctx = canvas.getContext('2d');
//     const tabs = [new Tab({ limit: 100, posX: 540, posY: -250, ctx: ctx }),
//                    new Tab({ limit: 50, posX: 630, posY: -200, ctx: ctx }),
//                    new Tab({limit: 220, posX: 720, posY: -150, ctx: ctx}),
//                    new Tab({ limit: 140, posX: 960, posY: -250, ctx: ctx }),
//                    new Tab({ limit: 110, posX: 1000, posY: -150, ctx: ctx })];
//     const line = new Line({posX: 100, ctx});

//     function animation() {
//         tabs.forEach(tab => {
//             tab.update();
//             tab.draw();
//         });
        
//         if (tabs.every(tab => tab.done)){
//             line.update();
//             line.draw();
//         }
//         if(!line.done) {
//             window.requestAnimationFrame(animation);
//         }
//     }


    

    

//     window.requestAnimationFrame(animation);
// });