import Nav from "./components/Nav";
import Footer from "./components/footer";
import  "./assets/css/nav.css";
import "./assets/css/footer.css";
import "./assets/css/app.css";
import Img from "./assets/image/711de6_0c8bcc16dbd34335b05fe3f912da592e~mv2.gif";
function app(){
return(
  <div>
      <Nav/>
      <marquee direction="right" classNmae="marquee-container">
      <img src={Img} classNmae="srl" alt="img"></img>
        </marquee>
      <Footer/>
    <body>
    </body>
      </div>
      )
}
export default app;