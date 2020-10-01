import React from 'react';
import './App.css';
import img from "./img/logo_mwenbwa.png";

export default function App() {
  return (
    <header className="App-header">
    <img src={img} alt="logo" className="logo"></img>
    <i className="far fa-user-circle icon"></i>
    <i className="fas fa-power-off icon"></i>
    </header>
      );
    
}
