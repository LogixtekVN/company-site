import Head from "next/head";
import Link from "next/link";
import { useTheme } from "@material-ui/core/styles";
import { Container, Grid, useMediaQuery } from "@material-ui/core";
import Carousel from "../Carousel";
import SectionTitle from "../SectionTitle";
import Partners from "../Partners";
import ServiceCard from "../ServiceCard";
import IntroductionBox from "../IntroductionBox";
import FeedbackCard from "../FeedbackCard";
import { PAGE_SLUGS } from "../../constants/Const";
export default function Home({ language, data }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Head>
        <title>{data.headTitle}</title>
      </Head>
      <Carousel
        title={data.title}
        subTitle={data.subTitle}
        listImages={data.carouselImages}
      />
      <main>
        <Container>
          {/* ======= about us ======= */}
          <SectionTitle title={data.introduction.title} />
          <IntroductionBox>{data.introduction.content}</IntroductionBox>
          {/* ======= services ======= */}
          <SectionTitle title={data.service.title} />
          <Grid container spacing={matches ? 2 : 3} justify="center">
            {data.service.listServices.map((item, index) => (
              <Grid item key={index} xs={12} sm={4} md={3}>
                <Link href={`/${language}/${PAGE_SLUGS.services}/${item.slug}`}>
                  <a>
                    <ServiceCard title={item.title} imgSrc={item.imgSrc} />
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>
          {/* ======= partners ======= */}
          <SectionTitle title={data.partner.title} />
          <Partners />
          {/* ======= feedbacks ======= */}
          <SectionTitle title={data.feedback.title} />
          <Grid container spacing={matches ? 2 : 6}>
            {data.feedback.feedbackList.map((item, index) => (
              <Grid item key={index} xs={12} sm={12} md={4}>
                <FeedbackCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
