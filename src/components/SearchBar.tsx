"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";
function SearchBar() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex flex-row gap-2 bg-gray-200 p-2 flex-1 rounded-md items-center justify-center"
      onSubmit={handleSearch}
    >
      <input
        name="name"
        type="text"
        className="h-8 bg-transparent flex-1 px-1  outline-none"
        placeholder="Search"
      />
      <button>
        <FaSearch className="text-gray-600" />
      </button>
    </form>
  );
}

export default SearchBar;
