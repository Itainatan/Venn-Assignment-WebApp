import { Box } from "@mui/material";
import * as styles from "./styles";
import useHome from "./hooks";
import { Title } from "@src/common-components/Title";
import Browse from "../Browse";
import Header from "@src/common-components/Header";

export default function Home() {
  // const { mode, setMode } = useHome();

  return (
    <Box css={styles.container}>
      {/* <PrimaryImage /> */}
      <Header />
      <Box css={styles.card}>
        <Title />
        <Box css={styles.main}>
          <Browse />
        </Box>
      </Box>
    </Box>
  );
}
