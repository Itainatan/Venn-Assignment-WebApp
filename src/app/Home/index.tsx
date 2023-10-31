import { Box, } from "@mui/material";
import * as styles from "./styles";
import useHome from "./hooks";
import { PrimaryImage } from "@src/common-components/PrimaryImage";
import { Title } from "@src/common-components/Title";
import Buttons from "./components/Buttons";
import Browse from "../Browse";
import Search from "../Search";
import { MODE } from "../constants";

export default function Home() {
  const { mode, setMode } = useHome();

  return (
    <Box css={styles.container}>
      <PrimaryImage />

      <Box css={styles.card}>
        <Title />
        <Buttons mode={mode} onClick={setMode} />
        <Box css={styles.main}>
          {
            mode === MODE.Browse ? <Browse /> : <Search />
          }
        </Box>
      </Box>


    </Box>
  );
};

