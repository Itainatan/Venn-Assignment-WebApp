import { SerializedStyles } from "@emotion/react";
import Toast from "@src/common-components/Toast";
import * as styles from "./styles";
import Home from "@src/app/Home";
import { Box } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <Box css={styles.container}>
      <Toast />
      <Home />
    </Box>

  );
}

declare module "react" {
  interface HTMLAttributes<T> {
    css?: SerializedStyles | any[];
  }
}

export default App;
