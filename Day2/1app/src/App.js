import './assets/css/css.css'; 
import sav from './components/Nav.js';
function App() {
  return (
      <>
       <section class="header">
        <nav>
            
            <a href="exp1.html"><img src="image\download-removebg-preview.png"></img></a>
            <div class="nav-links">
                <ul>
                    <li><a href="exp1.html">REGISTRATION</a></li>
                    <li><a href="exp11.html">LOGIN</a></li>
                </ul>
            </div>
        </nav>
    </section>
      <sav/>
      <h1>LOG IN</h1>
      <div className="container"> 
        <form className="container">
          <input type="text" id="un" placeholder="name" required className="inp-class" />
          <input type="password" id="pwd" placeholder="password" className="inp-class" />
          <input type="submit" value="LOGIN" className="inp-sub"  /> 
        </form>
      </div>
    </>
  );
}

export default App;