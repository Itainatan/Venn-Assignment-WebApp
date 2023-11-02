import { API_URL } from "@src/app/constants";
import axios from "axios";

axios.defaults.baseURL = API_URL;

export default function getMovies({ page = 1 }) {
  return axios(`/?page=${page}`).then((result) => result.data);
}
