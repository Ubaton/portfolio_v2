import { useRouter } from "next/router";
import { getProjectData } from "./slug";

const Work = ({ vercelData, githubData }) => {
  // Your component code here, using vercelData and githubData
  // You can display the project details or perform any other actions.

  return <div>My UI</div>;
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const { vercelData, githubData } = await getProjectData(slug);

  return {
    props: {
      vercelData,
      githubData,
    },
  };
}

export default Work;
