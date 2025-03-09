"use client";
import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <div className="sticky top-0 left-0 z-10">
      <nav className=" bg-[#000000d9] text-white h-[70px] p-4 flex justify-center items-center gap-4 text-xl font-semibold space-x-6">
        <Link
          href="/products"
          className="hover:text-cyan-400 transition duration-300 ease-in-out"
        >
          Products
        </Link>
        <Link
          href="/users"
          className="hover:text-cyan-400 transition duration-300 ease-in-out"
        >
          Users
        </Link>
        <Link
          href="/recipes"
          className="hover:text-cyan-400 transition duration-300 ease-in-out"
        >
          Recipes
        </Link>
        <Link
          href="/dashboard"
          className="hover:text-cyan-400 transition duration-300 ease-in-out"
        >
          Dashboard
        </Link>
      </nav>
    </div>
  );
};

export default Header;
