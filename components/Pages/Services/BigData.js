import Head from "next/head";
import { Container } from "@material-ui/core";
import Carousel from "../../Carousel";
import SectionTitle from "../../SectionTitle";
import IntroductionBox from "../../IntroductionBox";
import ListCardWithIcon from "../../ListCardWithIcon";
import GridTechnicalImages from "../../GridTechnicalImages";
import { LIST_BIG_DATA_TECH_IMAGES } from "../../../constants/Const";

export default function BigData({ data }) {
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
          {/* ======= partner benifit ======= */}
          <SectionTitle title={data.partnerBenifit.title} />
          <ListCardWithIcon lists={data.partnerBenifit.listContent} md={4} />
          <br />
          {/* ======= List tools image ======= */}
          <SectionTitle title={data.tools.title} />
          <GridTechnicalImages images={LIST_BIG_DATA_TECH_IMAGES} />
          <br />
          {/* ======= Solution approach ======= */}
          <SectionTitle title={data.solution.title} />
          <ListCardWithIcon lists={data.solution.listContent} md={4} />
        </Container>
      </main>
    </>
  );
}
