import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  Pagination,
  CircularProgress,
  Typography,
} from "@mui/material";
import Row from "../Row";
import { TableProps } from "./types";
import Head from "../Head";
import useTable from "./hooks";
import * as styles from "./styles";

export default function DataTable({
  rows,
  headers,
  onChangePage,
  totalPages,
  page,
  isLoading,
}: TableProps) {
  const { order, orderBy, sortedRows, onClickSort } = useTable({
    rows,
  });

  return (
    <Paper css={styles.tableContainer}>
      <TableContainer>
        <Table aria-labelledby="tableTitle" size={"small"}>
          <Head
            order={order}
            orderBy={orderBy}
            onRequestSort={onClickSort}
            headers={headers}
          />
          <>
            <TableBody>
              {isLoading ? (
                <tr>
                  <td colSpan={4}>
                    <CircularProgress />
                  </td>
                </tr>
              ) : (
                sortedRows.map((row, index) => (
                  <Row row={row} key={index} index={index} />
                ))
              )}
            </TableBody>
          </>
        </Table>
      </TableContainer>
      <Pagination
        count={totalPages}
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
