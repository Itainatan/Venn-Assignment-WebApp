import {
  Paper,
  Box,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { Player } from "@src/app/types";
import Row from "../Row";
import { HeadCell } from "./types";
import Head from "../Head";
import { ROWS_PER_PAGE } from "../../constants";
import useTable from "./hooks";

export default function DataTable({
  rows,
  headers,
  total,
  onChangePage,
}: {
  rows: Player[];
  headers: HeadCell[];
  total: number;
  onChangePage: (number: number) => void;
}) {
  const { order, orderBy, sortedRows, page, onClickSort, setPage } = useTable({
    rows,
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: "30vh",
        overflow: "auto",
      }}
    >
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <Head
              order={order}
              orderBy={orderBy}
              onRequestSort={onClickSort}
              headers={headers}
            />
            <TableBody>
              {sortedRows.map((row, index) => (
                <Row row={row} key={row.id} index={index}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={total}
          rowsPerPage={ROWS_PER_PAGE}
          rowsPerPageOptions={[]}
          page={page}
          onPageChange={(event, value) => {
            onChangePage(value + 1);
            setPage(value);
          }}
        />
      </Paper>
    </Box>
  );
}
