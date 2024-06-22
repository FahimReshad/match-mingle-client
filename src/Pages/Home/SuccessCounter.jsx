import { FaUserFriends } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const SuccessCounter = () => {
  const axiosPublic = useAxiosPublic();

  // Fetching total biodata
  const { isLoading: isLoadingBiodata, data: biodatas = [] } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodata");
      return res.data;
    },
  });

  // Fetching male biodata
  const { isLoading: isLoadingMaleBio, data: maleBiodatas = [] } = useQuery({
    queryKey: ["maleBiodata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodata/male");
      return res.data;
    },
  });

  // Fetching female biodata
  const { isLoading: isLoadingFemaleBio, data: femaleBiodatas = [] } = useQuery(
    {
      queryKey: ["femaleBiodata"],
      queryFn: async () => {
        const res = await axiosPublic.get("/biodata/female");
        return res.data;
      },
    }
  );

  // Fetching married biodata
  const { isLoading: isLoadingMarriedBio, data: marriedBiodatas = [] } =
    useQuery({
      queryKey: ["marriedBiodatas"],
      queryFn: async () => {
        const res = await axiosPublic.get("/successStory");
        return res.data;
      },
    });

  if (
    isLoadingBiodata ||
    isLoadingMaleBio ||
    isLoadingFemaleBio ||
    isLoadingMarriedBio
  ) {
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

  return (
    <div className=" mt-6 md:mt-28">
      <div>
        <p className="text-[#F2D184] text-center text-3xl font-poppins mt-6 md:mt-10 lg:mt-14">
          Moment's
        </p>
        <h2 className="text-[#66451c] text-center text-4xl font-poppins -mt-4">
          Success Counter
        </h2>
      </div>
      <div className="grid md:grid-cols-4">
        <div className="flex items-center gap-4 border-solid border border-[#66451c] px-6 md:border-l-0">
          <div>
            <FaUserFriends className="border-solid border rounded-lg border-[#66451c] p-1 text-4xl text-[#66451c]" />
          </div>
          <div className="space-y-2">
            <div>
              <h3 className="text-2xl text-[#66451c]">{biodatas.length}</h3>
            </div>
            <div>
              <h5 className="uppercase text-[#66451c] -mt-4">Total Biodata</h5>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-solid border border-[#66451c] px-6">
          <div>
            <FaUserFriends className="border-solid border rounded-lg border-[#66451c] p-1 text-4xl text-[#66451c]" />
          </div>
          <div className="space-y-2">
            <div>
              <h3 className="text-2xl text-[#66451c]">{maleBiodatas.length}</h3>
            </div>
            <div>
              <h5 className="uppercase text-[#66451c] -mt-4">male Biodata</h5>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-solid border border-[#66451c] px-6">
          <div>
            <FaUserFriends className="border-solid border rounded-lg border-[#66451c] p-1 text-4xl text-[#66451c]" />
          </div>
          <div className="space-y-2">
            <div>
              <h3 className="text-2xl text-[#66451c]">
                {femaleBiodatas.length}
              </h3>
            </div>
            <div>
              <h5 className="uppercase text-[#66451c] -mt-4">female Biodata</h5>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-solid border border-[#66451c] px-6 md:border-r-0">
          <div>
            <FaUserFriends className="border-solid border rounded-lg border-[#66451c] p-1 text-4xl text-[#66451c]" />
          </div>
          <div className="space-y-2">
            <div>
              <h3 className="text-2xl text-[#66451c]">
                {marriedBiodatas.length}
              </h3>
            </div>
            <div>
              <h5 className="uppercase text-[#66451c] -mt-4">Total Marriage</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
