import Home from "../../components/Pages/Home";
import { LANGUAGE_DATA, PAGE_PATHS } from "../../constants/Const";

export default function Index(props) {
  return <Home {...props} />;
}

export async function getStaticPaths() {
  const paths = [];
  for (let key in PAGE_PATHS) {
    paths.push(`/${key}`);
  }
  return { paths, fallback: false };
}

export const getStaticProps = ({ params }) => {
  const { language } = params;
  return {
    props: {
      language,
      data: { ...LANGUAGE_DATA[language].homeData },
    },
  };
};
