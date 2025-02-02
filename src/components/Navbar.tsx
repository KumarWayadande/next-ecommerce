import React from "react";
import NavbarLogo from "../../public/navbar-logo.svg";
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import NavIcons from "../components/NavIcons";
function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile Navbar Start */}
      <div className="h-full md:hidden flex items-center justify-between">
        <Link href="/">
          <Image src={NavbarLogo} width={120} height={100} alt="Navbar Logo" />
        </Link>
        <Menu />
      </div>
      {/* Mobile Navbar End */}

      {/* Desktop Navbar Start */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="left w-1/3 xl:w-1/2 flex flex-row items-center gap-12">
          <Link href="/">
            <Image
              src={NavbarLogo}
              width={120}
              height={100}
              alt="Navbar Logo"
            />
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right w-2/3 xl:w-1/2 flex flex-row items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
          {/* <h1>NavIcons</h1> */}
        </div>
      </div>

      {/* Desktop Navbar End */}
    </div>
  );
}

export default Navbar;
