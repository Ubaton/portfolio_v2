import React from "react";
import Logo from "../../../public/images/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Name = () => {
  return (
    <div className="fixed left-4 top-4">
      <span>
        <Link href="/">
          <p className="text-[0.60rem] text-zinc-500">Raymond</p>
          <Image src={Logo} width={40} />
          <p className="text-[0.60rem] text-zinc-500">Ngobeni</p>
        </Link>
      </span>
    </div>
  );
};

export default Name;
