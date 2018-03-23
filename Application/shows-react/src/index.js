import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom'

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
