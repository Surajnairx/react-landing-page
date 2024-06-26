import logowhite from "../assets/img/logoWhite.svg";
import facebook from "../assets/img/icon-facebook.svg";
import instagram from "../assets/img/icon-instagram.svg";
import pinterest from "../assets/img/icon-pinterest.svg";
import twitter from "../assets/img/icon-twitter.svg";
import youtube from "../assets/img/icon-youtube.svg";

function Footer() {
  return (
    <footer id="sl" className=" bg-veryDarkBlue">
      <div className=" flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and social links */}
        <div className=" flex flex-col-reverse gap-12 items-center justify-between space-y-10 md:flex-col  md:space-y-0 md:items-start">
          <div>
            <img src={logowhite} alt="" />
          </div>
          {/* Social Logo */}
          <div className=" flex justify-center space-x-2">
            <a href="#">
              <img src={facebook} alt="" className=" h-8 " />
            </a>
            <a href="#">
              <img src={instagram} alt="" className=" h-8 " />
            </a>
            <a href="#">
              <img src={pinterest} alt="" className=" h-8 " />
            </a>
            <a href="#">
              <img src={twitter} alt="" className=" h-8 " />
            </a>
            <a href="#">
              <img src={youtube} alt="" className=" h-8 " />
            </a>
          </div>
        </div>
        <div className=" flex justify-around space-x-32 ">
          <div className=" flex flex-col space-y-3 text-white">
            <a href="" className="hover:text-brighRed">
              Home
            </a>
            <a href="" className="hover:text-brighRed">
              Pricing
            </a>
            <a href="" className="hover:text-brighRed">
              Products
            </a>
            <a href="" className="hover:text-brighRed">
              About
            </a>
          </div>
          <div className=" flex flex-col space-y-3 text-white">
            <a href="" className="hover:text-brighRed">
              Careers
            </a>
            <a href="" className="hover:text-brighRed">
              Community
            </a>
            <a href="" className="hover:text-brighRed">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
