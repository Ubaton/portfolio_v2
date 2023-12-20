import Profile from "@/components/Links/Profile";
import { useRouter } from "next/navigation";

const WorkPage = () => {
  return (
    <>
      <div className="bg-zinc-500/30 backdrop-blur-sm">
        <Profile />
      </div>
      <div className="min-h-screen overflow-hidden">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center pt-12">My Work</h1>
          <div className="flex flex-col p-4 space-y-4">
            <di className="flex flex-row">
              <div className="w-[20rem] h-[22rem] bg-zinc-500 rounded-l-xl"></div>
              <div className="w-[42rem] h-[22rem] bg-zinc-500 rounded-r-xl"></div>
            </di>
            <di className="flex flex-row">
              <div className="w-[42rem] h-[22rem] bg-zinc-500 rounded-l-xl"></div>
              <div className="w-[20rem] h-[22rem] bg-zinc-500 rounded-r-xl"></div>
            </di>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPage;
