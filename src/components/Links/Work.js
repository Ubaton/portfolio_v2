"use client";

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
          <div className="border-container">
            <div className="border-line"></div>

            <style jsx>{`
              .border-container {
                overflow: hidden;
              }

              .border-line {
                width: 28rem;
                height: 2px;
                background-color: #fff; /* Set your desired border color */
                animation: slideRightToLeft 6s linear infinite;
              }

              @keyframes slideRightToLeft {
                0% {
                  transform: translateX(28rem);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
