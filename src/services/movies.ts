import { Data } from "@src/app/Browse/types";
import { API_URL } from "@src/app/constants";
import axios from "axios";

axios.defaults.baseURL = API_URL;

export default function getMovies({ page = 1, title = "" }) {
  return axios(`/?page=${page}${title && `&Title=${title}`}`).then(
    (result: { data: Data }) => result.data
  );
}
