import "./App.css";
import React, { Component } from "react";
import Yelp from "./components/Yelp";
import Map from "./Map";
import Header from "./components/Header";


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Yelp />
        <Map />
      </div>
    );
  }
}
