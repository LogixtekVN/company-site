import Head from "next/head";
import { Container } from "@material-ui/core";
import Carousel from "../../Carousel";
import SectionTitle from "../../SectionTitle";
import IntroductionBox from "../../IntroductionBox";
import ListCardWithIcon from "../../ListCardWithIcon";

export default function QualityAssurance({ data }) {
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
          {/* ======= We will help you ======= */}
          <SectionTitle title={data.weWillHelpYou.title} />
          <ListCardWithIcon lists={data.weWillHelpYou.listContent} md={4} />
          <br />
          {/* ======= We will serve you ======= */}
          <SectionTitle title={data.weWillServeYou.title} />
          <ListCardWithIcon lists={data.weWillServeYou.listContent} md={6} />
        </Container>
      </main>
    </>
  );
}
