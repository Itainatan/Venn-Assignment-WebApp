import { SerializedStyles } from "@emotion/react";
import Toast from "@src/common-components/Toast";
import * as styles from "./styles";
import Home from "@src/app/Home";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ColorModeContext } from "@src/theme";
import { useTheme } from "@src/theme/hooks";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

function App() {
  const { theme, colorMode } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box css={styles.container}>
            <Toast />
            <Home />
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </QueryClientProvider>
  );
}

declare module "react" {
  interface HTMLAttributes<T> {
    css?: SerializedStyles | any[];
  }
}

export default App;
