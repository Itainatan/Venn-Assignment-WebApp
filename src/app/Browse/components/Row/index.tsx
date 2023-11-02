import * as React from "react";
import { IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as styles from "./styles";

export default function Row({ row, index }: { row: any; index: number }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow hover tabIndex={-1} key={row.id} css={styles.cell(index)}>
        <TableCell component="th" scope="row" align="center" padding="normal">
          {row.name}
        </TableCell>
        <TableCell component="th" scope="row" align="center" padding="normal">
          {row.species}
        </TableCell>
      </TableRow>
    </>
  );
}
