import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/main';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/about-me" component={Main}/>
        </Switch>
    );
}

export default App;