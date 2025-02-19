const Footer = () => {
    return (
      <footer className="text-white text-center mt-4 z-30">
        <div className="flex flex-col items-center justify-center">     
          {/* Copyright */}
          <p className="text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Shakes and Dessert. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;