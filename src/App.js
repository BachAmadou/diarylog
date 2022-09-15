import './style.css';
import LeftSideBar from './components/LeftSideBar';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';


function App() {
  return (
    <div className="App">
        <Navbar />
        <MainContent />
        <LeftSideBar />
    </div>
  );
}

export default App;
