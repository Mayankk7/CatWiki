import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homescreen from './screens/Homescreen/Homescreen';

function App() {
  return (
    <div className="App ">
      <Navbar/>
      <div className=''>
        <Homescreen/>
      </div>
    </div>
  );
}

export default App;
