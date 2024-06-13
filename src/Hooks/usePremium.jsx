import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePremium = () => {
//   const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { isPending, data: biodatas = [] } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const res = await axiosSecure.get("/biodata");
      return res.data;
    },
  });
  if (isPending) {
    return <span>Loading...</span>;
  }

  return [biodatas, isLoading];
};

export default usePremium;
