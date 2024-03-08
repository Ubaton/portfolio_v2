import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/Animated/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Hooks from "../../public/images/articles/Mastering React Hooks.jpg";
import Authentication from "../../public/images/articles/User Authentication.jpg";
import Performance from "../../public/images/articles/Enhancing Performance.jpg";
import Rendering from "../../public/images/articles/Rendering.jpg";
import Routing from "../../public/images/articles/Efficient Routing.jpg";
import CustomHooks from "../../public/images/articles/Reusable Custom Hooks.jpg";
import AnimationHooks from "../../public/images/articles/Modular Animation Hooks.jpg";
import DataIntegrity from "../../public/images/articles/Data Integrity.jpg";
import TransitionEffect from "@/components/Animated/TransitionEffect";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  }

  function handleMouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        priority
        sizes="(max-width: 768) 100vw, (max-width: 1200px) 50vw, 50vw "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
      <div className="absolute rounded-br-3xl rounded-[2rem] top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden inline-block rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          priority
          sizes="(max-width: 768) 100vw, (max-width: 1200px) 50vw, 50vw "
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-2 hover:text-primary dark:hover:text-primaryDark xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const Article = ({ title, date, link, img }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Raymond Ngobeni | Articles</title>
        <meta
          name="description"
          content="Explore Raymond Ngobeni's insightful articles covering various topics in web development and technology."
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center overflow-hidden w-full mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In ReactJS From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/articles_details/pagination"
              img={Hooks}
            />
            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
              time="10 min read"
              link="/articles_details/loadingScreen"
              img={Authentication}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Mastering React Hooks: Building a Reusable Custom Hook for State Management"
              date="February 12, 2024"
              link="/"
              img={Hooks}
            />
            <Article
              title="Streamlining User Authentication: A Comprehensive Guide to JWT Integration in React"
              date="February 12, 2024"
              link="/"
              img={Authentication}
            />
            <Article
              title="Enhancing Performance: Implementing Code Splitting in React Applications"
              date="February 12, 2024"
              link="/"
              img={Performance}
            />
            <Article
              title="Building Robust Server-Side Rendering Solutions with React and Node.js"
              date="February 12, 2024"
              link="/"
              img={Rendering}
            />
            <Article
              title="Implementing Efficient Routing Strategies in React Applications"
              date="February 12, 2024"
              link="/"
              img={Routing}
            />
            <Article
              title="Crafting Reusable Custom Hooks for Seamless Internationalization in React"
              date="February 12, 2024"
              link="/"
              img={CustomHooks}
            />
            <Article
              title="Elevating User Experience with Modular Animation Hooks in React"
              date="February 12, 2024"
              link="/"
              img={AnimationHooks}
            />
            <Article
              title="Ensuring Data Integrity: Reusable Form Management with Custom React Hooks"
              date="February 12, 2024"
              link="/"
              img={DataIntegrity}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
