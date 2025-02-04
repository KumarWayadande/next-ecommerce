import React from "react";

function Filter() {
  return (
    <div className="flex mt-10 justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="Type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option>Physical</option>
          <option>Digital</option>
        </select>
        <input
          type="text"
          name="min"
          id=""
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          id=""
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />

        <select
          name="Size"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Size</option>
          <option>Physical</option>
          <option>Digital</option>
        </select>

        <select
          name="Color"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Color</option>
          <option>Physical</option>
          <option>Digital</option>
        </select>

        <select
          name="Category"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Category</option>
          <option>Physical</option>
          <option>Digital</option>
        </select>
      </div>
      <div className="">
        <select
          name="Type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Sort By</option>
          <option>Price (low to high)</option>
          <option>Price (high to low)</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>
    </div> 
  );
}

export default Filter;
