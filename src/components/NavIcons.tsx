"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModal from "./CartModal";

function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = true;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      if (isCartOpen) setIsCartOpen((prev) => !prev);
      setIsProfileOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        onClick={handleProfile}
        src="/profile.png"
        width="22"
        height="22"
        alt="Profile Logo"
        className="cursor-pointer"
      />
      {isProfileOpen && (
        <div className="absolute z-50 p-4 rounded-md top-12 bg-white left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link href="/" onClick={() => setIsProfileOpen(false)}>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        width="22"
        height="22"
        alt="Notification Logo"
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          width="22"
          height="22"
          alt="Cart Logo"
          className="cursor-pointer"
          onClick={() => {
            if (isProfileOpen) setIsProfileOpen((prev) => !prev);
            setIsCartOpen((prev) => !prev);
          }}
        />
        <div className="absolute flex flex-row items-center justify-center -top-4 -right-4 h-6 bg-lama rounded-full text-white text-sm px-2">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}

export default NavIcons;
