
import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Stocks from './pages/Stocks';
import Price from './pages/Price';
import Nav from './components/Nav';
import About from './pages/About'


function App() {
  return (
    <div className="App">
      <Nav />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/stocks" element={<Stocks/>}/>
      <Route path="/price/:symbol" element={<Price/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
  );
}

export default App;
