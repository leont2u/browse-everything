import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Benefits from "./pages/Benefits";
import ConnectWithUs from "./pages/ConnectWithUs";
import HeroSection from "./pages/HeroSection";
import TrustedCompanies from "./pages/TrustedCompanies";

function App() {
  return (
    <div className="mx-20 h-min-screen ">
      <NavBar />
      <HeroSection />
      <TrustedCompanies />
      <Benefits />
      <ConnectWithUs />
      <Footer />
    </div>
  );
}

export default App;
