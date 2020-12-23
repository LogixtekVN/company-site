import React from "react";
import { Container, Grid, Icon, IconButton, Button } from "@material-ui/core";
import styles from "../../styles/jss/components/layout";
export default function Footer() {
  const classes = styles();
  return (
    <footer className={classes.footer}>
      <div className="footer__top">
        <Container maxwidth="lg">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <h3>
                <strong>Contact Us</strong>
              </h3>
              <p>
                <b>Phone </b>
                <br />
                (+84) 28 6290 9943
                <br />
                (+84) 918 454 652
                <br />
                <br />
                <b>Email </b>
                <br />
                sales@logixtek.com
              </p>
              <p>
                <strong>Head office – Ho Chi Minh City</strong>
                <br />
                Floor 2, Master Building, 41-43 Tran Cao Van street, Dist 3,
                HCM, Vietnam
              </p>
              <p>
                <strong>Branch office</strong>
                <br />
                Floor 1, Master Building, 41-43 Tran Cao Van street, Dist 3,
                HCM, Vietnam
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="w-socials-list">
                <IconButton
                  rel="noopener nofollow"
                  target="_blank"
                  href="https://www.linkedin.com/in/trietltm/"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <img
                    className="MuiIcon-root material-icons"
                    src="/iconsvgs/linkedin.svg"
                    alt="linkedin"
                  />
                </IconButton>
                <IconButton
                  rel="noopener nofollow"
                  href="mailto:sales@logixtek.com"
                  title="Email"
                  aria-label="Email"
                >
                  <Icon style={{ color: "white" }}>email</Icon>
                </IconButton>
              </div>
              <div className="w-image style_shadow-2 align_none">
                <div className="w-image-h">
                  <div
                    className="w-image-shadow"
                    style={{
                      backgroundImage:
                        "url(https://www.logixtek.com/wp-content/uploads/2017/02/microsoft-partner-logo-transparent-1024x256.png)",
                    }}
                  />
                  <img
                    width={"100%"}
                    src="/microsoft_partner_logo.png"
                    className="attachment-large size-large"
                    alt="microsoft_partner_logo"
                    srcSet="https://www.logixtek.com/wp-content/uploads/2017/02/microsoft-partner-logo-transparent-1024x256.png 1024w, https://www.logixtek.com/wp-content/uploads/2017/02/microsoft-partner-logo-transparent-300x75.png 300w, https://www.logixtek.com/wp-content/uploads/2017/02/microsoft-partner-logo-transparent-600x150.png 600w"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="footer__bottom">
        <span className="copyright__heading">
          Empowered by Innovation , People , Technology.
        </span>
        <small className="copyright">
          Copyright © 2021&nbsp;
          <strong>
            <span>Logix Technology</span>
          </strong>
        </small>
      </div>
    </footer>
  );
}
