import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header/header';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Header}/>
        </Switch>
    );
}

export default App;