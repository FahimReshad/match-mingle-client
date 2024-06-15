import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePremium = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isPremium, isPending } = useQuery({
    queryKey: [user?.email, "isPremium"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/premium/${user.email}`);
      return res?.data?.status;
    },
  });
  return [isPremium, isPending];
};

export default usePremium;
