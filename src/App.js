import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from  "./components/Categories";
import Campaingns from  "./components/Campaigns";
import Favorites from  "./components/Favorites";
import MobileApp from  "./components/MobileApp";
import Cards from  "./components/Cards";
import Footer from  "./components/Footer";

function App() {
  return (
    <>
       <Header />
       <HeroSection />
       <Categories />
       <Campaingns />
       <div className="container mx-auto">
          <Favorites />
          <MobileApp />
          <Cards />
       </div>
       <Footer />

    </>
  );
}

export default App;
