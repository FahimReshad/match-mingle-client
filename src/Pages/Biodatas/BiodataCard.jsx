/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BiodataCard = ({ biodata }) => {
  const {
    _id,
    biodataId,
    profileImage,
    bioDataType,
    permanentDivision,
    age,
    occupation,
  } = biodata;

  return (
    <div className="flex flex-col items-center justify-center  rounded-xl bg-white p-8 shadow-lg dark:bg-[#18181B]">
      <div className="group">
        <img
          width={110}
          height={110}
          className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover"
          src={profileImage}
          alt="card navigate ui"
        />
      </div>
      <div className="">
        <div className="text-2xl -mb-14  text-[#66451c] flex justify-evenly">
          <h5>Biodata Id:</h5>
          <h5>{biodataId}</h5>
        </div>
        <div className="text-2xl -mb-14 text-[#66451c] flex justify-evenly">
          <h5>Biodata Type:</h5>
          <h5>{bioDataType}</h5>
        </div>
        <div className="text-2xl -mb-14 text-[#66451c] flex justify-between">
          <h5>Permanent Division:</h5>
          <h5>{permanentDivision}</h5>
        </div>
        <div className="text-2xl -mb-14 text-[#66451c] flex justify-evenly">
          <h5>Age:</h5>
          <h5>{age}</h5>
        </div>
        <div className="text-2xl text-[#66451c] flex justify-evenly">
          <h5>Occupation:</h5>
          <h5>{occupation}</h5>
        </div>
      </div>

      <Link to={`/biodata/details/${_id}`} className="w-full"><button className="w-full rounded-full py-2 text-[12px] font-semibold text-[#66451c] ring-1 ring-[#66451c] hover:bg-[#66451c] hover:text-white sm:text-sm md:text-base">
        View Profile
      </button></Link>
    </div>
  );
};

export default BiodataCard;
