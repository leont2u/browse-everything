import NavBar from "./components/NavBar";
import HeroSection from "./pages/HeroSection";
import TrustedCompanies from "./pages/TrustedCompanies";

function App() {
  return (
    <div className="mx-20 h-min-screen">
      <NavBar />
      <HeroSection />
      <TrustedCompanies />
    </div>
  );
}

export default App;
