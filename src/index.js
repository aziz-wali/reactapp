import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import "../node_modules/font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './Components/UI/Nav/Navbar';
import reportWebVitals from './reportWebVitals';
import TopBar from './Components/UI/TopBar/TopBar';
import Home from './Components/sections/home/Home';
import About from './Components/sections/about/About';
import Service from './Components/sections/service/Service';
import Blog from './Components/sections/blog/Blog';
import Footer from './Components/UI/Footer/Footer';
import Contact from'./Components/sections/contact/Contact';
import Facts from'./Components/sections/facts/facts';


ReactDOM.render(
  
  <React.StrictMode>
    <script src="https://use.fontawesome.com/679dbfbd60.js"></script>
    
    <TopBar />
    <Navbar />
    <Home />
    <About />
    <Service />
    <Blog />
    <Facts />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
