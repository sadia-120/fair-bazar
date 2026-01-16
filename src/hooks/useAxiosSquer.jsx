import axios from "axios";

const axiosSquer = axios.create({
  baseURL: "https://fairbazar-server.vercel.app",
});

const useAxiosSquer = () => {
  return axiosSquer;
};

export default useAxiosSquer;
