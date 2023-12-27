import './assets/fontawesome-free-6.5.1-web/css/all.min.css';
import './App.css';
import Home from './Hero/Hero';
import NavBar from './NavBar/Navbar';
import About from './ABOUT/About';
import Price_Card from './Pricing/Pricing';
import Customers from './owl-carousel/owl-carousel';
import Trademarks from './Trademarks/Trademarks';
import QUESTIONS_Accordion from './QUESTIONS_Accordion/Accordion';
import Footer_Web from './Footer/Footer';
export default function App() {
  return (
    <div>
      {/* Home */}
      <Home />

      {/* NavBar */}
      <NavBar />

      {/* About */}
      <About />

      {/* Price_Card */}
      <Price_Card />

      {/* Customers */}
      <Customers />

      {/* Trademarks */}
      <Trademarks />

      {/* QUESTIONS_Accordion  */}
      <QUESTIONS_Accordion />

      {/* Footer */}
      <Footer_Web />
    </div>
  )


}
