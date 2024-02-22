import React from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import CarBooking from './components/carBooking';
import About from './components/About';
import AvailableCars from './components/Availablecars';
function App() {
  return (
   <BrowserRouter>
   <ul>
   <li><Link to='/home'>Home</Link></li>
   <li><Link to='/availablecars'>AvailableCars</Link></li>
    <li><Link to='/carbooking'>CarBooking</Link></li> 
  
    <li><Link to='/about'>About</Link></li> 
    <li><Link to='/signup'>Signup</Link></li>
    

   </ul>
   <Routes>
   <Route path='home'element={<Home/>}/>
   <Route path='/availablecars'element={<AvailableCars/>}/>
    <Route path='/carbooking'element={<CarBooking/>}/> 

    <Route path='about'element={<About/>}/>
    <Route path='/signup'element={<Signup/>}/>
    

   </Routes>
   </BrowserRouter>
  );
}
export default App;