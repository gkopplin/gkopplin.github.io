import React from 'react';
import Home from './home';
import AboutMe from './about_me';
import Portfolio from './portfolio';
import Resume from './resume';

export default props => {
    if (props.history.location.pathname === '/') {
        return (
            <Home/>
        );
    } else if (props.history.location.pathname === "/about-me") {
        return (
            <AboutMe />
        );
    } else if (props.history.location.pathname === "/portfolio") {
        return (
            <Portfolio />
        );
    } else if (props.history.location.pathname === "/resume") {
        return (
            <Resume />
        );
    }
};