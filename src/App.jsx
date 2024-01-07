import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Product from "./components/Product";

function App() {
  return (<div> 
    <NavBar />
    <Home />
    <About />
    {/* <Product /> */}
    <Contact />
  </div>)
}

export default App;
