import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList() {
  return (
    <div className="px-4 overflow-x-scroll">
      <div className="flex gap-4 md:gap-8">
        <Link href="/list?cat=test">
          <div className="relative bg-slate-100 w-full h-96">
            <Image fill sizes="20vw" alt="Product Category Image" src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;
