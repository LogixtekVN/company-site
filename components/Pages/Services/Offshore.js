import Head from "next/head";
import { Container, Grid, Icon } from "@material-ui/core";
import Carousel from "../../Carousel";
import SectionTitle from "../../SectionTitle";
import IntroductionBox from "../../IntroductionBox";
import ListWithIcon from "../../ListWithIcon";
import GridTechnicalImages from "../../GridTechnicalImages";
import { LIST_OFFSHORE_TECH_IMAGES } from "../../../constants/Const";

export default function Offshore({ data }) {
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
          {/* ======= Technologies ======= */}
          <SectionTitle title={data.technologies.title} />
          <br />
          <GridTechnicalImages images={LIST_OFFSHORE_TECH_IMAGES} />
          <br />
          {/* ======= offshore development ======= */}
          <SectionTitle title={data.offshore.title} subTitle="" />
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <ListWithIcon
                lists={data.offshore.listContent}
                startIcon="done_all"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img style={{ width: "100%" }} src="/img/offshore.svg" />
            </Grid>
          </Grid>
          {/* ======= What you Get ======= */}
          <SectionTitle title={data.whatYouGet.title} noLine />
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <img style={{ width: "100%" }} src="/img/in_progress.svg" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ListWithIcon
                lists={data.whatYouGet.listContent}
                startIcon="done_all"
                iconColor="secondary"
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
