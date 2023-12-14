"use client";

import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="fixed right-4 top-4">
        <div className="flex flex-row items-center space-x-2">
          <div className="border-container">
            <div className="border-line"></div>

            <style jsx>{`
              .border-container {
                overflow: hidden;
              }

              .border-line {
                width: 28rem;
                height: 2px;
                background-color: #fff;
                animation: slideLeftToRight 6s linear infinite;
              }

              @keyframes slideLeftToRight {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(28rem);
                }
              }
            `}</style>
          </div>
          <Link href="/profile">
            <div className="block text-sm">
              <span className="letter">P</span>
              <span className="letter">R</span>
              <span className="letter">O</span>
              <span className="letter">F</span>
              <span className="letter">I</span>
              <span className="letter">L</span>
              <span className="letter">E</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
