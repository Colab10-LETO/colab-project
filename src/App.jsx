import './App.css';
import React, {Component} from 'react'
import { BrowserRouter as Router,
  Switch,
  Route, } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';

export default class App extends Component {
  render() {
   return (
      <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
      
      </>
    )
    
    
  } 
  
}
