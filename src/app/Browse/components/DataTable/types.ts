import { Player } from "@src/app/types";

type Order = "asc" | "desc";

type HeadCell = {
  id: keyof Player;
  label: string;
};

export type { Order, HeadCell };
