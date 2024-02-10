import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Profiler from "../../public/images/profile/Statue.png";
import AnimatedText from "@/components/Animated/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/icons/icons";
import HireMe from "@/components/HireMe/HireMe";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

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
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:mrrngobeni6@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark p-2.5 px-6 rounded-lg border-2 border-solid border-gray-500 hover:border-dark hover:bg-dark hover:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image
            src={LightBulb}
            alt="Raymond Ngobeni"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
