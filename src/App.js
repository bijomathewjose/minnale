import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <div className="App text-3xl">
      <header className="App-header"><Navbar /></header>
      <div className='body-part'>
        <Home />
        <About />
        <Products />
        <ScrollToTop />
      </div>
    </div>
  );
}
export default App;
