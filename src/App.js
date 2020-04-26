import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/header/Header.js'
import PugList from './pages/PugList.js'
import PugChosen from './pages/PugChosen.js'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
            <PugList  />
        </Route >
        <Route exact path='/pug-chosen'>
            <PugChosen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
