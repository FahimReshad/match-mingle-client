import axios from "axios";
import useAuth from "./useAuth";


const useAxiosSecure = () => {
  const { token } = useAuth();
  const axiosSecure = axios.create({
    baseURL: "https://match-mingle-server-pi.vercel.app",
    headers: { 
      Authorization: `Bearer ${token}`
    },
    withCredentials: true,
  });
  return axiosSecure;
};

export default useAxiosSecure;
