import { SerializedStyles } from "@emotion/react";
import Toast from "@src/common-components/Toast";
import * as styles from "./styles";
import Home from "@src/app/Home";
import { Box, ThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ColorModeContext } from "@src/theme";
import { useTheme } from "@src/theme/hooks";

function App() {
  const { theme, colorMode } = useTheme();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box css={styles.container}>
          <Toast />
          <Home />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

declare module "react" {
  interface HTMLAttributes<T> {
    css?: SerializedStyles | any[];
  }
}

export default App;
