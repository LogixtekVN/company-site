import Head from "next/head";
import { useTheme } from "@material-ui/core/styles";
import { Container, Grid, Typography, useMediaQuery } from "@material-ui/core";
import Carousel from "../Carousel";
import SectionTitle from "../SectionTitle";
import IntroductionBox from "../IntroductionBox";
import TimeLine from "../TimeLine";
import ListCardWithIcon from "../ListCardWithIcon";

export default function About({ language, data }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Head>
        <title>{data.headTitle}</title>
      </Head>
      <Carousel title={data.title} subTitle={data.introduction.content} />
      <main>
        <Container>
          {/* ======= about us ======= */}
          <SectionTitle title={data.aboutUs.title} />
          <IntroductionBox>{data.aboutUs.content}</IntroductionBox>
          <Grid container spacing={4}>
            {data.advantages.map((item, index) => (
              <Grid item key={index} xs={12} sm={12} md={3}>
                <Typography
                  variant="h3"
                  align="center"
                  color="secondary"
                  gutterBottom
                >
                  {item.label}
                </Typography>
                <Typography variant="body2" align="center">
                  {item.content}
                </Typography>
              </Grid>
            ))}
          </Grid>
          {/* ======= history ======= */}
          <SectionTitle title={data.history.title} />
          <TimeLine listTimeLine={data.history.listContent} />
          {/* ======= Why logix Technology? ======= */}
          <SectionTitle title={data.mission.title} />
          <ListCardWithIcon lists={data.mission.listContent} md={6} />
          <SectionTitle title={data.management.title} />
        </Container>
      </main>
    </>
  );
}
