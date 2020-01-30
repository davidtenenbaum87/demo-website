import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.render(<HashRouter ><Route component={App}></Route></HashRouter>, document.getElementById('root'));