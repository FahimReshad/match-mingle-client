import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://match-mingle-server-pi.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
