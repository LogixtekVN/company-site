import { createMuiTheme } from "@material-ui/core/styles";
import { primaryMain, secondaryMain, blueMain } from "./colors";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      // main: "#112A3F",
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
      contrastText: "#ffffff",
    },
  },
});

export default customTheme;
