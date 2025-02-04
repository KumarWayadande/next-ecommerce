"use client";
import { useState } from "react";

function Add() {
  const [quantity, setQuantity] = useState(1);

  // TEMPORARY STOCK
  const stock = 4;

  function handleQuantity(type: "d" | "i") {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div
            className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32
          "
          >
            <button
              onClick={() => handleQuantity("i")}
              className="cursor-pointer text-sm"
            >
              +
            </button>
            {quantity}
            <button
              onClick={() => handleQuantity("d")}
              className="cursor-pointer text-sm"
            >
              -
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-400">4 items</span> left <br />{" "}
            Dont miss it!
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:text-white disabled:bg-pink-200 disabled:ring-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Add;
