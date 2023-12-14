import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <div>
      <div className="fixed left-4 bottom-4">
        <div className="flex flex-row items-center space-x-2">
          <Link href="/work">
            <div className="block text-sm">
              <span>W</span>
              <span>O</span>
              <span>R</span>
              <span>K</span>
            </div>
          </Link>
          <div className="border-t-2 w-[28rem] "></div>
        </div>
      </div>
    </div>
  );
};

export default Work;
