import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AboutUsWedding = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-16 container mx-auto mt-6 md:mt-12 lg:mt-20">
      <div className="lg:w-1/2">
        <img
          className="h-[600px] w-full lg:w-[80%] rounded-xl"
          src="https://i.ibb.co/F39PJY1/1.jpg"
          alt=""
        />
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-5xl text-pink-600 font-poppins italic">
          <span className="text-7xl text-[#66451c] italic">Welcome to</span>{" "}
          <br /> Wedding matrimony
        </h1>
        <p className="text-[#66451c] text-xl font-poppins">
          Best wedding matrimony It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout.
        </p>
        <p className="text-[#66451c] text-xl font-poppins">
          <span className="text-pink-600">Click here to</span> Start you
          matrimony service now.
        </p>
        <hr />
        <p className="text-[#66451c] text-lg font-poppins">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div className="flex flex-col md:flex-row md:gap-8 gap-4">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-slate-400 rounded-full p-2">
              <FaPhoneAlt className="text-[#66451c] text-3xl" />
            </div>
            <div className="-space-y-5">
              <p className="text-gray-600 font-bold">Enquiry:</p>
              <p className="text-[#66451c] text-xl">+880 17xxxxxxxxxxx</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-slate-400 rounded-full p-2">
              <MdEmail className="text-[#66451c] text-3xl" />
            </div>
            <div className="-space-y-5">
              <p className="text-gray-600 font-bold">Get Support:</p>
              <p className="text-[#66451c] text-xl">info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsWedding;
