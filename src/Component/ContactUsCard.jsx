import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
const ContactUsCard = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 lg:w-2/3 mx-auto">
      <div className="shadow-2xl p-8 rounded-lg">
        <h2 className="text-[#66451c] text-3xl">Our Office</h2>
        <p className="text-[#66451c] text-xl">
          Most Trusted and premium Matrimony Service in the World.
        </p>
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-[#66451c]" />
          <p className="text-[#66451c] text-xl">+880 017xxxxxxxxx</p>
        </div>
        <div className="flex items-center gap-4">
          <MdEmail className="text-[#66451c] text-xl" />
          <p className="text-[#66451c] text-xl">help@company.com</p>
        </div>
        <div className="flex items-center gap-4">
          <IoLocation className="text-[#66451c] text-xl" />
          <p className="text-[#66451c] text-xl">Chattogram, Bangladesh</p>
        </div>
      </div>
      <div className="text-center shadow-2xl p-8 rounded-lg">
        <img src="https://i.ibb.co/8mwBRqL/trust.png" alt="" />
        <h3 className="text-xl ">CUSTOMER RELATIONS</h3>
        <p className="text-[#66451c] text-xl">
          Most Trusted and premium Matrimony Service in the World.
        </p>
        <button className="p-4 rounded-3xl border-[#66451c] font-bold text-[#66451c]">
          Get Support
        </button>
      </div>
      <div className="text-center shadow-2xl p-8 rounded-lg">
        <img
          className="h-32 w-32"
          src="https://i.ibb.co/94j0WPC/telephone.png"
          alt=""
        />
        <h3 className="text-xl ">WHATSAPP SUPPORT</h3>
        <p className="text-[#66451c] text-xl">
          Most Trusted and premium Matrimony Service in the World.
        </p>
        <button className="p-4 rounded-3xl border-[#66451c] font-bold text-[#66451c]">
          Talk to sales
        </button>
      </div>
    </div>
  );
};

export default ContactUsCard;
