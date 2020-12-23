import Blogs from "../../components/Pages/Blogs";
import { LANGUAGE_DATA, PAGE_PATHS, PAGE_SLUGS } from "../../constants/Const";

export default function Index(props) {
  return <Blogs {...props} />;
}

export async function getStaticPaths() {
  const paths = [];
  for (let key in PAGE_PATHS) {
    paths.push(`/${key}/${PAGE_SLUGS.blogs}`);
  }
  return { paths, fallback: false };
}

export const getStaticProps = ({ params }) => {
  const { language } = params;
  return {
    props: {
      language,
      data: { ...LANGUAGE_DATA[language].blogData },
    },
  };
};
