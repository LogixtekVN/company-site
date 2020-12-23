import { makeStyles } from "@material-ui/core/styles";
import { primaryMain, primaryLight } from "../themes/colors";
import { contentCenter } from "../themes/common";

const headerHeight = "6.3vh";
const headerFontStyle = {
  fontSize: 15,
  fontWeight: 500,
};
const Layout = makeStyles((theme) => ({
  headerColorPrimary: {
    color: primaryMain,
    backgroundColor: "#ffffff",
  },
  header: {
    "& .logo": {
      width: "auto",
      height: headerHeight,
      objectFit: "contain",
      marginTop: 5,
      padding: "10px 0",
    },
    "& a": {
      ...headerFontStyle,
      "&:hover, &.active": {
        color: theme.palette.secondary.main,
      },
    },
    "& .active a": {
      color: theme.palette.secondary.main,
    },
    "& .menu-icon": {
      fontSize: "2rem",
      cursor: "pointer",
      textAlign: "right",
    },
  },
  header__collapseMenu: {
    width: "100%",
    transition: theme.transitions.create(["height"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  header__dropdownMenu: {
    display: "block",
    fontSize: 15,
    "& .dropdown__label": {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "space-between",
      },
      ...headerFontStyle,
      "& .MuiIcon-root": {
        opacity: 0.6,
        margin: "0 5px",
      },
    },
    "& .dropdown__list": {
      position: "absolute",
      marginTop: 5,
      left: "43%",
      top: "70%",
      color: primaryMain,
      backgroundColor: "#ffffff",
      borderRadius: 4,
      boxShadow: "0px 0px 30px rgba(127, 137, 161, 0.25)",
    },
    "& .MuiListItem-root": {
      padding: "10px 24px",
      fontWeight: "normal",
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
  },
  footer: {
    background: primaryMain,
    marginTop: 40,
    padding: "0 0 30px 0",
    color: "#ffffff",
    "& .footer__top": {
      background: primaryLight,
      padding: "30px 0",
    },
    "& .footer__bottom": {
      ...contentCenter,
      flexDirection: "column",
      "& .copyright__heading": {
        marginTop: 30,
        marginBottom: 10,
      },
    },
  },
  blankLayout: {
    minHeight: "35vh",
    marginTop: "11.1vh",
  },
  [theme.breakpoints.down("sm")]: {
    header: {
      maxHeight: "70vh",
      overflowY: "scroll",
    },
    blankLayout: {
      marginTop: "7vh",
    },
  },
}));

export default Layout;
