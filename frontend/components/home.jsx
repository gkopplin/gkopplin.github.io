import React from 'react';
import Header from './header/header';

export default props => {
    return (
        <>

        <Header/>

        <div className="title-page">
            <h1>Grant Kopplin</h1>
            <p>Full Stack Software Engineer with experience in React, Redux, and Rails. Based in New York City</p>
        </div>

        <div className="projects">

            <h1>Featured Projects</h1>

            <div id="grumblr-container">
                <section>
                    <a href="https://grumblr-app.herokuapp.com" className="bordered-feature-image"><img src="images/grumblr.png"
                        alt="" id="grumblr-screenshot" /></a>
                    <h2>Grumblr</h2>
                    <a href="https://grumblr-app.herokuapp.com">Live</a> | <a
                        href="https://github.com/gkopplin/grumblr">Github</a>
                    <p>
                        A full-stack Tumblr clone for grumpy people built using PostgreSQL, Rails, and React/Redux. Supports
                        posts
                        of many media types including text, photo, video, audio, and links.
                        </p>
                </section>

            </div>
            <div id="maze-escape-container">
                <section>
                    <a href="https://gkopplin.github.io/maze-escape/" className="bordered-feature-image" id="maze"><img
                        src="images/maze-escape.png" alt="" /></a>
                    <h2>Maze Escape</h2>
                    <a href="https://gkopplin.github.io/maze-escape/">Live</a> | <a
                        href="https://github.com/gkopplin/maze-escape">Github</a>
                    <p>
                        A retro, turn-based JavaScript game where users must escape mazes without being caught by AI enemies.
                        Built
                        using HTML5 Canvas.
                        </p>
                </section>

            </div>
        </div>

        <section id="skills">
            <section>
                <header>
                    <h1>Technical Skills</h1>
                </header>
                <ul className="skills">
                    <li><img src="./images/skills/javascript.png" alt=""/></li>
                    <li><img src="./images/skills/rails.png" alt=""/></li>
                    <li><img src="./images/skills/ruby.png" alt=""/></li>
                    <li><img src="./images/skills/react.png" alt=""/></li>
                    <li><img src="./images/skills/redux.png" alt=""/></li>
                    <li><img src="./images/skills/sql.jpg" alt=""/></li>
                    <li><img src="./images/skills/git.png" alt=""/></li>
                    <li><img src="./images/skills/aws.png" alt=""/></li>
                    <li><img src="./images/skills/html.png" alt=""/></li>
                    <li><img src="./images/skills/css.png" alt=""/></li>
                </ul>
            </section>
        </section>
        </>
    );
};