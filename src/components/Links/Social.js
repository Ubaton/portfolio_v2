import Link from "next/link";
import React from "react";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";

const Social = () => {
  return (
    <div className="fixed right-4 bottom-4">
      <div className="flex flex-row items-center space-x-2">
        <Link href="">
          <LuGithub />
        </Link>

        <Link href="">
          <FaXTwitter />
        </Link>

        <Link href="">
          <LuLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Social;
