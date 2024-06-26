/* eslint-disable react/no-unescaped-entities */
import anisha from "../assets/img/avatar-anisha.png";
import ali from "../assets/img/avatar-ali.png";
import richard from "../assets/img/avatar-richard.png";

function Testimonial() {
  return (
    <section id="reviews">
      <div className=" max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <div className="flex flex-col mt-24 sm:flex-row  md:space-x-6">
          <div className="flex flex-col items-center p-6 pb-10 space-y-6 rounded-lg bg-veryLightGray sm:w-1/3">
            <img className="w-16 -mt-14" src={anisha} alt="" />
            <h5 className=" text-lg font-bold">Anisha Li</h5>
            <p className=" text-sm text-darkGrayishBlue">
              Manage has superhcarged our team's workflow. The ability to
              maintain visibility on largre milestones at all times keeps
              everyone motivated
            </p>
          </div>
          <div className="flex flex-col items-center p-6 pb-10 space-y-6 rounded-lg bg-veryLightGray sm:w-1/3">
            <img className="w-16 -mt-14" src={ali} alt="" />
            <h5 className=" text-lg font-bold">Ali Bravo</h5>
            <p className=" text-sm text-darkGrayishBlue">
              Manage has superhcarged our team's workflow. The ability to
              maintain visibility on largre milestones at all times keeps
              everyone motivated
            </p>
          </div>
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray sm:w-1/3">
            <img className="w-16 -mt-14" src={richard} alt="" />
            <h5 className=" text-lg font-bold">Richard Watts</h5>
            <p className=" text-sm text-darkGrayishBlue">
              Manage has superhcarged our team's workflow. The ability to
              maintain visibility on largre milestones at all times keeps
              everyone motivated
            </p>
          </div>
        </div>
        <div className="my-16">
          <a
            href=""
            className=" p-3 px-3 pt-2 text-white bg-brighRed rounded-full baseline hover:bg-brighRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
