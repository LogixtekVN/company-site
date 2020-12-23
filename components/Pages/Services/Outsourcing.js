import Head from "next/head";
import { Container } from "@material-ui/core";
import Carousel from "../../Carousel";
import SectionTitle from "../../SectionTitle";
import IntroductionBox from "../../IntroductionBox";
import GridTechnicalImages from "../../GridTechnicalImages";
import { LIST_OUTSOURCING_TECH_IMAGES } from "../../../constants/Const";
import ListCardWithIcon from "../../ListCardWithIcon";

export default function Outsourcing({ data }) {
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
          {/* ======= ExpertIn ======= */}
          <SectionTitle title={data.expertIn.title} />
          <GridTechnicalImages images={LIST_OUTSOURCING_TECH_IMAGES} />
          <br />
          {/* ======= Why choose outsourcing ======= */}
          <SectionTitle title={data.whyOutsourcing.title} />
          <ListCardWithIcon lists={data.whyOutsourcing.listContent} md={6} />
        </Container>
      </main>
    </>
  );
}
