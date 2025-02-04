import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";

function ListPage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="compaign hidden bg-pink-50 sm:h-60 md:h-80 px-4 sm:flex justify-between h-80">
        <div className="w-2/3 flex flex-col justify-center items-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off <br /> on selected products.
          </h1>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" fill alt="bg" />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCT LIST */}
      <ProductList />
    </div>
  );
}

export default ListPage;
