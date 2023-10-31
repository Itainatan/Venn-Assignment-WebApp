import * as React from "react";
import { Collapse, IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PlayerCard from "@src/app/PlayerCard";
import { Player } from "@src/app/types";
import * as styles from "./styles";

export default function Row({ row, index }: { row: Player, index: number }) {

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow hover tabIndex={-1} key={row.id} css={styles.cell(index)}>
        <TableCell component="th" scope="row" align="center" padding="normal">
          {row.id}
        </TableCell>
        <TableCell component="th" scope="row" align="center" padding="normal">
          {row.name}
        </TableCell>
        <TableCell component="th" scope="row" align="center" padding="normal">
          {row.species}
        </TableCell>
        <TableCell component="th" scope="row" align="center" padding="normal">
          {row.status}
        </TableCell>
        <TableCell component="th" scope="row" align="center" padding="normal">
          {row.origin.name}
        </TableCell>
        <TableCell component="th" scope="row" align="center" padding="normal">
          {row.gender}
        </TableCell>
        <TableCell component="th" scope="row" align="center" padding="normal">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon css={styles.icon}/>}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <PlayerCard player={row} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
