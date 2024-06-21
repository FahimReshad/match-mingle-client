import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const PremiumBioCards = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: premiumBiodatas,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["premiumBiodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodata/premium/Premium", {withCredentials: true});
      return res.data;
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <p className="text-[#F2D184] text-center text-3xl font-poppins mt-6 md:mt-10 lg:mt-14">
        Moment's
      </p>
      <h2 className="text-[#66451c] text-center text-4xl font-poppins -mt-4">
        Our Premium Member's
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {premiumBiodatas.slice(0, 6).map((premiumBiodata) => (
          <>
            <div className="flex flex-col items-center justify-center  rounded-xl bg-white p-8 shadow-lg dark:bg-[#18181B]">
              <div className="group">
                <img
                  width={110}
                  height={110}
                  className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover"
                  src={premiumBiodata.profileImage}
                  alt="card navigate ui"
                />
              </div>
              <div className="">
                <div className="text-2xl -mb-14  text-[#66451c] flex justify-evenly">
                  <h5>Biodata Id:</h5>
                  <h5>{premiumBiodata.biodataId}</h5>
                </div>
                <div className="text-2xl -mb-14 text-[#66451c] flex justify-evenly">
                  <h5>Biodata Type:</h5>
                  <h5>{premiumBiodata.bioDataType}</h5>
                </div>
                <div className="text-2xl -mb-14 text-[#66451c] flex justify-between">
                  <h5>Permanent Division:</h5>
                  <h5>{premiumBiodata.permanentDivision}</h5>
                </div>
                <div className="text-2xl -mb-14 text-[#66451c] flex justify-evenly">
                  <h5>Age:</h5>
                  <h5>{premiumBiodata.age}</h5>
                </div>
                <div className="text-2xl text-[#66451c] flex justify-evenly">
                  <h5>Occupation:</h5>
                  <h5>{premiumBiodata.occupation}</h5>
                </div>
              </div>

              <Link
                to={`/biodata/details/${premiumBiodata._id}`}
                className="w-full"
              >
                <button className="w-full rounded-full py-2 text-[12px] font-semibold text-[#66451c] ring-1 ring-[#66451c] hover:bg-[#66451c] hover:text-white sm:text-sm md:text-base">
                  View Profile
                </button>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PremiumBioCards;
