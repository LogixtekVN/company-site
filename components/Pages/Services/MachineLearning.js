import Head from "next/head";
import { Container } from "@material-ui/core";
import Carousel from "../../Carousel";
import SectionTitle from "../../SectionTitle";
import IntroductionBox from "../../IntroductionBox";
import Process from "../../Process";
import ListCardWithIcon from "../../ListCardWithIcon";

export default function MachineLearning({ data }) {
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
          {/* ======= What We Offer ======= */}
          <SectionTitle title={data.whatWeOffer.title} />
          <ListCardWithIcon lists={data.whatWeOffer.listContent} />
          <br />
          {/* ======= Why Choose Out Service ======= */}
          <SectionTitle title={data.whyChooseOutServices.title} />
          <ListCardWithIcon
            lists={data.whyChooseOutServices.listContent}
            md={6}
          />
          <br />
          {/* ======= Out process ======= */}
          <SectionTitle title={data.process.title} />
          <Process listProcess={data.process.listContent} />
        </Container>
      </main>
    </>
  );
}
