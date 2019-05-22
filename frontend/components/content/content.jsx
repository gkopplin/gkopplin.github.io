import React from 'react';
import Home from './home';
import AboutMe from './about_me';

export default props => {
    if (props.history.location.pathname === '/') {
        return (
            <Home/>
        );
    } else if (props.history.location.pathname === "/about-me") {
        return (
            <AboutMe />
        );
    }
};