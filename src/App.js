import "./App.css";
import React, { Component } from "react";
import Yelp from "./components/Yelp";
import About from "./components/About";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import ThriftGuide from "./components/ThriftGuide";
import DonationGuide from "./components/DonationGuide";
import RecyclingGuide from "./components/RecyclingGuide";
import Donations from "./components/Donations";
import Recycle from "./components/Recycle";


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Routes>
          {/* <Route path="/">Welcome</Route> */}
          <Route path="/" element={<Yelp />}></Route>
          <Route path="/donate" element={<Donations />}></Route>
          <Route path="/recycle" element={<Recycle />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/thrift-guide" element={<ThriftGuide />}></Route>
          <Route path="/donation-guide" element={<DonationGuide />}></Route>
          <Route path="/recycling-guide" element={<RecyclingGuide />}></Route>
        </Routes>

    
      </div>
    );
  }
}
