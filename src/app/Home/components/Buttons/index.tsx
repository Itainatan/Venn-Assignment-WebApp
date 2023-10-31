import {
  Box,
  Button,
} from "@mui/material";
import * as styles from "./styles";
import { Props } from "./types";
import { MODE } from "../../constants";

export default function Buttons({ mode, onClick }: Props) {

  return (
    <Box css={styles.container}>
      <Button onClick={() => onClick(MODE.Browse)} css={[styles.button(true), mode === MODE.Browse && styles.selectedButton]}>Browse</Button>
      <Button onClick={() => onClick(MODE.Search)} css={[styles.button(false), mode === MODE.Search && styles.selectedButton]}>Pick a character</Button>
    </Box>
  );
}
