import Profile from "@/components/Links/Profile";
import { useRouter } from "next/navigation";

const WorkPage = ({ vercelData, githubData }) => {
  // Your component code here, using vercelData and githubData
  // You can display the project details or perform any other actions.

  return (
    <div>
      <Profile />
    </div>
  );
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

export default WorkPage;
