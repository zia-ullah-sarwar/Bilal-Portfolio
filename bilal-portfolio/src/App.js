import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Header from './components/Header'; 
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Project from './components/Project';
import Testimonials from './components/Testimonial';
import Counter from './components/Counter';
import React from 'react';

function App() {
  return (
<React.Fragment>  
 <Navbar/>
 <Header/>
 <Services/>
 <Project/>
 <Counter/>
 <Testimonials/>
 <Contact/>
 <Footer/>
 
</React.Fragment>
  );
}

export default App;
