import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import BiodataCard from "./BiodataCard";
import BiodataSearch from "./BiodataSearch";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Biodatas = () => {
  const axiosPublic = useAxiosPublic();
  const [searchResults, setSearchResults] = useState([]);

  const { isPending, data: biodatas = [] } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodata");
      return res.data;
    },
  });
  if (isPending) {
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
    <div className="flex flex-col lg:flex-row gap-16 container mx-auto mt-6 md:mt-14">
      <Helmet>
        <title>Match Mingle || Biodatas</title>
      </Helmet>
      <div className="shadow-2xl h-fit py-10 px-20 rounded-xl border-solid border border-[#66451c]">
        <BiodataSearch
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {searchResults.length > 0
          ? searchResults.map((biodata) => (
              <BiodataCard key={biodata._id} biodata={biodata} />
            ))
          : biodatas.map((biodata) => (
              <BiodataCard key={biodata._id} biodata={biodata} />
            ))}
      </div>
    </div>
  );
};

export default Biodatas;
