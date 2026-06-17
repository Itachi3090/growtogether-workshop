import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import EditGallery from "./components/EditGallery/EditGallery";
import Workshop from "./components/Workshop/Workshop";
import Curriculum from "./components/Curriculum/Curriculum";
import Testimonials from "./components/Testimonials/Testimonials";
import RegisterSeat from "./components/RegisterSeat/RegisterSeat";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <EditGallery />

      <Workshop />

      <Curriculum />

      <Testimonials />

      <RegisterSeat />

      <Footer />
    </>
  );
}

export default App;