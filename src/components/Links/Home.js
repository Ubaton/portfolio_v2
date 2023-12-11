"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div className="fixed right-4 top-4">
      <div className="flex flex-row items-center gap-3">
        <div className="border-t-2 w-[28rem] " />
        <button
          className="bg-zinc-50 px-2 text-zinc-950 rounded-md"
          onClick={handleHome}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Home;
