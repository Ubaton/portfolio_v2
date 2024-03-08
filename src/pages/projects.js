import AnimatedText from "@/components/Animated/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/icons/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project100 from "../../public/images/projects/SILOTU-Consulting.png";
import Project200 from "../../public/images/projects/CMG_QRcodeG2.png";
import Project300 from "../../public/images/projects/Login.png";
import Project400 from "../../public/images/projects/CMG-Portfolio.png";
import Project500 from "../../public/images/projects/Business Card Generator.png";
import Project600 from "../../public/images/projects/Job Search.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/Animated/TransitionEffect";

const FramerIamge = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="flex items-center justify-between w-full rounded-2xl  border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:roonded-2xl xs:rounded-br-3xl xs:p-4">
      <div className=" absolute rounded-br-3xl rounded-[2rem] top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerIamge
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex items-center mt-2">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon className={"dark:text-light"} />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark hover:bg-light text-light hover:text-dark border-2 border-dark dark:border-2 dark:border-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
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
    <article className="flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 xs:p-4 relative">
      <div className=" absolute rounded-br-3xl rounded-[2rem] top-0 -right-3 -z-10 w-[101%] h-[103%] md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] bg-dark dark:bg-light" />
      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerIamge
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="text-dark dark:text-light dark:hover:text-primaryDark hover:text-primary"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="flex items-center justify-between w-full mt-2">
          <Link
            href={link}
            target={"_blank"}
            className="text-lg dark:text-light hover:text-primary dark:hover:text-primaryDark font-semibold md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target={"_blank"} className="w-8 md:w-6">
            <GithubIcon className={"dark:text-light"} />
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
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className={"mb-16 lg:!text-7xl sm:!text-6xl xs:!4xl"}
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"SILOTU Consulting SAP Security"}
                img={Project100}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency.`}
                link={"http://www.silotuconsulting.co.za/"}
                github={"https://github.com/Ubaton"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"SAAS QR Code Generator"}
                img={Project200}
                summary={`Introducing our dynamic SAAS QR Code Generator, alongside an Image Compressor, File Converter, and Video Compressor. Streamline your digital tasks with ease, optimizing images, converting files, and compressing videos for seamless sharing and enhanced performance. Simplify your workflow and boost productivity today.`}
                link={"https://qrcode-generator-cmg.netlify.app/"}
                github={"https://github.com/Ubaton/QRCode"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"CMG Portfolio Web Site"}
                img={Project400}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency.`}
                link={"https://creativemg.netlify.app/"}
                github={"https://github.com/Ubaton/creativemgportfolio"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"CRUD Full Stack Web Application"}
                img={Project300}
                summary={`Discover our cutting-edge CRUD App, leveraging Next.js, Tailwind CSS, and React Router.
                          With seamless RestFul API integration and MongoDB backend, it efficiently captures Residetail details. 
                          From local emergencies to national support, it ensures smooth operations and facilitates online package deliveries. 
                          Join us in revolutionizing data management and emergency response. Experience excellence with our innovative solution.`}
                link={"/"}
                github={"https://github.com/Ubaton"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Jobshearch: Full-stack Mobile app"}
                img={Project600}
                summary={`Introducing our mobile app for real-time job applications. 
                          Built with React Native and custom CSS, it offers a seamless UI/UX experience. 
                          Powered by the Rapid API, our backend ensures swift communication between users and employers. 
                          Experience the future of job hunting today.`}
                link={"https://github.com/Ubaton/jobshearch"}
                github={"https://github.com/Ubaton/jobshearch"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Business Card Generator"}
                img={Project500}
                summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency.`}
                link={"/"}
                github={"https://github.com/Ubaton"}
                type={"Featured Project"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
