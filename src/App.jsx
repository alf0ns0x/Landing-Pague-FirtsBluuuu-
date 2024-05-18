import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
   <>
   <Navbar />
   <div className="max-w-7xl mx-auto pt-1 px-6">
   <HeroSection />
   <FeatureSection/>
   </div>
   </>
  );
};

export default App