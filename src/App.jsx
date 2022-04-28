import './App.css';
import React, {Component} from 'react'
import Yelp from './components/Yelp/Yelp.js'
import Map from './Map';
import Header from './components/Header';


export default class App extends Component {
  render() {
   return (
      <>
      <Header />
      <Yelp />
      <Map />
      </>
    )
    
  } 
  
}
