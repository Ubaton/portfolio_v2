import React from "react";
import Layout from "../Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light">
        <Layout className="flex items-center justify-between py-8 ">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
          <div className="flex items-center">
            Build with{" "}
            <span className="text-primary text-2xl px-1">&#9825;</span>
            by&nbsp;
            <Link href="/Raymond" target={"_blank"} className="font-bold">
              Raymond Ngobeni
            </Link>
          </div>
          <Link
            href="/Hello"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            Say Hello
          </Link>
        </Layout>
      </footer>
    </div>
  );
};

export default Footer;
