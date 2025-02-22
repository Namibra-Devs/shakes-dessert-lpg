import logo from "../assets/home/logo.png";
const Header = () => {
  return (
    <div className="flex items-center justify-between mb-10 md:-ml-4 px-4 py-2">
      <a href="/">
        <img src={logo} alt="Shakes and Dessert" className="w-10 md:w-14" />
      </a>
    </div>
  );
};

export default Header;