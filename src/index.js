import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {ContextPugListProvider} from './context/ContextPugList'
import {ContextPugChosenProvider} from './context/ContextPugChosen'
import './index.css';

ReactDOM.render(
  <ContextPugChosenProvider>
    <ContextPugListProvider>
      <Router>
          <App />
      </Router>
    </ContextPugListProvider>
  </ContextPugChosenProvider>, 
  document.getElementById("root")
)
