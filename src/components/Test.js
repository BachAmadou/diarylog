import Navbar from "./Navbar";
import MainContent from "./MainContent";
import LeftSideBar from "./LeftSideBar";
// import MainContent from './components/MainContent';
import Home from './Home';
import Courses from './Courses';
import Grades from './Grades';
import Schedule from './Schedule';
import Community from './Community';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


export default function Test() {
    return(
        <div className="main-content">
            <Navbar />
            {/* <MainContent /> */}
            <Routes> 
                <Route path='/home' element={<Home />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/grades' element={<Grades />} />
                <Route path='/schedule' element={<Schedule />} />
                <Route path='/community' element={<Community />} />  
                <Route path='/' element={<Home />} />        
        </Routes>
            <LeftSideBar />
        </div>
    )
}