import React from 'react';
import Skills from './skills';

export default props => {
    return (
        <>

        <div className="title-page">
            <h2 className="title">Grant <br/>Kopplin</h2>
            <h2>Full Stack Software Engineer<br/> with experience in React, Redux, and Rails <br/> Based in New York City</h2>
        </div>

        <h1>Featured Projects</h1>

        <div className="centered-content">

            <div className="project-container">
                <section>
                    <div className="project-image">
                        <a href="https://grumblr-app.herokuapp.com" >
                            <img src="images/grumblr.png" alt="" />
                        </a>
                    </div>
                    <h2>Grumblr</h2>
                    <div className="home-links">
                        <a href="https://grumblr-app.herokuapp.com">Live</a> | <a
                            href="https://github.com/gkopplin/grumblr">Github</a>
                    </div>
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
                        <div className="home-links">
                        <a href="https://gkopplin.github.io/maze-escape/">Live</a> | <a
                            href="https://github.com/gkopplin/maze-escape">Github</a>
                    </div>
                    <p>
                        A retro, turn-based JavaScript game where users must escape mazes without being caught by AI enemies.
                        Built
                        using HTML5 Canvas.
                        </p>
                </section>

            </div>
        </div>

        <Skills />
        </>
    );
};