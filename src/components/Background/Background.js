import Image from "next/image";
import React from "react";
import Statue from "../../../public/images/Statue.png";
import Header from "@/pages/Header/Header";
import Name from "../Links/Name";
import Profile from "../Links/Profile";
import Work from "../Links/Work";
import Social from "../Links/Social";

const Background = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Statue.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        alt="Statue"
      >
        <div>
          <Name />
          <Profile />
          <Work />
          <Header />
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Background;
