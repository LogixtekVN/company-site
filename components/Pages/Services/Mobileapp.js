import Head from "next/head";
import { Container, Grid, Typography } from "@material-ui/core";
import Carousel from "../../Carousel";
import SectionTitle from "../../SectionTitle";
import IntroductionBox from "../../IntroductionBox";
import ListCardWithIcon from "../../ListCardWithIcon";
import Process from "../../Process";

export default function Mobileapp({ data }) {
  return (
    <>
      <Head>
        <title>{data.headTitle}</title>
      </Head>
      <Carousel title={data.title} subTitle={data.subTitle} />
      <main>
        <Container>
          {/* ======= about ======= */}
          <IntroductionBox>{data.introduction.content}</IntroductionBox>
          {/* ======= What You Get ======= */}
          <SectionTitle title={data.whatYouGet.title} />
          <ListCardWithIcon lists={data.whatYouGet.listContent} md={4} />
          <br />
          {/* ======= How do we help ======= */}
          <SectionTitle title={data.howDoWeHelp.title} />
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h4" gutterBottom>
                {data.howDoWeHelp.listContent[0].title}
              </Typography>
              <Typography variant="subtitle1">
                {data.howDoWeHelp.listContent[0].content}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img
                src="/img/services/mobileapp_design.svg"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img
                src="/img/services/mobileapp_cross_flatform.svg"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h4" gutterBottom>
                {data.howDoWeHelp.listContent[1].title}
              </Typography>
              <Typography variant="subtitle1">
                {data.howDoWeHelp.listContent[1].content}
              </Typography>
            </Grid>
          </Grid>
          {/* ======= How it works ======= */}
          <SectionTitle title={data.howItWorks.title} />
          <Process listProcess={data.howItWorks.listContent} />
        </Container>
      </main>
    </>
  );
}
