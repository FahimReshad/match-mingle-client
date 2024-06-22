import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://match-mingle-server-fahim-reshads-projects.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
