import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Profiler from "../../public/images/profile/Statue.png";
import AnimatedText from "@/components/Animated/AnimatedText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Self-taught Software Developer from South Africa with 4 years of experience."
        />
        <meta name="author" content="Raymond Ngobeni" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex justify-between items-center w-full">
            <div className="w-1/2">
              <Image
                src={Profiler}
                alt="Raymond Ngobeni"
                width={500}
                height={500}
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
