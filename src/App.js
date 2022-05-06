import "./App.css";
import React, { Component } from "react";
import Yelp from "./components/Yelp";
import Map from "./Map";
import About from "./components/About";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Routes>  
          <Route path="/">Welcome</Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/yelp" element={<Yelp/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>

        </Routes>

      </div>
    );
  }
}
