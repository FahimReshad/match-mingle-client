import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#dddddd] -ml-2 -mr-2 -mb-2 pt-14">
      <footer className=" flex flex-col lg:flex-row gap-10 lg:justify-evenly">
        <div className="text-[#415764] font-semibold">
          <h4 className="uppercase text-xl text-[#415764]">Get in touch</h4>
          <p>Address: Pahartali, Chattogram, Bangladesh.</p>
          <p>Phone: +88 014 68 - 489460</p>
          <p>Email: matchmingle@gmail.com</p>
        </div>
        <div className="text-[#415764] font-semibold">
          <h4 className="uppercase text-xl text-[#415764]">HELP & SUPPORT</h4>
          <p>About company</p>
          <p>Contact us</p>
          <p>FAQs</p>
          <p>Feedback</p>
          <p>Testimonials</p>
        </div>
        <div className="text-[#415764] font-semibold">
          <h4 className="uppercase text-xl text-[#415764]">SOCIAL MEDIA</h4>
          <div className="flex justify-start space-x-6">
          <FaFacebook className="text-3xl text-sky-800"/>
          <FaTwitter className="text-3xl text-sky-400"/>
          <IoLogoInstagram className="text-3xl text-pink-600"/>
          </div>
        </div>
      </footer>
      <div className="text-center text-2xl text-[#415764]">
        <h5>
          Company name Site - Trusted by over thousands of Boys & Girls for
          successfull marriage. <Link to='/registration'><button className="bg-[#415764] text-white p-2 rounded-md font-semibold hover:cursor-pointer">Join us today!</button></Link>
        </h5>
      </div>
      <aside className="bg-gray-500 py-5 text-center text-sm text-white dark:bg-gray-800">
                <p>Copyright © 2023 Match Mingle All rights reserved.</p>
            </aside>
    </div>
  );
};

export default Footer;
