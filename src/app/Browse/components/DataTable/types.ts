import { Movie } from "@src/app/types";

type Order = "asc" | "desc";

type HeadCell = {
  id: keyof Movie;
  label: string;
};

export type { Order, HeadCell };
