import './style.css';
import LeftSideBar from './components/LeftSideBar';
import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';
import Home from './components/Home';
import Courses from './components/Courses';
import Grades from './components/Grades';
import Schedule from './components/Schedule';
import Community from './components/Community';
import { Routes, Route } from 'react-router';


function App() {
  return (
  
    <div className="app-wrapper">
        <Navbar />
        {/* <MainContent /> */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/grades' element={<Grades />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/community' element={<Community />} />
        </Routes>
        {/* <MainContent /> */}
        <LeftSideBar />
    </div>
    
  );
}

export default App;
