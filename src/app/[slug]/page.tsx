"use client";
import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

function SinglePage() {
  return (
    <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, magni
          labore impedit dolore quisquam ipsa incidunt alias asperiores.
          Obcaecati ipsum fugiat doloribus perferendis similique ipsam quaerat
          odio consequuntur, ea tempora?
        </p>
        <div className="bg-gray-100 h-[2px]" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="bg-gray-100 h-[2px]" />
        <CustomizeProducts />
        <Add />
        <div className="bg-gray-100 h-[2px]" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            tenetur minus! Non, vitae. Itaque repellat inventore iusto? Sequi
            quasi quas ipsa et officiis placeat? Corrupti ducimus sint fugit
            dicta optio!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            tenetur minus! Non, vitae. Itaque repellat inventore iusto? Sequi
            quasi quas ipsa et officiis placeat? Corrupti ducimus sint fugit
            dicta optio!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            tenetur minus! Non, vitae. Itaque repellat inventore iusto? Sequi
            quasi quas ipsa et officiis placeat? Corrupti ducimus sint fugit
            dicta optio!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
