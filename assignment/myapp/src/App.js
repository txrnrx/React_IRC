
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
        <Route path="/About" element ={<About/>}/>
        <Route path="/" element ={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
