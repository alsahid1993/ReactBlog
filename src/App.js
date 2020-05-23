import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactUs from './containers/ContactUS';
import Post from './containers/Post';
import Visited from './containers/Visited';


function App() {
  return (
    <Router>


      <div className="App">
        <Header />
        <Hero />
        
        <Route path="/" exact component={Home} />
        <Route path = "/contact-us" component={ContactUs}/>
        <Route path = "/post/:postId" component= {Post} />
        <Route path = "/visited" component ={Visited}/>
      </div>
    </Router>
  );
}

export default App;
