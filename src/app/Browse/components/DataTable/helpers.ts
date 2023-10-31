import { Player } from "@src/app/types";
import { Order } from "./types";

export function descendingComparator(
  a: Player,
  b: Player,
  orderBy: keyof Player
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
  orderBy: keyof Player
): (a: any, b: any) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(
  array: readonly Player[],
  comparator: (a: Player, b: Player) => number
) {
  const stabilizedThis = array.map(
    (el, index) => [el, index] as [Player, number]
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
