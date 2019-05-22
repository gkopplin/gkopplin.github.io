import React from 'react';
import Header from './header/header';
import Content from './content/content';
import Footer from './footer';

export default props => {
    return (
        <>
        <Header history={props.history}/>
        <Content history = {props.history} />
        <Footer/>
        </>
    );
};