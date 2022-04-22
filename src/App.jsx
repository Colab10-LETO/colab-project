import './App.css';
import React, {Component} from 'react'
import { BrowserRouter as Router,
  Routes,
  Route,
  NavLink, } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';

export default class App extends Component {
  render() {
   return (
      <>
      <Router>
        <header>
          <NavLink to ='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </header>
        <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About} />
        </Routes>
      </Router>
      
      </>
    )
    
    
  } 
  
}
