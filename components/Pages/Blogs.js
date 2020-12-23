import Head from "next/head";
import { useTheme } from "@material-ui/core/styles";
import { Container, Grid, useMediaQuery } from "@material-ui/core";
import Carousel from "../Carousel";
import SectionTitle from "../SectionTitle";
import IntroductionBox from "../IntroductionBox";

export default function Blogs({ language, data }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Head>
        <title>{data.headTitle}</title>
      </Head>
      <Carousel title={data.title} subTitle={data.subTitle} />
      <main>
        <Container>
          {/* ======= about us ======= */}
          <IntroductionBox>{data.introduction.content}</IntroductionBox>
        </Container>
      </main>
    </>
  );
}
