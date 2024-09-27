
import './App.css'
import Footer from "./components/footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Faq from "./components/faq/Faq.tsx";
import { Testimonial } from './components/testimonials/Testimonial.tsx';
import VideoSection from "./components/videoSection/VideoSection.tsx";

function App() {

  return (
    <>
    <Navbar />
    <VideoSection />
    <Testimonial />
    <Faq />
    <Footer />
    </>
  )
}

export default App
