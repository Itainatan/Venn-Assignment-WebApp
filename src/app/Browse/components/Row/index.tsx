import { TableCell, TableRow } from "@mui/material";
import * as styles from "./styles";
import { Movie } from "@src/app/types";

export default function Row({ row, index }: { row: Movie; index: number }) {
  return (
    <>
      <TableRow hover tabIndex={-1} key={index} css={styles.cell(index)}>
        <TableCell component="th" scope="row" align="center" padding="normal">
          {row.Title}
        </TableCell>
        <TableCell component="th" scope="row" align="center" padding="normal">
          {row.Year}
        </TableCell>
      </TableRow>
    </>
  );
}
