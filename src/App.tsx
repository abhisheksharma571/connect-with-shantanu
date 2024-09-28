
import './App.css'
import Footer from "./components/footer/Footer.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Faq from "./components/faq/Faq.tsx";
// import { Testimonial } from './components/testimonials/Testimonial.tsx';
import VideoSection from "./components/videoSection/VideoSection.tsx";
import Callsection from './components/callsection/Callsection.tsx';
import Team from './components/team/Team.tsx';

function App() {

  return (
    <>
    <Navbar />
    <Callsection />
    <VideoSection />
    <Team/>
    {/* <Testimonial /> */}
    <Faq />
    <Footer />
    </>
  )
}

export default App
