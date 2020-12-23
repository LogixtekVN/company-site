import Head from "next/head";
import { Container, Grid, Typography } from "@material-ui/core";
import Carousel from "../../Carousel";
import SectionTitle from "../../SectionTitle";
import IntroductionBox from "../../IntroductionBox";
import Process from "../../Process";
import CustomImage from "../../CustomImage";
import { LIST_INDUSTRIES_IMAGE } from "../../../constants/Const";

export default function Webapp({ data }) {
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
          {/* ======= industries ======= */}
          <SectionTitle title={data.industries.title} />
          <Grid container spacing={3} justify="space-between">
            {LIST_INDUSTRIES_IMAGE.map((item, index) => (
              <Grid item key={index} xs={6} sm={6} md={3}>
                <CustomImage
                  imgUrl={item.imgUrl}
                  title={data.industries.listContent[index]}
                />
              </Grid>
            ))}
          </Grid>
          <br />
          {/* <SectionTitle title={"Our technologies"} /> */}

          {/* ======= Process web development ======= */}
          <SectionTitle title={data.process.title} />
          <Process listProcess={data.process.listContent} />
        </Container>
      </main>
    </>
  );
}
