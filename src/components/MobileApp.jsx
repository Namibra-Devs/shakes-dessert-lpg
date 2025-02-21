import appstore from "../assets/home/appstore.png"
import playstore from "../assets/home/playstore.png"
import mobileI from "../assets/home/mobileI.png"
import mobileII from "../assets/home/mobileII.png"

const MobileApp = () => {
  return (
    <section className="px-6 md:px-0 pb-20 bg-transparent flex flex-col md:flex-row items-center justify-center gap-20">
      <div className="w-full md:max-w-[50%] mt-6 flex justify-center gap-4">
        <div className="relative w-full flex justify-center">
            <img src={mobileI} alt="App Store" className="w-4/6 md:w-auto" />
            <img src={mobileII} alt="Google Play" className="absolute -bottom-1 md:-bottom-4" />
        </div>
      </div>
      <div className="text-center md:text-left w-full md:max-w-[50%] flex flex-col gap-10">
        <h2 className="text-2xl md:text-4xl font-bold">Download Our App</h2>
        <p className="text-white font-medium text-[14px]">
          Discover the easiest way to satisfy your dessert cravings! Download
          our app and unlock a world of delicious recipes, exclusive content,
          and personalized dessert recommendations.
        </p>
        <div className="w-full mt-6 flex flex-col lg:flex-row items-center justify-start gap-4">
          <img src={appstore} alt="App Store" className="w-full lg:w-fit"/>
          <img src={playstore} alt="Google Play" className="w-full lg:w-fit" />
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
