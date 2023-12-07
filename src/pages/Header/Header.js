import React from "react";

const Header = () => {
  return (
    <div className="">
      <section className="flex flex-col items-center justify-center h-screen text-center px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Hello, I'm a Software Developer
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Building digital solutions for your business
        </p>
      </section>
      <div></div>
      <div></div>
    </div>
  );
};

export default Header;
