import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App/App';
import Luca from './Luca/Luca';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <>
            <Route path="/" exact component={App} />
            <Route path="/luca/" component={Luca} />
        </>
    </Router>,
    document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
