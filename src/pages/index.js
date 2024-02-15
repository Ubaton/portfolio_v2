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
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex justify-between items-center w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={Profiler}
                priority
                sizes="(max-width: 768) 100vw, (max-width: 1200px) 50vw, 50vw "
                alt="Raymond Ngobeni"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left pb-1 xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 md:p-2 md:px-4 md:text-base rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:mrrngobeni6@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light p-2.5 px-6 md:p-2 md:px-4 md:text-base rounded-lg border-2 border-solid border-dark dark:border-light hover:border-dark hover:bg-dark dark:hover:bg-light hover:text-light dark:hover:text-dark"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
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
