/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BiodataCard = ({ biodata }) => {
  const {
    _id,
    name,
    profileImage,
    bioDataType,
    permanentDivision,
    age,
    occupation,
  } = biodata;

  return (
    <div className=" rounded-xl shadow-2xl p-4 hover:cursor-pointer">
      {/* Profile image & background */}
      <div className="relative">
        {/* Background image */}
        <img
          className="w-full h-64 rounded-2xl bg-gray-500 object-cover"
          src={profileImage}
          alt="Background Image"
        />

        {/* Profile picture */}
        <img
          className="w-36 h-36 absolute -bottom-12 right-[28%] lg:right-[35%] rounded-full border-4 border-white bg-gray-400 dark:border-[#18181B]"
          src={profileImage}
          alt="Profile Image"
        />
      </div>

      {/* Name */}
      <div className="pt-10 text-2xl text-center text-[#212529] hover:text-[#66451c]">
        <h2>{name}</h2>
      </div>

      {/* Bio data */}
      <div className="flex items-center justify-center gap-4 h-8 -mt-4 my-4">
        <div>
          <h5 className="text-xl text-[#FFFFFF] bg-[#718FA0] px-2 rounded">
            {bioDataType}
          </h5>
        </div>
        <div>
          <h5 className="text-xl text-[#FFFFFF] bg-[#718FA0] px-2 rounded">
            {permanentDivision}
          </h5>
        </div>
        <div>
          <h5 className="text-xl text-[#FFFFFF] bg-[#718FA0] px-2 rounded">
            {age} years old
          </h5>
        </div>
        <div className="hidden lg:block">
          <h5 className="text-xl text-[#FFFFFF] bg-[#718FA0] px-2 rounded">
            {occupation}
          </h5>
        </div>
      </div>

      {/* View Profile Button */}
      <Link to={`/biodata/details/${_id}`} className="w-full">
        <button className="w-full rounded-full py-2 text-[16px] font-semibold text-[#212529] ring-1 ring-[#66451c] hover:bg-[#66451c] hover:text-white hover:cursor-pointer transition duration-300 ease-in-out sm:text-base md:text-lg">
          View Profile
        </button>
      </Link>
    </div>
  );
};

export default BiodataCard;
