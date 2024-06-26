import illustration from "../assets/img/illustration-intro.svg";
function Hero() {
  return (
    <section id="home">
      <div className=" container flex flex-col   md:flex-row items-center px-6  mx-auto mt-10 md:space-y-0">
        <div className=" container flex flex-col-reverse md:flex-row items-center px-6 gap mx-auto mt-10 ">
          {/* Left Item */}
          <div className="flex flex-col mb-32 gap-7 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className=" max-w-sm text-center text-darkGrayishBlue md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              iste aliquam atque officia earum similique maiores, enim cumque
              itaque vero labore fugit sed, deleniti recusandae optio amet
              dolore dolor doloremque?
            </p>
            <div className="flex justify-center md:justify-start">
              {" "}
              <a
                href=""
                className=" p-3 px-3 pt-2 text-white bg-brighRed rounded-full baseline hover:bg-brighRedLight"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
