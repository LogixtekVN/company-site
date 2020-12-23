import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import customTheme from "../../styles/jss/themes/customTheme";
import { useScrollTrigger, Fab, Zoom, Icon } from "@material-ui/core";
import Footer from "./footer";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 5000,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Layout(props) {
  return (
    <ThemeProvider theme={customTheme}>
      <span id="back-to-top-anchor" />
      {/* ======= header ======= */}
      <Header />
      {props.children}
      {/* ======= footer ======= */}
      <Footer />
      {/* ======= button scroll to top  ======= */}
      <ScrollTop>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <Icon>keyboard_arrow_up</Icon>
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}
