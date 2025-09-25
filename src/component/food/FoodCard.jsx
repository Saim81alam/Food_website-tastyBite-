import { IoStarOutline } from "react-icons/io5";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Butts from "../common/Buttonss";

export default function FoodCard({ item }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div className="relative rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer">
      {/* Image section */}
      <div className="relative h-36 w-full">
        <Link to={`/item/${item.id}`}>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
          <IoStarOutline className="w-3.5 h-3.5 fill-white" />
          {item.rating}
        </div>
      </div>

      <div className="p-3 text-sm space-y-1 flex-grow">
        <Link to={`/item/${item.id}`}>
          <h3 className="font-semibold text-gray-900 hover:underline">
            {item.name}
          </h3>
        </Link>
        <p className="text-gray-600">{item.price}</p>

        <div className="pt-1">
          <span className="inline-block text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
            Flat 10% off
          </span>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="p-3 pt-0 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <Butts onClick={() => console.log("Buying...")} variant="outline">
          Buy Now
        </Butts>
        <Butts onClick={handleAddToCart}>Add to Cart</Butts>
      </div>
    </div>
  );
}
