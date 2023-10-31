import { Box } from "@mui/material";
import SearchField from "@src/common-components/SearchField";
import useBrowse from "./hooks";
import { headCells } from "./constants";
import DataTable from "./components/DataTable";

export default function Browse() {
  const { data, setPage, onSubmit } = useBrowse();

  return (
    <Box>
      <SearchField
        onSubmit={onSubmit}
        placeholder="Browse for characters..."
        required={false}
      />
      {data && (
        <DataTable
          rows={data.results}
          headers={headCells}
          total={data.info.count}
          onChangePage={setPage}
        />
      )}
    </Box>
  );
}
