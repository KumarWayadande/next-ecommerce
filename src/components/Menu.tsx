"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <CiMenuFries
        className="h-9 w-9 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="md:hidden absolute top-20 left-0 bg-black text-white w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
