import appstore from "../assets/home/appstore.png"
import playstore from "../assets/home/playstore.png"
import mobileI from "../assets/home/mobileI.png"
import mobileII from "../assets/home/mobileII.png"

const MobileApp = () => {
  return (
    <section className="pb-20 bg-transparent flex flex-col md:flex-row items-center justify-center gap-20">
      <div className="w-full md:max-w-[50%] mt-6 flex justify-center gap-4">
        <div className="relative w-full flex justify-center">
            <img src={mobileI} alt="App Store" className="" />
            <img src={mobileII} alt="Google Play" className="absolute -bottom-4" />
        </div>
      </div>
      <div className="text-left w-full md:max-w-[50%] flex flex-col gap-10">
        <h2 className="text-4xl font-bold">Download Our App</h2>
        <p className="text-white mt-2">
          Discover the easiest way to satisfy your dessert cravings! Download
          our app and unlock a world of delicious recipes, exclusive content,
          and personalized dessert recommendations.
        </p>
        <div className="mt-6 flex items-center justify-start gap-4">
          <img src={appstore} alt="App Store" className="w-full md:w-fit"/>
          <img src={playstore} alt="Google Play" className="w-full md:w-fit" />
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
