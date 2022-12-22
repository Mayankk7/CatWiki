import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homescreen from './screens/Homescreen/Homescreen';
import Catscreen from './screens/Catscreen/Catscreen';
import Searchedscreen from './screens/Searchedscreen/Searchedscreen';

function App() {
  return (
    <div className="">
      <Navbar/>
      <div className=''>
        <Homescreen/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
