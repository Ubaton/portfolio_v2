import AnimatedText from "@/components/Animated/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/icons/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project100 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="flex items-center justify-between w-full rounded-2xl  border border-solid border-dark bg-light shadow-2xl p-12 relative">
      <div className=" absolute rounded-br-3xl rounded-[2rem] top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark" />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="flex flex-col items-start justify-between w-1/2 pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="text-dark hover:text-primary"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="flex items-center mt-2">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark hover:bg-light text-light hover:text-dark border-2 border-dark p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className=" absolute rounded-br-3xl rounded-[2rem] top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark" />
      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="text-dark hover:text-primary"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="flex items-center justify-between w-full mt-2">
          <Link
            href={link}
            target={"_blank"}
            className="text-lg hover:text-primary font-semibold"
          >
            Visit
          </Link>
          <Link href={github} target={"_blank"} className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Raymond Ngobeni | Projects Page</title>
        <meta
          name="description"
          content="Learn more about Raymond Ngobeni, his background, expertise, and achievements. Get insights into his skills, experience, and contributions in the field of technology and web development."
        />
      </Head>
      <main className="flex flex-col items-center justify-center w-full mb-16">
        <Layout className="pt-16">
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className={"mb-16"}
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title={"Crypto Screener Application"}
                img={Project100}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency.`}
                link={"/"}
                github={"/"}
                type={"FeaturedProject"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Crypto Screener Application"}
                img={Project100}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency.`}
                link={"/"}
                github={"/"}
                type={"FeaturedProject"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Crypto Screener Application"}
                img={Project100}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency.`}
                link={"/"}
                github={"/"}
                type={"FeaturedProject"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Crypto Screener Application"}
                img={Project100}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency.`}
                link={"/"}
                github={"/"}
                type={"FeaturedProject"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Crypto Screener Application"}
                img={Project100}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency.`}
                link={"/"}
                github={"/"}
                type={"FeaturedProject"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={"Crypto Screener Application"}
                img={Project100}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency.`}
                link={"/"}
                github={"/"}
                type={"FeaturedProject"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
