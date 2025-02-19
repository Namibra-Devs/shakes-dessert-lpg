import pizza from "../assets/home/pizza.png";
import Header from "./Header";
import burgger from "../assets/home/icons/hamburger.png"
import icecream from "../assets/home/icons/ice-cream.png"
import cocktail from "../assets/home/icons/cocktail.png"
import softdrink from "../assets/home/icons/soft-drink.png"
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <section className="bg-transparent relative w-full h-screen flex items-start justify-center">
      <div>
        <Header />
        {/* Content */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-14 md:gap-4">
          <div className="px-6 md:px-0 w-full md:max-w-[50%] flex flex-col items-center md:items-start gap-2 md:gap-4">
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-80 tracking-tight">
                Welcome to
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-80 tracking-tight">
                Shakes and Dessert
              </h1>
            </div>
            <p className="text-gray-600 mt-4">Explore our delicious categories</p>

            {/* Category Selection */}
            <div className="mt-3 md:mt-6 flex justify-between gap-2 md:gap-6 w-full md:w-fit">
              <button className="w-14 md:w-16 h-14 md:h-16 p-4 hover-shake flex items-center justify-center bg-white/30 rounded-2xl"><img src={burgger} alt="Hamburger" /></button>
              <button className="w-14 md:w-16 h-14 md:h-16 p-4 hover-shake flex items-center justify-center bg-white/30 rounded-2xl"><img src={softdrink} alt="Soft Drink" /></button>
              <button className="w-14 md:w-16 h-14 md:h-16 p-4 hover-shake flex items-center justify-center bg-white/30 rounded-2xl"><img src={icecream} alt="Ice Cream" /></button>
              <button className="w-14 md:w-16 h-14 md:h-16 p-4 hover-shake flex items-center justify-center bg-white/30 rounded-2xl"><img src={cocktail} alt="Cocktail" /></button>
            </div>

            <button className="inline-flex items-center gap-6 w-full md:w-fit mt-4 md:mt-8 bg-black py-4 px-8 rounded-bl-3xl group hover:bg-red-600 duration-700 rounded-tr-3xl text-white font-medium">
              View our categories
              <BsArrowRight className="text-white text-2xl group-hover:translate-x-2 duration-700" />
            </button>
          </div>

          {/* Floating Pizza */}
          <div className="w-full md:max-w-[50%] flex justify-center mt-0 md:-mt-28">
            <img src={pizza} alt="Pizza" className="w-4/5 md:w-full hover-shake" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
