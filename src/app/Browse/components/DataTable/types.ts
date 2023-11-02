import { Movie } from "@src/app/types";

type Order = "asc" | "desc";

type HeadCell = {
  id: keyof Movie;
  label: string;
};

type TableProps = {
  rows: Movie[];
  headers: HeadCell[];
  total: number;
  onChangePage: (number: number) => void;
  sizePerPage: number;
  page: number;
  totalPages: number;
};

export type { Order, HeadCell, TableProps };
