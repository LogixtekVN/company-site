import { en } from "./Data/en";
import { jp } from "./Data/jp";
import { SERVICES as EN_SERVICES } from "./Data/en";
import { SERVICES as JP_SERVICES } from "./Data/jp";

// We use language with ISO 639-1 codes
export const LIST_LANGUAGE = [
  {
    name: "English",
    code: "en",
    flag: "/iconsvgs/usa_flag.svg",
  },
  {
    name: "日本人",
    code: "jp",
    flag: "/iconsvgs/japan_flag.svg",
  },
];
export const LANGUAGE_DATA = {
  en,
  jp,
};

export const PAGE_SLUGS = {
  services: "services",
  blogs: "blogs",
  careers: "careers",
  about: "about",
  contact: "contact",
};

// each key in this object is the path of website
// each value will be show on Navigation Bar at top header
export const PAGE_PATHS = {
  en: {
    "": "Home",
    services: {
      name: "Services",
      list: EN_SERVICES,
    },
    blogs: "Blogs",
    careers: "Careers",
    about: "About",
    contact: "Contact",
  },
  jp: {
    "": "ホーム",
    services: {
      name: "サービス",
      list: JP_SERVICES,
    },
    blogs: "ブログ",
    careers: "キャリア",
    about: "約",
    contact: "連絡先",
  },
};

export const DEFAULT_CAROUSEL_IMAGE = ["/img/slide-1.jpg"];

const TECHNICAL_IMAGES = {
  aspDotNet: "/img/technologies/net_core_logo.svg",
  cSharp: "/img/technologies/c_Sharp_logo.svg",
  sqlServer: "/img/technologies/microsoft_sql_server_logo.svg",
  sharepoint: "/img/technologies/sharepoint.svg",
  azure: "/img/technologies/microsoft_azure_logo.svg",
  linux: "/img/technologies/linux_logo.svg",
  apache: "/img/technologies/apache_http_server_logo.svg",
  mysql: "/img/technologies/mysql_official.svg",
  php: "/img/technologies/php_logo.svg",
  ios: "/img/technologies/apple_logo_black.svg",
  android: "/img/technologies/android_robot.svg",
  hybrid: "/img/technologies/hybrid-app-logo.png",
  reactJs: "/img/technologies/react_js.svg",
  ssis: "/img/technologies/microsoft-ssis_logo.svg",
  mongoDB: "/img/technologies/mongoDB_logo.svg",
  hadoop: "/img/technologies/hadoop_logo.svg",
};

export const LIST_OFFSHORE_TECH_IMAGES = [
  TECHNICAL_IMAGES.aspDotNet,
  TECHNICAL_IMAGES.cSharp,
  TECHNICAL_IMAGES.sqlServer,
  TECHNICAL_IMAGES.sharepoint,
  TECHNICAL_IMAGES.azure,
  TECHNICAL_IMAGES.linux,
  TECHNICAL_IMAGES.apache,
  TECHNICAL_IMAGES.mysql,
  TECHNICAL_IMAGES.php,
];

export const LIST_OUTSOURCING_TECH_IMAGES = [
  TECHNICAL_IMAGES.aspDotNet,
  TECHNICAL_IMAGES.sharepoint,
  TECHNICAL_IMAGES.android,
  TECHNICAL_IMAGES.ios,
  TECHNICAL_IMAGES.azure,
  TECHNICAL_IMAGES.reactJs,
  TECHNICAL_IMAGES.hybrid,
];

export const LIST_BIG_DATA_TECH_IMAGES = [
  TECHNICAL_IMAGES.ssis,
  TECHNICAL_IMAGES.hadoop,
  TECHNICAL_IMAGES.mongoDB,
];

export const LIST_INDUSTRIES_IMAGE = [
  {
    imgUrl: "/img/services/webapp_m_and_e.svg",
    title: "M&E",
  },
  {
    imgUrl: "/img/services/webapp_healthcare.svg",
    title: "Healthcare",
  },
  {
    imgUrl: "/img/services/webapp_retail.svg",
    title: "Retails",
  },
  {
    imgUrl: "/img/services/webapp_fintech.svg",
    title: "FMCG",
  },
  {
    imgUrl: "/img/services/webapp_e_learning.svg",
    title: "E-Learning",
  },
  {
    imgUrl: "/img/services/webapp_fintech.svg",
    title: "Fintech",
  },
  {
    imgUrl: "/img/services/webapp_sport.svg",
    title: "Sports",
  },
];

export const LIST_PARTNER_IMAGES = [
  "/img/partners/download.png",
  "/img/partners/dune-partner-logo-jan-2017-gross.jpg",
  "/img/partners/eccovia.png",
  "/img/partners/comvita-logo.png",
  "/img/partners/Thinkforbl.png",
  "/img/partners/wincasa-logo-e1525950739701.jpg",
  "/img/partners/dws-cloud.png",
];
