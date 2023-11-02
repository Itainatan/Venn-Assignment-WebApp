import { Movie } from "@src/app/types";
import { useState, MouseEvent, useMemo } from "react";
import { stableSort, getComparator } from "./helpers";
import { Order } from "./types";

export default function useTable({ rows }: { rows: Movie[] }) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Movie>("Title");

  const onClickSort = (event: MouseEvent<unknown>, property: keyof Movie) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = useMemo(
    () => stableSort(rows, getComparator(order, orderBy)),
    [rows, order, orderBy]
  );

  return { order, orderBy, sortedRows, onClickSort, };
}
