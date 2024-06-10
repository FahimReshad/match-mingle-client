import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import BiodataCard from "./BiodataCard";
import BiodataSearch from "./BiodataSearch";
import { useState } from "react";

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
    return <span>Loading...</span>;
  }

  return (
    <div className="flex gap-10">
      <div className="">
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
