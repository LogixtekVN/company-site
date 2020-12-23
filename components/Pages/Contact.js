import React from "react";
import Head from "next/head";
import { useTheme } from "@material-ui/core/styles";
import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import BlankLayout from "../Layout/BlankLayout";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";
import { sendContactService } from "../../services/contactService";

export default function Contact({ language, data }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = (data) => {
    console.log(data);
    sendContactService(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>{data.headTitle}</title>
      </Head>
      <main>
        <BlankLayout>
          <Container>
            {/* ======= contact form ======= */}
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={12} md={5}>
                <ContactInfo
                  icon="location_on"
                  name="Location"
                  info="Floor 1&2, Master Building, 41-43 Tran Cao Van street, Dist 3, HCM, Vietnam"
                  link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3641988009094!2d106.69473741480083!3d10.783392992316795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fad01a6b621%3A0xde720bb3cf207c6e!2sMaster%20Building!5e0!3m2!1svi!2s!4v1608365688038!5m2!1svi!2s"
                />
                <ContactInfo
                  icon="email"
                  name="Email"
                  info="info@logixtek.com"
                />
                <ContactInfo
                  icon="call"
                  name="Phone"
                  info="(+84)28 6290 9943"
                />
                <ContactInfo
                  icon="phone_iphone"
                  name="Mobile"
                  info="(+84)918 454 652"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <Typography variant="h5" color="secondary" align="center">
                  CONTACT US TODAY
                </Typography>
                <ContactForm onSubmit={handleSubmit} />
              </Grid>
            </Grid>
          </Container>
        </BlankLayout>
      </main>
    </>
  );
}
