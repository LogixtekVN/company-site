import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  useScrollTrigger,
  AppBar,
  Container,
  Grid,
  Collapse,
  Icon,
  List,
  ListItem,
} from "@material-ui/core";
import styles from "../../styles/jss/components/layout";
import { LANGUAGE_DATA, PAGE_PATHS, PAGE_SLUGS } from "../../constants/Const";
import SelectLanguageBox from "../SelectLanguageBox";

function ListService({ language, listChildren }) {
  const router = useRouter();
  let { asPath } = router;
  let listItem = [];
  for (let key in listChildren) {
    let href = `/${language}/${PAGE_SLUGS.services}/${listChildren[key].slug}`;
    listItem.push(
      <Link key={key} href={href}>
        <a className={href === asPath ? "active" : ""}>
          <ListItem button>{listChildren[key].title}</ListItem>
        </a>
      </Link>
    );
  }
  return <List component="nav">{listItem}</List>;
}

export default function Header(props) {
  const classes = styles();
  const router = useRouter();
  let { query, asPath } = router;
  // get language root
  let currLanguage = query.language ? query.language : asPath.split("/")[1];

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [anchorDropdown, setAnchorDropdown] = React.useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    // target: window ? window : undefined,
  });

  const renderListNavigation = () => {
    let listItem = [];
    for (let key in PAGE_PATHS[currLanguage]) {
      if (typeof PAGE_PATHS[currLanguage][key] === "string") {
        let href = `/${currLanguage}/${key}`;
        listItem.push(
          <Link key={key} href={href}>
            <a className={href === asPath ? "active" : ""}>
              <ListItem button>{PAGE_PATHS[currLanguage][key]}</ListItem>
            </a>
          </Link>
        );
      } else {
        listItem.push(
          <ListItem key={key} className={classes.header__dropdownMenu}>
            <span
              className="dropdown__label"
              onClick={handleToggleDropDown(!anchorDropdown)}
            >
              {PAGE_PATHS[currLanguage][key].name}
              <Icon>{!!anchorDropdown ? "expand_less" : "expand_more"}</Icon>
            </span>
            <Collapse in={!!anchorDropdown}>
              <ListService
                language={currLanguage}
                listChildren={PAGE_PATHS[currLanguage][key].list}
              />
            </Collapse>
          </ListItem>
        );
      }
    }
    return (
      <List component="nav">
        {listItem}
        <ListItem>
          <SelectLanguageBox
            value={currLanguage}
            onChange={handleChangeLanguage}
          />
        </ListItem>
      </List>
    );
  };

  const renderGridNavigation = () => {
    let gridItem = [];
    for (let key in PAGE_PATHS[currLanguage]) {
      if (typeof PAGE_PATHS[currLanguage][key] === "string") {
        let href = key ? `/${currLanguage}/${key}` : `/${currLanguage}`;
        gridItem.push(
          <Grid
            item
            key={key}
            xs={12}
            sm
            className={href === asPath ? "active" : ""}
          >
            <Link href={href}>{PAGE_PATHS[currLanguage][key]}</Link>
          </Grid>
        );
      } else {
        gridItem.push(
          <Grid
            item
            key={key}
            className={classes.header__dropdownMenu}
            xs={12}
            sm
            onMouseEnter={handleToggleDropDown(true)}
          >
            <span className="dropdown__label">
              {PAGE_PATHS[currLanguage][key].name}
              <Icon>{!!anchorDropdown ? "expand_less" : "expand_more"}</Icon>
            </span>
            <Collapse
              in={!!anchorDropdown}
              timeout={10}
              className="dropdown__list"
              onMouseLeave={handleToggleDropDown(false)}
            >
              <span>
                <ListService
                  language={currLanguage}
                  listChildren={PAGE_PATHS[currLanguage][key].list}
                />
              </span>
            </Collapse>
          </Grid>
        );
      }
    }
    return (
      <Grid
        item
        container
        xs={12}
        sm={8}
        md={8}
        justify="center"
        alignItems="center"
      >
        {gridItem}
        <Grid item xs={12} sm>
          <SelectLanguageBox
            value={currLanguage}
            onChange={handleChangeLanguage}
          />
        </Grid>
      </Grid>
    );
  };

  const handleToggleDropDown = (isOpen) => (event) => {
    setAnchorDropdown(isOpen);
  };

  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const toggleDrawer = (event) => {
    setIsOpenMenu((previousState) => !previousState);
    setAnchorDropdown(false);
  };

  const handleChangeLanguage = (event) => {
    const { value } = event.target;
    let newPath = asPath.replace(currLanguage, value);
    router.push(newPath);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content={LANGUAGE_DATA[currLanguage].metaKeywords}
        ></meta>
        <meta
          name="description"
          content={LANGUAGE_DATA[currLanguage].metaDescription}
        ></meta>
      </Head>
      <ElevationScroll {...props}>
        <AppBar
          className={classes.header + " noselect"}
          classes={{
            colorPrimary: classes.headerColorPrimary,
          }}
        >
          <Container>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={10} sm={10} md={4}>
                <Link href={`/${currLanguage}`}>
                  <a>
                    <img
                      className="logo"
                      alt="logo"
                      src="/logix_technology_logo.svg"
                    />
                  </a>
                </Link>
              </Grid>
              {matches ? (
                <>
                  <Grid item xs={2} sm={2} className="menu-icon">
                    <Icon className="menu-icon" onClick={toggleDrawer}>
                      {isOpenMenu ? "close" : "menu"}
                    </Icon>
                  </Grid>
                  <Collapse
                    in={isOpenMenu}
                    className={classes.header__collapseMenu}
                  >
                    {renderListNavigation()}
                  </Collapse>
                </>
              ) : (
                renderGridNavigation()
              )}
            </Grid>
          </Container>
        </AppBar>
      </ElevationScroll>
    </>
  );
}
