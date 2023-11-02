import { Movie } from "../types";

type Data = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Movie[];
};

export type { Data };
