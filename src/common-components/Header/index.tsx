import { useContext } from "react";
import MuiAppBar from "@mui/material/AppBar";
import { Box, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "@src/theme";
import { Mode } from "../../app/constants";

export default function AppBar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <MuiAppBar position="relative">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography component="h1" variant="h6" noWrap>
          Movies Search
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
          }}
        >
          {theme.palette.mode} mode
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === Mode.Dark ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
