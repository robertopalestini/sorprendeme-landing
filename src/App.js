import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import Solutions from "./components/solutions";
import About from "./components/about";
import Form from "./components/form";
import Step from "./components/steps";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Step/>
      <Services/>
      <Solutions/>
      <About/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
