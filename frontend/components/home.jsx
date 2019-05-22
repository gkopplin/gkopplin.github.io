import React from 'react';
import Header from './header/header';

export default props => {
    return (
        <>

        <Header/>

        <div className="title-page">
            <h1 className="title">Grant <br/>Kopplin</h1>
            <h2>Full Stack Software Engineer<br/> with experience in React, Redux, and Rails <br/> Based in New York City</h2>
        </div>

        <h1>Featured Projects</h1>

        <div className="projects">

            <div className="project-container">
                <section>
                    <div className="project-image">
                        <a href="https://grumblr-app.herokuapp.com" >
                            <img src="images/grumblr.png" alt="" />
                        </a>
                    </div>
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
            <div className="project-container">
                <section>
                    <div className="project-image">
                        <a href="https://gkopplin.github.io/maze-escape/" >
                            <img src="images/maze-escape.png" alt="" />
                        </a>
                    </div>
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
                <h1>Technical Skills</h1>
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