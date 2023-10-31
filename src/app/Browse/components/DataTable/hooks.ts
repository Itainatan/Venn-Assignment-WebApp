import { Player } from "@src/app/types";
import { useState, MouseEvent, useMemo } from "react";
import { stableSort, getComparator } from "./helpers";
import { Order } from "./types";

export default function useTable({ rows }: { rows: Player[] }) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Player>("id");
  const [page, setPage] = useState<number>(0);

  const onClickSort = (event: MouseEvent<unknown>, property: keyof Player) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = useMemo(
    () => stableSort(rows, getComparator(order, orderBy)),
    [rows, page, order, orderBy]
  );

  return { order, orderBy, sortedRows, page, onClickSort, setPage };
}
