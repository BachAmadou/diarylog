import './style.css';
import LeftSideBar from './components/LeftSideBar';
import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';
import Home from './components/Home';
import Courses from './components/Courses';
import Grades from './components/Grades';
import Schedule from './components/Schedule';
import Community from './components/Community';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Test from './components/Test';

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
            <Route path='/' element={<Home />} />        
        </Routes>
         <LeftSideBar />
    </div>
    </>
  );
}

export default App;
