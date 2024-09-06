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
    <div className="rounded-xl shadow-2xl p-4 hover:cursor-pointer">
  {/* Profile image & background */}
  <div className="relative">
    {/* Background image */}
    <img className="w-full h-64 rounded-2xl bg-gray-500 object-cover" src={profileImage} alt="Background Image" />
    
    {/* Profile picture */}
    <img className="w-36 h-36 absolute -bottom-12 right-[35%] rounded-full border-4 border-white bg-gray-400 dark:border-[#18181B]" src={profileImage} alt="Profile Image" />
  </div>

  {/* Name */}
  <div className="pt-10 text-2xl text-center text-[#212529] hover:text-[#66451c]">
    <h2>{name}</h2>
  </div>

  {/* Bio data */}
  <div className="flex items-center justify-center gap-4 h-8 -mt-4 my-4">
    <div><h5 className="text-xl text-[#FFFFFF] bg-[#718FA0] px-2 rounded">{bioDataType}</h5></div>
    <div><h5 className="text-xl text-[#FFFFFF] bg-[#718FA0] px-2 rounded">{permanentDivision}</h5></div>
    <div><h5 className="text-xl text-[#FFFFFF] bg-[#718FA0] px-2 rounded">{age} years old</h5></div>
    <div className="hidden lg:block"><h5 className="text-xl text-[#FFFFFF] bg-[#718FA0] px-2 rounded">{occupation}</h5></div>
  </div>

  {/* View Profile Button */}
  <Link to={`/biodata/details/${_id}`} className="w-full">
    <button className="w-full rounded-full py-2 text-[16px] font-semibold text-[#212529] ring-1 ring-[#66451c] hover:bg-[#66451c] hover:text-white hover:cursor-pointer transition duration-300 ease-in-out sm:text-base md:text-lg">
      View Profile
    </button>
  </Link>
</div>

  );

// return (
//   <div className=" rounded-2xl bg-white px-6 py-8 shadow-md dark:bg-[#18181B]">
//   {/* profile image & bg  */}
//   <div className="relative ">
//       <img className="w-full h-64 rounded-2xl bg-gray-500 object-cover" src={profileImage} alt="card navigate ui" />
//       <img  className="w-28 h-28 absolute -bottom-12 right-[40%] rounded-full border-4 border-white bg-gray-400 dark:border-[#18181B]" src={profileImage} alt="card navigate ui"/>
//   </div>
//   {/* profile name & role */}
//   <div className="px-10">
//       <h1 className="pt-10 text-2xl md:text-2xl">{name}</h1>
//   </div>
// <div className="flex gap-6">
//   <div><h5>{bioDataType}</h5></div>
//   <div><h5>{bioDataType}</h5></div>
// </div>
//   <div className="flex justify-center">
//       <button className="w-[80%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">Follow</button>
//   </div>
// </div>
// )


};

export default BiodataCard;
