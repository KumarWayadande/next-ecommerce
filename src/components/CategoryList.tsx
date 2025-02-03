import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList() {
  return (
    <div className="px-4 mt-20 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-12">
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="object-cover"
              fill
              sizes="20vw"
              alt="Product Category Image"
              src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Electronics</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="object-cover"
              fill
              sizes="20vw"
              alt="Product Category Image"
              src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Electronics</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="object-cover"
              fill
              sizes="20vw"
              alt="Product Category Image"
              src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Electronics</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="object-cover"
              fill
              sizes="20vw"
              alt="Product Category Image"
              src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Electronics</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="object-cover"
              fill
              sizes="20vw"
              alt="Product Category Image"
              src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Electronics</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="object-cover"
              fill
              sizes="20vw"
              alt="Product Category Image"
              src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Electronics</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              className="object-cover"
              fill
              sizes="20vw"
              alt="Product Category Image"
              src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Electronics</h1>
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;
