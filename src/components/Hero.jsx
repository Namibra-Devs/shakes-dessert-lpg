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
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-14 md:gap-[51px]">
          <div className="px-6 md:px-0 flex flex-col items-center md:items-start gap-2 md:gap-10 w-full">
            
            <div className="text-center md:text-left flex flex-col gap-10">
              <h1 className="text-3xl md:text-[52px] font-semibold text-gray-80 tracking-tight">
                Welcome to
              </h1>
              <h1 className="text-3xl md:text-[52px] font-semibold text-gray-80 tracking-tight">
                Shakes and Dessert
              </h1>
            </div>
          
            {/* Category Selection */}
            <div className="mt-3 md:mt-6 flex justify-between gap-2 md:gap-[40px] w-full md:w-fit">
              <button className="w-14 md:w-[79px] h-14 md:h-[80px] p-[20px] flex items-center justify-center bg-white/30 rounded-3xl"><img src={burgger} alt="Hamburger" /></button>
              <button className="w-14 md:w-[79px] h-14 md:h-[80px] p-[20px] flex items-center justify-center bg-white/30 rounded-3xl"><img src={softdrink} alt="Soft Drink" /></button>
              <button className="w-14 md:w-[79px] h-14 md:h-[80px] p-[20px] flex items-center justify-center bg-white/30 rounded-3xl"><img src={icecream} alt="Ice Cream" /></button>
              <button className="w-14 md:w-[79px] h-14 md:h-[80px] p-[20px] flex items-center justify-center bg-white/30 rounded-3xl"><img src={cocktail} alt="Cocktail" /></button>
            </div>

            <button className="inline-flex items-center justify-center gap-6 w-full md:w-fit mt-7 md:mt-8 bg-[#2D2D2D] py-[19px] px-[40px] rounded-bl-3xl group hover:bg-red-600 duration-700 rounded-tr-3xl text-white font-medium">
              View our categories
              <BsArrowRight size={15} className="text-white group-hover:translate-x-2 duration-700" />
            </button>
          </div>

          {/* Floating Pizza */}
          <div className="w-full flex justify-center md:-mt-28">
            <img src={pizza} alt="Pizza" className="w-4/5 md:w-[768px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
