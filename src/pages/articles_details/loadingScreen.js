import React, { useState } from "react";
import AnimatedText from "@/components/Animated/AnimatedText";
import DetailLayout from "@/components/DetailLayout";
import Layout from "@/components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";

const bash = {
  install: `npm install react-loading`,
};

const codePag = {
  code: `
import React from "react";
import Lottie from "react-lottie";
import customLoaderAnimation from "@/animations/loader.json";

const LoadingScreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: customLoaderAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <div className="w-32 h-32">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default LoadingScreen;
`,
};

const customLoadingScreen = {
  customCode: `
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <div className="w-64 h-64 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
`,
};

const LoadingScreen = () => {
  const [copied, setCopied] = useState(false);
  const [customCopied, setCustomCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>Raymond Ngobeni | Articles Details</title>
        <meta
          name="description"
          content="Explore Raymond Ngobeni's insightful articles details page covering basic topics in Pagination."
        />
      </Head>
      <main className="flex flex-col items-center justify-center overflow-hidden w-full px-4 md:px-8 lg:px-16 mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!4xl"
          />
          <DetailLayout className="p-2 space-y-4">
            <SectionParagraph
              paragraph={`Loading screens are an essential part of any web application,
              providing visual feedback to users while content is being loaded.
              In this article, we'll explore how to create stunning loading
              screens in React using three different methods. We'll learn
              how to utilize React-Loading, React-Lottie, and build a custom
              loading screen to enhance the user experience.`}
            />

            <SectionHeading text={"Introduction"} />
            <SectionParagraph
              paragraph={`Loading screens serve as indicators to users that content is being fetched or processed,
                preventing frustration from perceived delays.
                By incorporating visually appealing loading screens,
                we can engage users and improve the overall usability of our applications.`}
            />
            <SectionHeading text={"Methods"} />

            <ol className="decimal-list space-y-4">
              <ListSection
                title="React-Loading"
                paragraph={`React-Loading is a simple library that provides customizable loading indicators. 
                Let's start by integrating React-Loading into our React application:`}
                code={bash.install}
                handleCopy={() => handleCopy(bash.install)}
                copied={copied}
              />

              <ListSection
                title="React-Lottie"
                paragraph={`React-Lottie allows us to use Lottie animations in React applications. 
                              Follow these steps to integrate React-Lottie:`}
                code={codePag.code}
                handleCopy={() => handleCopy(codePag.code)}
                copied={copied}
              />

              <ListSection
                title="Custom Loading Screen"
                paragraph={`For a custom loading screen, 
                              we can utilize Tailwind CSS to create a simple loading spinner:`}
                code={customLoadingScreen.customCode}
                handleCopy={() => handleCopy(customLoadingScreen.customCode)}
                copied={copied}
              />
            </ol>

            <span className="mt-4">
              <SectionHeading text={"Conclusion"} />
              <SectionParagraph
                paragraph={`In this article, we've explored three different methods
              for creating stunning loading screens in React. Whether using
              React-Loading, React-Lottie, or building a custom loading screen
              with Tailwind CSS, incorporating visually appealing loading
              screens can greatly enhance the user experience of our React
              applications.`}
              />
            </span>
          </DetailLayout>
        </Layout>
      </main>
    </>
  );
};

const SectionHeading = ({ text }) => {
  return <h2 className="font-semibold text-2xl !text-primary">{text}</h2>;
};

const SectionParagraph = ({ paragraph }) => {
  return <p className="font-medium text-xl">{paragraph}</p>;
};

const ListSection = ({ title, paragraph, code, handleCopy, copied }) => {
  return (
    <li className="font-semibold text-[1.2rem]">
      <SectionParagraph paragraph={title} />
      <SectionParagraph paragraph={paragraph} />
      <CodeBlock code={code} handleCopy={handleCopy} copied={copied} />
    </li>
  );
};

const CodeBlock = ({ code, handleCopy, copied }) => {
  return (
    <motion.pre
      className="flex flex-col text-primary bg-zinc-700 p-2 rounded-md !w-auto"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <span className="flex justify-end">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleCopy}
          className="bg-zinc-700 text-zinc-500 px-2 py-1 rounded-md hover:bg-zinc-600"
        >
          {copied ? "Copied" : "Copy"}
        </motion.button>
      </span>
      {code}
    </motion.pre>
  );
};

export default LoadingScreen;
