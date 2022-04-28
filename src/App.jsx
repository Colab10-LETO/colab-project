import './App.css';
import React, {Component} from 'react'
import Yelp from './components/Yelp/Yelp.js'
import Map from './Map';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";


export default class App extends Component {
  render() {
   return (
      <>
      <Header />
      <Yelp />

      <Routes>
      <Route path='/map' element={<Map />} />
      </Routes>
      </>
    )
    
  } 
  
}
