function Cta() {
  return (
    <section id="git" className=" bg-brighRed">
      {/* Flex Container */}
      <div className=" container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <h2 className=" text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>
        <div>
          <a
            href=""
            className=" p-3 px-3 pt-2 text-brighRedLight bg-white rounded-full baseline hover:bg-gray-900"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
