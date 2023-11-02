import { Box } from "@mui/material";
import * as styles from "./styles";
import { Title } from "@src/common-components/Title";
import Browse from "../Browse";
import Header from "@src/common-components/Header";

export default function Home() {
  return (
    <Box css={styles.homeContainer}>
      <Header />
      <Box css={styles.main}>
        <Title />
        <Browse />
      </Box>
    </Box>
  );
}
