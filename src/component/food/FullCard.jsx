import { useParams } from "react-router-dom";
import foodData from "../../JSON/FoodItem.json";
import { useCart } from "../../context/CartContext";
import { IoStarOutline } from "react-icons/io5";
import Butts from "../common/Buttonss";

const FullCard = () => {
  const { id } = useParams();
  const { dispatch } = useCart();

  const flatItems = foodData.flatMap((cat) =>
    cat.types.flatMap((sub) => sub.items)
  );

  const item = flatItems.find((f) => f.id.toString() === id);

  if (!item) return <div>Item not found</div>;

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-25 mb-10 rounded-xl">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={item.image}
          alt={item.name}
          className="w-full md:w-1/2 h-64 object-cover rounded-xl"
        />

        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold">{item.name}</h2>
          <p className="text-lg text-gray-600">₹{item.price}</p>
          <div className="flex items-center gap-1 text-sm text-green-700">
            <IoStarOutline className="w-4 h-4" />
            {item.rating}
          </div>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add full
            description here if needed.
          </p>

          <div className="flex gap-4">
            <Butts onClick={() => console.log("Buying...")}>Buy Now</Butts>
            <Butts variant="outline" onClick={handleAddToCart}>
              Add to Cart
            </Butts>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCard;
