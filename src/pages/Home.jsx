import Hero from "../components/Hero";
import Categories from "../components/categories/Categories";
import MobileApp from "../components/MobileApp";
import floatFood from "../assets/home/classic-cooling.png"
import floatFoodI from "../assets/home/salad.png"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="relative bg-primarybg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center p-4 md:p-16">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>

      <div className="relative bg-white/15 backdrop-blur-lg w-full p-2 md:p-16 overflow-hidden border-white/10 rounded-3xl">
        <Hero />
        <Categories />
        <MobileApp />
      </div>
      <img src={floatFood} alt="Classic Cooling" className="w-20 md:w-36 absolute bottom-1 md:bottom-2 left-3" />
      <img src={floatFoodI} alt="Classic Cooling" className="w-24 md:w-24 absolute top-[82vh] md:top-[110vh] -right-5 md:right-0" />
      <Footer/>
    </section>
  );
};

export default Home;
