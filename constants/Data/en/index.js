import { HOME_PAGE_DATA } from "./HomePage";
import { OFFSHORE_PAGE_DATA } from "./ServicePage/Offshore";
import { OUTSOURCING_PAGE_DATA } from "./ServicePage/Outsourcing";
import { WEB_APP_PAGE_DATA } from "./ServicePage/Webapp";
import { MOBILE_APP_PAGE_DATA } from "./ServicePage/Mobileapp";
import { BIG_DATA_PAGE_DATA } from "./ServicePage/BigData";
import { QC_PAGE_DATA } from "./ServicePage/QualityAssurance";
import { MACHINE_LEARNING_PAGE_DATA } from "./ServicePage/MachineLearning";
import { CAREER_PAGE_DATA } from "./CareerPage";
import { ABOUT_PAGE_DATA } from "./AboutPage";
import { BLOG_PAGE_DATA } from "./BlogPage";

export const SERVICES = {
  offshore: {
    slug: "offshore",
    title: "Offshore Development Centre",
    imgSrc: "/iconsvgs/services/offshore.svg",
  },
  outsourcing: {
    slug: "outsourcing",
    title: "Software Outsourcing",
    imgSrc: "/iconsvgs/services/outsourcing.svg",
  },
  webapp: {
    slug: "webapp",
    title: "Web application development",
    imgSrc: "/iconsvgs/services/web-app.svg",
  },
  mobileapp: {
    slug: "mobileapp",
    title: "Mobile application development",
    imgSrc: "/iconsvgs/services/mobile-app.svg",
  },
  bigdata: {
    slug: "bigdata",
    title: "Big Data Integration & Analytics",
    imgSrc: "/iconsvgs/services/big-data.svg",
  },
  qc: {
    slug: "qc",
    title: "Software quality assurance",
    imgSrc: "/iconsvgs/services/test.svg",
  },
  machinelearning: {
    slug: "machinelearning",
    title: "Machine learning",
    imgSrc: "/iconsvgs/services/machine-learning.svg",
  },
};

export const en = {
  metaKeywords:
    "Software Development Outsourcing, software programmer, offshore software development, offshore software, custom software, custom software solutions, software outsourcing",
  metaDescription:
    "A reliable Vietnamese Software Development Outsourcing Company, Logix Technology provides global customers with exceptional software development outsourcing services at reasonable prices",
  homeData: {
    ...HOME_PAGE_DATA,
    service: {
      ...HOME_PAGE_DATA.service,
      listServices: Object.values(SERVICES),
    },
  },
  servicesData: {
    [SERVICES.offshore.slug]: OFFSHORE_PAGE_DATA,
    [SERVICES.outsourcing.slug]: OUTSOURCING_PAGE_DATA,
    [SERVICES.webapp.slug]: WEB_APP_PAGE_DATA,
    [SERVICES.mobileapp.slug]: MOBILE_APP_PAGE_DATA,
    [SERVICES.bigdata.slug]: BIG_DATA_PAGE_DATA,
    [SERVICES.qc.slug]: QC_PAGE_DATA,
    [SERVICES.machinelearning.slug]: MACHINE_LEARNING_PAGE_DATA,
  },
  careerData: CAREER_PAGE_DATA,
  aboutData: ABOUT_PAGE_DATA,
  blogData: BLOG_PAGE_DATA,
};
