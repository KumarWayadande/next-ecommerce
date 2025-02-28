import React from "react";

function CustomizeProducts() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 ring-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-8 h-8 rounded-full ring-gray-300 cursor-pointer relative bg-blue-500"></li>
        <li className="w-8 h-8 rounded-full ring-gray-300 cursor-not-allowed relative bg-green-500">
          <div className="absolute w-10 h-[2px] bg-red-500 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 cursor-not-allowed bg-pink-200 ring-pink-200 text-white rounded-md py-1 px-4 text-smr">
          Small
        </li>
        <li className="ring-1 ring-lama bg-lama text-white rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium 
        </li>
        <li className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm cursor-pointer">
          Large
        </li>
      </ul>
    </div>
  );
}

export default CustomizeProducts;
