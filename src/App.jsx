import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import "./index.css";
import Title from "./Components/Title/Title";
import Program from "./Components/Program/Program";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Title subTitle='Our Program' title='What We Offer'/>
          <Program />
          <About/>
          <Title subTitle='Gallery' title='Photo We Get'/>
          <Campus/>
          <Title subTitle='TESTIMONIALS' title='What Student Says' />
          <Testimonial />
          <Title subTitle='Contact Us' title='Get In Touch' />
          <Contact />
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
