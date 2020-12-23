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
    title: "オフショア開発センター",
    imgSrc: "/iconsvgs/services/offshore.svg",
  },
  outsourcing: {
    slug: "outsourcing",
    title: "ソフトウェアのアウトソーシング",
    imgSrc: "/iconsvgs/services/outsourcing.svg",
  },
  webapp: {
    slug: "webapp",
    title: "ソフトウェアのアウトソーシング",
    imgSrc: "/iconsvgs/services/web-app.svg",
  },
  mobileapp: {
    slug: "mobileapp",
    title: "モバイルアプリケーション開発",
    imgSrc: "/iconsvgs/services/mobile-app.svg",
  },
  bigdata: {
    slug: "bigdata",
    title: "ビッグデータの統合と分析",
    imgSrc: "/iconsvgs/services/big-data.svg",
  },
  qc: {
    slug: "qc",
    title: "ソフトウェア品質保証",
    imgSrc: "/iconsvgs/services/test.svg",
  },
  machinelearning: {
    slug: "machinelearning",
    title: "機械学習",
    imgSrc: "/iconsvgs/services/machine-learning.svg",
  },
};

export const jp = {
  metaKeywords:
    "ソフトウェア開発アウトソーシング、ソフトウェアプログラマ、オフショアソフトウェア開発、オフショアソフトウェア、カスタムソフトウェア、カスタム・ソフトウェア・ソリューション、ソフトウェアアウトソーシング",
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
