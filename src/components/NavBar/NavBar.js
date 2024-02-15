import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Logo from "./Logo";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../icons/icons";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <div className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </div>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button href={href} onClick={handleClick}>
      <div
        className={`${className} relative group text-light dark:text-dark my-2`}
      >
        {title}
        <span
          className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </div>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full dark:text-light px-32 py-8 font-medium flex items-center justify-between z-10 lg:px-16 md:px-12 sm:px-8 relative">
      <button
        onClick={handleClick}
        className="hidden lg:flex flex-col justify-center items-center"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="flex justify-between items-center w-full lg:hidden">
        <nav className="flex items-center justify-center">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/_GoldManRay"
            alt=""
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href="https://github.com/Ubaton"
            alt=""
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/raymond-ngobeni-b7ab26163/"
            alt=""
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col justify-center items-center w-[85%] min-w-[70vw] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/60 dark:bg-light/20 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              toggle={handleClick}
              href="/"
              title="Home"
              className=""
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/about"
              title="About"
              className=""
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/projects"
              title="Projects"
              className=""
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/articles"
              title="Articles"
              className=""
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com/_GoldManRay"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>

            <motion.a
              href="https://github.com/Ubaton"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/raymond-ngobeni-b7ab26163/"
              alt=""
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-1/2 transform -translate-x-1/2 top-2">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
