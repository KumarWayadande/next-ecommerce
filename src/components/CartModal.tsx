import Image from "next/image";

function CartModal() {
  const cartItems = !false;
  return (
    <div className="absolute h-96 overflow-y-scroll p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart is empty</div>
      ) : (
        <>
          <h2 className="">Shopping Cart</h2>
          <div className="flex flex-col gap-8 w-max top-20">
            {/* ITEM */}
            <div className="wrappwer flex gap-3">
              <Image
                className="object-cover rounded-md"
                src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width="72"
                height="96"
                alt="cart-item-photo"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="bg-gray-50 p-1 rounded-sm">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty 2</span>
                  <span className="text-blue-500 cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
            {/* End of an ITEM */}
            {/* ITEM */}
            <div className="wrappwer flex gap-3">
              <Image
                className="object-cover rounded-md"
                src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width="72"
                height="96"
                alt="cart-item-photo"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="bg-gray-50 p-1 rounded-sm">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* End of an ITEM */}
            {/* ITEM */}
            <div className="wrappwer flex gap-3">
              <Image
                className="object-cover rounded-md"
                src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width="72"
                height="96"
                alt="cart-item-photo"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="bg-gray-50 p-1 rounded-sm">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* End of an ITEM */}
            {/* ITEM */}
            <div className="wrappwer flex gap-3">
              <Image
                className="object-cover rounded-md"
                src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width="72"
                height="96"
                alt="cart-item-photo"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="bg-gray-50 p-1 rounded-sm">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* End of an ITEM */}
            {/* ITEM */}
            <div className="wrappwer flex gap-3">
              <Image
                className="object-cover rounded-md"
                src="https://images.pexels.com/photos/30374245/pexels-photo-30374245/free-photo-of-solitary-figure-walking-in-vast-desert-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width="72"
                height="96"
                alt="cart-item-photo"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="bg-gray-50 p-1 rounded-sm">$49</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* End of an ITEM */}
          </div>

          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold my-3 ">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-sm text-gray-500 ">
              Shipping and Taxes calculated at checkout.
            </p>
            <div className="btn-container flex justify-between my-3 text-sm">
              <button className="px-3 py-2 rounded-md border border-gray-400 hover:border-gray-500">
                View Cart
              </button>
              <button className="px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-950 text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartModal;
