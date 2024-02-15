import React from "react";
import { CircularText } from "../icons/icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:absolute md:right-8 md:left-auto md:top-0 md:bottom-auto sm:right-0">
      <div className="flex items-center justify-center relative w-48 md:w-24 h-auto">
        <CircularText
          className={"fill-dark dark:fill-light animate-spin-slow"}
        />

        <Link
          href="mailto:mrrngobeni6@gamil.com"
          className="flex items-center justify-center md:w-12 md:h-12 md:text-[10px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark hover:bg-light hover:text-dark shadow-md border border-solid border-dark font-semibold w-24 h-24 rounded-full"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
