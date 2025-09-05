import short1 from "../images/short1.png";
import short2 from "../images/short2.png";
import short3 from "../images/short3.png";
import { ChevronRight } from "lucide-react";
import { create } from "zustand";

const prices = {
  item1: 145,
  item2: 180,
  item3: 240,
};

const useCartStore = create((set) => ({
  items: {
    item1: 1,
    item2: 1,
    item3: 1,
  },
  increase: (key) =>
    set((s) => ({
      items: { ...s.items, [key]: Math.min(10, s.items[key] + 1) },
    })),
  decrease: (key) =>
    set((s) => ({
      items: { ...s.items, [key]: Math.max(1, s.items[key] - 1) },
    })),
}));

export default function Addtocart() {
  const { items, increase, decrease } = useCartStore();

  // subtotal calculate hoga 
  const subtotal =
    items.item1 * prices.item1 +
    items.item2 * prices.item2 +
    items.item3 * prices.item3;

  const discount = subtotal * 0.2; // 20% discount
  const delivery = 15;
  const total = subtotal - discount + delivery;

  return (
    <>
      <div className="px-10 text-gray-300">
        <hr />
      </div>
      <nav className="flex pl-14 items-center space-x-2 text-sm text-gray-600 mt-7">
        <button className="hover:text-gray-900 transition-colors">Home</button>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">Cart</span>
      </nav>

      <div className="max-w-full mx-2 sm:mx-10  my-10 flex flex-col md:flex-row gap-6">
        {/* Left Side (Cart Items) */}
        <div className="flex-2 sm:border sm:border-gray-300 p-1 sm:p-6 rounded-lg w-full md:w-2/3">
          <h2 className="text-3xl font-extrabold mb-6">YOUR CART</h2>

          {/* Item 1 */}
          <div className="flex items-center justify-between border border-gray-300 p-4 mb-4 rounded-lg">
            <img src={short1} alt="Gradient Graphic T-shirt" className="w-20 h-auto mr-4" />
            <div className="flex-1">
              <h4 className="text-lg font-bold">Gradient Graphic T-shirt</h4>
              <p className="text-sm text-gray-600">Size: Large</p>
              <p className="text-sm text-gray-600">Color: White</p>
              <p className="text-lg font-bold mt-1">${prices.item1}</p>
            </div>
            <div className="flex items-center bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 rounded-full gap-3 cursor-pointer">
              <span onClick={() => decrease("item1")} className="text-lg">-</span>
              <span className="text-lg">{items.item1}</span>
              <span onClick={() => increase("item1")} className="text-lg">+</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between border border-gray-300 p-4 mb-4 rounded-lg">
            <img src={short2} alt="Checkered Shirt" className="w-20 h-auto mr-4" />
            <div className="flex-1">
              <h4 className="text-lg font-bold">Checkered Shirt</h4>
              <p className="text-sm text-gray-600">Size: Medium</p>
              <p className="text-sm text-gray-600">Color: Red</p>
              <p className="text-lg font-bold mt-1">${prices.item2}</p>
            </div>
            <div className="flex items-center bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 rounded-full gap-3 cursor-pointer">
              <span onClick={() => decrease("item2")} className="text-lg">-</span>
              <span className="text-lg">{items.item2}</span>
              <span onClick={() => increase("item2")} className="text-lg">+</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between border border-gray-300 p-4 rounded-lg">
            <img src={short3} alt="Skinny Fit Jeans" className="w-20 h-auto mr-4" />
            <div className="flex-1">
              <h4 className="text-lg font-bold">Skinny Fit Jeans</h4>
              <p className="text-sm text-gray-600">Size: Large</p>
              <p className="text-sm text-gray-600">Color: Blue</p>
              <p className="text-lg font-bold mt-1">${prices.item3}</p>
            </div>
            <div className="flex items-center bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 rounded-full gap-3 cursor-pointer">
              <span onClick={() => decrease("item3")} className="text-lg">-</span>
              <span className="text-lg">{items.item3}</span>
              <span onClick={() => increase("item3")} className="text-lg">+</span>
            </div>
          </div>
        </div>

        {/* Right Side (Order Summary) */}
        <div className="flex-1 border border-gray-300 p-6 rounded-lg w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

          <div className="flex justify-between mb-3 text-base">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between mb-3 text-base text-red-500">
            <span>Discount (-20%)</span>
            <span>-${discount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-3 text-base">
            <span>Delivery Fee</span>
            <span>${delivery}</span>
          </div>

          <div className="flex justify-between mb-6 font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 border w-full sm:text-xs text-sm lg:text-sm border-gray-300 rounded-full px-1 lg:px-3 py-2 focus:outline-none"
            />
            <button className="bg-black text-white px-5 py-2 rounded-full ml-2">
              Apply
            </button>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-full font-semibold">
            Go to Checkout →
          </button>
        </div>
      </div>
    </>
  );
}
