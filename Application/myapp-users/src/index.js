import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import {usersData} from './data/usersData';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
