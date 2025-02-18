import logo from "../assets/home/logo.png"
const Header = () => {
  return (
    <div className="flex items-center justify-between">
        <a href="/"><img src={logo} alt="Shakes and Dessert" className="w-20" /></a>
    </div>
  )
}

export default Header