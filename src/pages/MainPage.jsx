import About from "../components/MainPage/About";
import Contact from "../components/MainPage/Contact";
import Home from "../components/MainPage/Home";
import NavBar from "../components/MainPage/NavBar";
import Product from "../components/MainPage/Product";
import Footer from "../components/MainPage/Footer";

function MainPage() {
  return (<div> 
    <NavBar />
    <Home />
    <About />
    <Product />
    <Contact />
    <Footer />
  </div>)
}

export default MainPage;
