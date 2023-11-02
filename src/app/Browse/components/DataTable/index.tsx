import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  Pagination,
} from "@mui/material";
import Row from "../Row";
import { TableProps } from "./types";
import Head from "../Head";
import { ROWS_PER_PAGE } from "../../constants";
import useTable from "./hooks";
import * as styles from "./styles";

export default function DataTable({
  rows,
  headers,
  total,
  onChangePage,
  sizePerPage = ROWS_PER_PAGE,
  page,
}: TableProps) {
  const { order, orderBy, sortedRows, onClickSort } = useTable({
    rows,
  });

  return (
    <Paper css={styles.tableContainer}>
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
              <Row row={row} key={index} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={total / sizePerPage}
        page={page}
        onChange={(event, value) => {
          onChangePage(value);
        }}
        variant="outlined"
        shape="rounded"
      />
    </Paper>
  );
}
