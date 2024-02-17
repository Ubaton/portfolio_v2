import React from "react";
import { motion } from "framer-motion";
import Layout from "../Layout";
import Link from "next/link";
import { GithubIcon } from "../icons/icons";

const Footer = () => {
  return (
    <div>
      <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base dark:text-light">
        <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
          <div className="flex items-center lg:py-2">
            Build with{" "}
            <span className="text-primary text-2xl px-1">&#9825;</span>
            by&nbsp;
            <Link href="/Raymond" target={"_blank"} className="font-bold">
              Raymond Ngobeni
            </Link>
          </div>
          <Link
            href="https://github.com/Ubaton"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <GithubIcon className={"w-[2rem] h-[2rem]"} />
            </motion.div>
          </Link>
        </Layout>
      </footer>
    </div>
  );
};

export default Footer;
