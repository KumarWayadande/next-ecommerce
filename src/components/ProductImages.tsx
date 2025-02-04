import Image from "next/image";

function ProductImages() {
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
          sizes="50vw"
          alt=""
        />
      </div>
      <div></div>
    </div>
  );
}

export default ProductImages;
