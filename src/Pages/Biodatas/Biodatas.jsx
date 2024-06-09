import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import BiodataCard from "./BiodataCard";

const Biodatas = () => {
  const axiosPublic = useAxiosPublic();
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
      <div>
        <h2>filter</h2>
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {biodatas.map(biodata => <BiodataCard key={biodata._id} biodata={biodata}></BiodataCard>)}
      </div>
    </div>
  );
};

export default Biodatas;
