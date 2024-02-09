import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className}`}>
      {title}
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />

        <CustomLink href="/about" title="About" className="mr-4" />

        <CustomLink href="/projects" title="Projects" className="mr-4" />

        <CustomLink href="/articles" title="Articles" className="mr-4" />
      </nav>

      <nav>
        <Link href="/twitter" alt="" target={"_blank"}>
          twitter
        </Link>
        <Link href="/instrgram" alt="" target={"_blank"}>
          instrgram
        </Link>
        <Link href="/facebook" alt="" target={"_blank"}>
          facebook
        </Link>
        <Link href="/github" alt="" target={"_blank"}>
          github
        </Link>
        <Link href="/youtube" alt="" target={"_blank"}>
          youtube
        </Link>
        <Link href="/whatsapp" alt="" target={"_blank"}>
          whatsapp
        </Link>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
