import { Box } from "@mui/material";
import SearchField from "@src/common-components/SearchField";
import useBrowse from "./hooks";
import { headCells } from "./constants";
import DataTable from "./components/DataTable";
import * as styles from "./styles";

export default function Browse() {
  const { data, setPage, onSubmit, page, isLoading } = useBrowse();

  return (
    <Box css={styles.browseContainer}>
      <SearchField
        onSubmit={onSubmit}
        placeholder="Type movie name…"
        required={false}
      />
      {data && (
        <DataTable
          rows={data.data}
          headers={headCells}
          totalPages={data.total_pages}
          onChangePage={setPage}
          page={page}
          isLoading={isLoading}
        />
      )}
    </Box>
  );
}
