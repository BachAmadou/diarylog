import React from 'react';
import './style.css';
import RightSideBar from './components/RightSideBar';
import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';
import Home from './components/Home';
import Courses from './components/Courses';
import Grades from './components/Grades';
import Schedule from './components/Schedule';
import Community from './components/Community';
import Tourism from './components/Tourism';
import Cocktail from './components/Cocktail';
import Game from './components/Game';
import Gallery from './components/Gallery';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {

  return (
    <>
    <div className="app-wrapper"> 
        {/* <Test /> */}
        <Navbar /> 
        <Routes> 
            {/* <Route path='/home' element={<Home />} /> */}
            <Route path='/courses' element={<Courses />} />
            <Route path='/grades' element={<Grades />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/community' element={<Community />} /> 
            <Route path='/tourism' element={<Tourism />} />  
            <Route path='/cocktail' element={<Cocktail />} /> 
            <Route path='/game' element={<Game />} /> 
            <Route path='/gallery' element={<Gallery />} /> 
            {/* <Route path='/tourism' element={<Tourism />} />  */}
            <Route path='/' element={<Home />} />        
        </Routes>
         <RightSideBar />
    </div>
    </>
  );
}

export default App;
