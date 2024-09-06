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
      const res = await axiosPublic.get("/biodata/premium/Premium", {
        withCredentials: true,
      });
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="w-10 h-10 mx-auto mt-10">
        <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
          <span className="h-5 w-5 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span>{" "}
          <span className="h-5 w-5 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span>
          <span className="h-5 w-5 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span>
          <span className="h-5 w-5 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span>
        </div>
      </div>
    );
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
            <div className=" rounded-xl shadow-2xl p-4 hover:cursor-pointer">
              {/* Profile image & background */}
              <div className="relative">
                {/* Background image */}
                <img
                  className="w-full h-64 rounded-2xl bg-gray-500 object-cover"
                  src={premiumBiodata.profileImage}
                  alt="Background Image"
                />

                {/* Profile picture */}
                <img
                  className="w-36 h-36 absolute -bottom-12 right-[27%] lg:right-[35%] rounded-full border-4 border-white bg-gray-400 dark:border-[#18181B]"
                  src={premiumBiodata.profileImage}
                  alt="Profile Image"
                />
              </div>

              {/* Name */}
              <div className="pt-10 text-2xl text-center text-[#212529] hover:text-[#66451c]">
                <h2>{premiumBiodata.name}</h2>
              </div>

              {/* Bio data */}
              <div className="flex items-center justify-center gap-4 h-8 -mt-4 my-4">
                <div>
                  <h5 className="text-xl text-[#FFFFFF] bg-[#718FA0] px-2 rounded">
                    {premiumBiodata.bioDataType}
                  </h5>
                </div>
                <div>
                  <h5 className="text-xl text-[#FFFFFF] bg-[#718FA0] px-2 rounded">
                    {premiumBiodata.permanentDivision}
                  </h5>
                </div>
                <div className="">
                  <h5 className="text-xl text-[#FFFFFF] bg-[#718FA0] px-2 rounded">
                    <span>Age: </span>
                    {premiumBiodata.age}
                  </h5>
                </div>
                <div className="hidden lg:block">
                  <h5 className="text-xl text-[#FFFFFF] bg-[#718FA0] px-2 rounded">
                    {premiumBiodata.occupation}
                  </h5>
                </div>
              </div>

              {/* View Profile Button */}
              <Link
                to={`/biodata/details/${premiumBiodata._id}`}
                className="w-full"
              >
                <button className="w-full rounded-full py-2 text-[16px] font-semibold text-[#212529] ring-1 ring-[#66451c] hover:bg-[#66451c] hover:text-white hover:cursor-pointer transition duration-300 ease-in-out sm:text-base md:text-lg">
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
