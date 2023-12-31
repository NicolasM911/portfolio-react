import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/navBar';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from './components/Projects';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import React, { useEffect } from 'react';


function App() {
  useEffect(() => {
    document.title = "Nicolas Porfolio"; // Cambia este valor al nombre que quieras
  }, []);
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Skills />

    </div>
  );
}

export default App;
