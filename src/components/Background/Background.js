import Image from "next/image";
import React from "react";
import Statue from "../../../public/images/Statue.png";
import Header from "@/pages/Header/Header";
import Name from "../Text/Name";

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
      >
        <div>
          <Name />
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Background;
