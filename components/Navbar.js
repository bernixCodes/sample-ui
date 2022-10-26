import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex items-center justify-between pb-4 border-b-gray-500 border-b-2 mb-3">
      <div>
        {/* <h1 className="font-bold text-xl">My List</h1> */}
        {/* <img src="/logo.png" /> */}
        <Link href="/">
          <a>
            <Image src={"/logo.png"} width="40" height="40" alt="" />
          </a>
        </Link>
      </div>
      <div className=" flex gap-10 items-center justify-end">
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
        <Link href={"/postings"}>
          <a>Postings</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
