import logoSvg from "../assets/img/logo.svg";
import hamburger from "../assets/img/icon-hamburger.svg";
function Navbar() {
  return (
    <nav className=" relative container mx-auto  p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logoSvg} alt="" height={100} />
        </div>
        <div className=" hidden md:flex gap-6 ">
          <a href="#hero" className="hover:text-darkGrayishBlue">
            Home
          </a>
          <a href="#feature" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#reviews" className="hover:text-darkGrayishBlue">
            Reviews
          </a>
          <a href="#git" className="hover:text-darkGrayishBlue">
            Get In Touch
          </a>
          <a href="#sl" className="hover:text-darkGrayishBlue">
            Social Links
          </a>
        </div>

        {/* Button */}
        <a
          href=""
          className="hidden md:block p-3 px-3 pt-2 text-white bg-brighRed rounded-full baseline hover:bg-brighRedLight"
        >
          Get Started
        </a>

        <div className="md:hidden block">
          <img src={hamburger} alt="" />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
