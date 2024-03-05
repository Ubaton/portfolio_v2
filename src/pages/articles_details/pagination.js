import React, { useState } from "react";
import AnimatedText from "@/components/Animated/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";

const codePage = {
  code: `// src/Pagination.js
import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => handleClick(1)} />
      <Pagination.Prev
        onClick={() => handleClick(currentPage > 1 ? currentPage - 1 : 1)}
      />
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        )
      )}
      <Pagination.Next
        onClick={() =>
          handleClick(currentPage < totalPages ? currentPage + 1 : totalPages)
        }
      />
      <Pagination.Last onClick={() => handleClick(totalPages)} />
    </Pagination>
  );
};

export default CustomPagination;
`,
};

const Pagination = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codePage.code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
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
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Build A Custom Pagination Component In ReactJS From Scratch!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!4xl"
          />
          <div className="p-2 space-y-4">
            <p className="text-zinc-400 font-medium text-xl">
              In this article, we&apos;ll walk through the process of building a
              custom pagination component in ReactJS from scratch. Pagination is
              a common feature in web applications that allows users to navigate
              through multiple pages of content, such as articles, search
              results, or product listings.
            </p>
            <SectionHeading text="Prerequisites" />
            <p className="text-zinc-400 font-medium text-xl">
              Before we begin, make sure you have Node.js and npm (Node Package
              Manager) installed on your system. You&apos;ll also need a basic
              understanding of ReactJS and JavaScript.
            </p>
            <SectionHeading text="Setting up the Project" />
            <Instruction code="npx create-react-app pagination-demo" />
            <Instruction code="cd pagination-demo\nnpm install react-bootstrap" />
            <SectionHeading text="Creating the Pagination Component" />
            <CodeBlock
              code={codePage.code}
              handleCopy={handleCopy}
              copied={copied}
            />
            <ComponentDescription />
          </div>
        </Layout>
      </main>
    </>
  );
};

const SectionHeading = ({ text }) => {
  return <h2 className="font-semibold text-zinc-400 text-2xl ">{text}</h2>;
};

const Instruction = ({ code }) => {
  return (
    <>
      <p className="text-zinc-400 font-medium text-md">{code}</p>
      <motion.code
        initial={{ y: 200 }}
        whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
        className="flex flex-col text-primary bg-zinc-700 p-2 rounded-md"
      >
        {code.split("\n").map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </motion.code>
    </>
  );
};

const CodeBlock = ({ code, handleCopy, copied }) => {
  return (
    <motion.pre
      className="flex flex-col text-primary bg-zinc-700 p-2 rounded-md"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <span className="flex justify-end">
        <button
          onClick={handleCopy}
          className="bg-zinc-700 text-zinc-500 px-4 py-2 rounded-md hover:bg-zinc-600"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </span>
      {code}
    </motion.pre>
  );
};

const ComponentDescription = () => {
  return (
    <>
      <p className="text-zinc-400 font-medium text-md">In this component:</p>
      <ul className="list-disc ml-4 text-zinc-500">
        <li className="mb-2">
          We import the Pagination component from react-bootstrap.
        </li>
        <li className="mb-2">
          The CustomPagination component takes three props: currentPage,
          totalPages, and onPageChange.
        </li>
        <li className="mb-2">
          Inside the component, we define a handleClick function to handle
          pagination button clicks.
        </li>
        <li>
          We render pagination buttons using the Pagination.Item component and
          handle their clicks accordingly.
        </li>
      </ul>
    </>
  );
};

export default Pagination;
