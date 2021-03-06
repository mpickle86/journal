import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './components/App';
import {HashRouter as Router} from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
