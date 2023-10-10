import './App.css';
import Boards from './components/Boards';
import Navbar from './components/Navbar';
import Scroll from './components/Scroll';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Scroll/>
     <Boards />
    </div>
  );
}

export default App;
