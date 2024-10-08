/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";

const ContactUsForm = () => {
  return (
    <div className="flex items-center justify-center mt-8 md:mt-16">
      <div className="flex flex-col lg:flex-row h-full w-full overflow-hidden rounded-xl shadow-md md:h-[90%] md:w-[80%] lg:w-[67%]">
        {/* register design side  */}
        <div className="relative h-full items-center justify-center bg-[#F2D184CC] md:flex md:w-[100%] lg:w-[40%]">
          <div className="space-y-2 text-center">
            <h2 className="md:text-4xl lg:text-5xl font-medium text-[#66451c] ">
              Now
            </h2>
            <h2 className="animate-pulse text-3xl md:text-5xl lg:text-7xl font-semibold text-[#66451c] ">
              Contact to us
            </h2>
            <p className="animate-pulse text-xl md:text-3xl lg:text-4xl font-poppins font-semibold text-[#66451c] pt-6">
              Easy and fast.
            </p>
            <Marquee>
              <img
                className="w-full lg:pt-20"
                src="https://i.ibb.co/4TxsdDM/login-bg.png"
                alt=""
              />
            </Marquee>
          </div>
        </div>
        {/* input side  */}
        <div className="flex w-full flex-col justify-center bg-white lg:w-[60%]">
          <p className="-mb-4 text-center text-xl font-semibold text-[#66451c]">
            LET'S TALK
          </p>
          <h2 className=" text-center text-3xl font-bold text-[#66451c]">
            Send your enquiry now
          </h2>
          <form className="flex  w-full flex-col items-center justify-center gap-4">
            <input
              className="w-[80%] rounded-lg border border-[#66451c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#66451c]/50 lg:w-[60%]"
              type="text"
              placeholder="Enter your full name"
              name="name"
            />
            <input
              className="w-[80%] rounded-lg border border-[#66451c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#66451c]/50 lg:w-[60%]"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="w-[80%] rounded-lg border border-[#66451c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#66451c]/50 lg:w-[60%]"
              type="text"
              placeholder="Enter phone number"
              name="phone"
            />
            <input
              className="w-[80%] rounded-lg border border-[#66451c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#66451c]/50 lg:w-[60%] h-20"
              type="text"
              placeholder="Enter message"
              name="message"
            />

            <input
              className="w-[92%] rounded-lg bg-[#66451c] px-6 py-2 font-bold text-white md:w-[88%] lg:w-[65%] uppercase hover:cursor-pointer"
              type="Submit"
              value="Send Enquiry"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
