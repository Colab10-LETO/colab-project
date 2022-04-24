import './App.css';
import React, {Component} from 'react'
import Yelp from './components/Yelp/Yelp.js'
import Map from './components/Map/Map';


export default class App extends Component {
  render() {
   return (
      <>
      <Yelp />
      <Map />
      </>
    )
    
  } 
  
}
