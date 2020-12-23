import Offshore from "../../../components/Pages/Services/Offshore";
import Outsourcing from "../../../components/Pages/Services/Outsourcing";
import Webapp from "../../../components/Pages/Services/Webapp";
import Mobileapp from "../../../components/Pages/Services/Mobileapp";
import BigData from "../../../components/Pages/Services/BigData";
import QualityAssurance from "../../../components/Pages/Services/QualityAssurance";
import MachineLearning from "../../../components/Pages/Services/MachineLearning";
import {
  PAGE_PATHS,
  PAGE_SLUGS,
  LANGUAGE_DATA,
} from "../../../constants/Const";

export default function Slug(props) {
  const { slug, language } = props;
  const services = PAGE_PATHS[language].services.list;
  switch (slug) {
    case services.offshore.slug:
      return <Offshore {...props} />;
    case services.outsourcing.slug:
      return <Outsourcing {...props} />;
    case services.webapp.slug:
      return <Webapp {...props} />;
    case services.mobileapp.slug:
      return <Mobileapp {...props} />;
    case services.bigdata.slug:
      return <BigData {...props} />;
    case services.qc.slug:
      return <QualityAssurance {...props} />;
    case services.machinelearning.slug:
      return <MachineLearning {...props} />;
    default:
      return <Offshore {...props} />;
  }
}

export async function getStaticPaths() {
  const paths = [];
  for (let key in PAGE_PATHS) {
    for (let serviceKey in PAGE_PATHS[key].services.list) {
      paths.push(
        `/${key}/${PAGE_SLUGS.services}/${PAGE_PATHS[key].services.list[serviceKey].slug}`
      );
    }
  }
  return { paths, fallback: false };
}

export const getStaticProps = ({ params }) => {
  const { language, slug } = params;
  return {
    props: {
      language,
      slug,
      data: { ...LANGUAGE_DATA[language].servicesData[slug] },
    },
  };
};
