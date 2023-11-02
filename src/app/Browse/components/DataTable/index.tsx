import {
  Paper,
  Box,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Pagination,
} from "@mui/material";
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
  sizePerPage = ROWS_PER_PAGE,
}: {
  rows: any[];
  headers: HeadCell[];
  total: number;
  onChangePage: (number: number) => void;
  sizePerPage: number;
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
      <Paper sx={{ width: "100%", mb: 2, display: "flex", justifyContent: "center" }}>
        {/* <TableContainer>
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
        </TableContainer> */}
        <Pagination
          count={total}
          page={page}
          onChange={(event, value) => {
            onChangePage(value + 1);
            setPage(value);
          }}
          variant="outlined"
          shape="rounded"
        />
        {/* <TablePagination
          component="div"
          count={total}
          rowsPerPage={sizePerPage}
          rowsPerPageOptions={[]}
          page={page}
          onPageChange={(event, value) => {
            onChangePage(value + 1);
            setPage(value);
          }}
        /> */}
      </Paper>
    </Box>
  );
}
