import { Box, Typography } from "@mui/material";
import * as styles from "./styles";

export function Title() {
  return (
    <Box css={styles.titleContainer}>
      <Typography>Search for any movie you like:</Typography>
    </Box>
  );
}
