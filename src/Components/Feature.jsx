/* eslint-disable react/no-unescaped-entities */
function Feature() {
  return (
    <section id="feature">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className=" flex flex-col space-y-12 md:w-1/2 ">
          <h2 className=" max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className=" max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provide all the functionality your team needs, without the
            complexity. Our softaware is tailor - made for modeern digital
            product teams
          </p>
        </div>
        <div className=" flex flex-col space-y-8 md:w-1/2">
          {/* List Item 1 */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className=" rounded-l-full bg-brighRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className=" px-4 py-2 text-white rounded-full md:py-1 bg-brighRed">
                  01
                </div>
                <h3 className=" text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>
            <div>
              <h3 className=" hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p className=" text-darkGrayishBlue ">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never loose sight of the bogger picture
                again.
              </p>
            </div>
          </div>
          {/* List Item 2 */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className=" rounded-l-full bg-brighRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className=" px-4 py-2 text-white rounded-full md:py-1 bg-brighRed">
                  02
                </div>
                <h3 className=" text-base font-bold md:mb-4 md:hidden">
                  Advanced Built-in reports
                </h3>
              </div>
            </div>
            <div>
              <h3 className=" hidden mb-4 text-lg font-bold md:block">
                Advanced Built-in reports
              </h3>
              <p className=" text-darkGrayishBlue ">
                Set internal delivery estimates and track progress towards
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stackeholders informed
              </p>
            </div>
          </div>
          {/* List Item 3 */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className=" rounded-l-full bg-brighRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className=" px-4 py-2 text-white rounded-full md:py-1 bg-brighRed">
                  03
                </div>
                <h3 className=" text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place.
                </h3>
              </div>
            </div>
            <div>
              <h3 className=" hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place.
              </h3>
              <p className=" text-darkGrayishBlue ">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers all-in-one
                team productivity solution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
