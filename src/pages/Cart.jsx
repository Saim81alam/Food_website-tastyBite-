// src/pages/Cart.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Buttonss from "../component/common/Buttonss";

export default function Cart() {
  const {
    cart: { items },
    dispatch,
  } = useCart();

  const total = items.reduce(
    (sum, item) =>
      sum + item.quantity * parseFloat(item.price.replace("\u20B9", "")),
    0
  );

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center">
          <img
            src="./CartIcon.png"
            alt="Hungry emoji"
            className="w-20 mx-auto mb-4"
          />
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
          <div className="relative mt-10 h-56 w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9J1YNiANVx5-j4ZaUM5qTVtRHFPLk1--i7EK-bhEs3tDJ9eO3okTrclxBcGu6z1YYkg&usqp=CAU"
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10  flex items-end justify-center">
              <Link
                to="/"
                className="mb-5 px-6 py-2 bg-black/50 text-white rounded-full font-semibold  transition backdrop-blur-sm"
              >
                Let's Order Something Delicious
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white rounded-xl shadow p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-2 py-1 text-sm bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-2 py-1 text-sm bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6 text-right">
            <p className="text-lg font-semibold">
              Total: <span className="text-green-700">₹{total.toFixed(2)}</span>
            </p>
            <div className="mt-4 space-x-3">
              <Buttonss onClick={handleClearCart} variant="outline">
                Clear Cart
              </Buttonss>
              <Buttonss>Buy Now</Buttonss>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
