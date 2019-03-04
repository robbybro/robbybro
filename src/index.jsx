import 'normalize.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App/App';
import Luca from './Luca/Luca';

import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <>
            <Route path="/" exact component={App} />
            <Route path="/luca/" component={Luca} />
        </>
    </Router>,
    document.getElementById('root'),
);
registerServiceWorker();
