import Link from "next/link";
import React from "react";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";

const Social = () => {
  return (
    <div className="fixed right-4 bottom-4">
      <div className="flex flex-row items-center space-x-2">
        <Link
          href="https://github.com/Ubaton"
          target="_blank"
          className="transition-transform transform hover:scale-110 transition-delay-700"
        >
          <LuGithub />
        </Link>

        <Link
          href="https://twitter.com/_GoldManRay"
          target="_blank"
          className="transition-transform transform hover:scale-110 transition-delay-700"
        >
          <FaXTwitter />
        </Link>

        <Link
          href="https://www.linkedin.com/in/raymond-ngobeni-b7ab26163/"
          target="_blank"
          className="transition-transform transform hover:scale-110 transition-delay-700"
        >
          <LuLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Social;
