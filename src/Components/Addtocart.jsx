import { ChevronRight } from "lucide-react";
import { useCartStore } from "../store/DataStore";
import { Trash2 } from "lucide-react";


export default function Addtocart() {
  const { cart, increase, decrease, removeFromCart } = useCartStore();

  // subtotal calculate
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = subtotal * 0.2; // 20% discount
  const delivery = cart.length > 0 ? 15 : 0; // agar cart empty hai to delivery = 0
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

      <div className="max-w-full mx-2 sm:mx-10 my-10 flex flex-col md:flex-row gap-6">
        {/* Left Side (Cart Items) */}
        <div className="flex-2 sm:border sm:border-gray-300 p-1 sm:p-6 rounded-lg w-full md:w-2/3">
          <h2 className="text-3xl font-extrabold mb-6">YOUR CART</h2>

          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex relative items-center justify-between border border-gray-300 p-4 mb-4 rounded-lg"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-20 h-auto mr-4"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-bold">{item.title}</h4>

                  <p className="text-sm text-gray-600">
                    Size: {item.size || "Default"}
                  </p>
                  <p className="text-sm text-gray-600">
                    Color: {item.color || "Default"}
                  </p>
                  <p className="text-lg font-bold mt-1">${item.price}</p>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full gap-3">
                  <span
                    onClick={() => decrease(item.id)}
                    className="text-lg cursor-pointer"
                  >
                    -
                  </span>
                  <span className="text-lg">{item.qty}</span>
                  <span
                    onClick={() => increase(item.id)}
                    className="text-lg cursor-pointer"
                  >
                    +
                  </span>
                </div>
                {/* Remove button */}
                <button
                  onClick={() => removeFromCart(item.id)} >
                  <Trash2 className="w-5 h-5 absolute top-4 right-12 text-red-500 hover:text-red-700" />
                </button>
              </div>
            ))
          )}
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
