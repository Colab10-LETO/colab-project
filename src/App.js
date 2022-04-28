import './App.css';
import React, {Component} from 'react'
import Yelp from './components/Yelp.js'
import { Route, Routes } from "react-router-dom";
import Map from './components/map/Map';



export default class App extends Component {
  render() {
   return (
    <>
    <Yelp />

    {/* <Routes>
      <Route path='/map' element={<Map />} />
    </Routes> */}
      </>
    )
    
  } 
  
}
