import React from 'react';

export default props => {
    return (
        <section>
                <div className="title-page">
                    <h2 className="title">Portfolio</h2>
                    <h2>Full-stack and Front-end Projects</h2>
                </div>
            
                <div className="centered-content">
                    <div className="set-width">
                        <h1>Grumblr</h1>

                        <div className="portfolio-project">
                            <span>
                                <a href="https://grumblr-app.herokuapp.com">Live</a> | <a href="https://github.com/gkopplin/grumblr">Github</a>
                            </span>
                            <div className="set-width portfolio-img">
                                <a href="https://grumblr-app.herokuapp.com" ><img src="images/grumblr.png" alt="" /></a>
                            </div>
                        </div>
                        
                        <p>
                            A full-stack Tumblr clone for grumpy people built using PostgreSQL, Rails, and React/Redux. Cloud storage is implemented to improve the scaling of the application using the AWS S3 API. Supports posts
                            of many media types including text, photo, video, audio, and links.
                        </p>
                        <h2 className="features">Features:</h2>
                        <ul className="features">
                            <li><h3>1. Splash Page</h3>
                                <p>
                                    The welcome page of Grumblr features a sliding carousel of pages, which rotates as the user scrolls or clicks the scroll
                                    icons. DOM event listeners change the classes of HTML elements when the user scrolls or clicks an icon. The updated
                                    classes contain keyframes animations which cause certain elements to slide or fade depending on the current position of
                                    the carousel and the direction of the scroll. <br/>
                                    For instance, if the user were viewing the second splash page and scrolled back up to the first, the direction key in
                                    the splash React component state would be changed to "up2-1" and the props of the individual splash pages would be
                                    updated accordingly. Within each splash page, the root HTML element is set to props.direction. The CSS class for up2-1
                                    contains a keyframes animation with a translateY transformation from -100% to 0%.
                                </p>
                            </li>
                            <li><h3>2. Search</h3>
                                <p>
                                    In the header of each page (except the splash page), there is a search bar which users can use to find users. When the
                                    user types into the search bar and adds characters to the search form element, a modal component is opened which
                                    contains search results. For each character added to the form, relevant users are fetched from the backend and the
                                    search results are re-rendered. Users can then click users to redirect to their profile page, or press enter to redirect
                                    to the first user listed in the search results.
                                </p>
                            </li>
                            <li><h3>3. Follows</h3>
                                <p>
                                    The follows joins table links followers with the users they follow. In order to limit the current user's dashboard to
                                    posts from users they follow, AJAX requests are sent to the backend and the follows joins table is queried. Similarly,
                                    the association between users and their followers is used to populate the followers and following pages with the correct
                                    users.
                                </p>
                            </li>
                        </ul>
                        
                        <h1>Maze Escape</h1>
                        <div className="portfolio-project">
                            <span>
                                <a href="https://gkopplin.github.io/maze-escape/">Live</a> | <a href="https://github.com/gkopplin/maze-escape">Github</a>
                            </span>
                            <div className="set-width portfolio-img">
                                <a href="https://gkopplin.github.io/maze-escape/"><img src="images/maze-escape.png" alt="" /></a>
                            </div>
                        </div>

                        <p>
                            A retro, turn-based JavaScript game where users must escape mazes without being caught by AI enemies. Built
                            using HTML5 Canvas.
                        </p>
                        <h2 className="features">Features:</h2>
                        <ul className="features">
                            <li><h3>1. Level Progression</h3>
                                <p>
                                    When a user reaches the exit of a level, the Game object will hide the HTML Canvas element and show the root div element
                                    (by modifying the classes of each). The appropriate image is also pushed into the inner HTML of the root element. A DOM
                                    keypress event listener is added to re-show the HTML Canvas element when the user is ready to progress to the next
                                    level. A similar system is set up for when the users loses a level or wins the game.
                                </p>
                            </li>
                            <li><h3>2. Collision Detection</h3>
                                <p>
                                    If/else logic is used to determine whether a given move is valid based on the characters position and surrounding
                                    obstacles. For any given move, collisions are detected using the x position of the character and the y position plus the
                                    height of the character sprite (since characters are able to stand in front of walls, but cannot walk through them).
                                    Since the game is implemented on a 50x50 grid system, characters will always be a given distance from adjacent walls.
                                    Each time a character moves, the array of walls is iterated over to confirm that no wall blocks the characters path. In
                                    addition to the original position of the character, the function for determining valid moves also takes a new position
                                    that the character is attempting to travel to. The values of the new position and the orientation of the wall and used
                                    to determine if the character is attempting to walk through a wall.
                                </p>
                            </li>
                        </ul>

                        <h1>Portfolio Site</h1>
                        <div className="portfolio-project">
                            <span>
                            <a href="https://github.com/gkopplin/gkopplin.github.io">Github</a>
                            </span>
                        </div>

                        <p>
                        I designed and built the site that you are currently visiting using React and Redux. I built the nav bar using HTML5 Canvas. 
                        I chose to use React to implement this site to provide the "single-page" experience that is expected on modern web pages. 
                        This also prevents the initial animation of the canvas element from triggering whenever the user navigates to a new page.
                        </p>
                    </div>
                </div>
        </section>

							
    );
};