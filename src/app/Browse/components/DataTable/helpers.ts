import { Movie } from "@src/app/types";
import { Order } from "./types";

export function descendingComparator(
  a: Movie,
  b: Movie,
  orderBy: keyof Movie
) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(
  order: Order,
  orderBy: keyof Movie
): (a: any, b: any) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(
  array: readonly Movie[],
  comparator: (a: Movie, b: Movie) => number
) {
  const stabilizedThis = array.map(
    (el, index) => [el, index] as [Movie, number]
  );
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
