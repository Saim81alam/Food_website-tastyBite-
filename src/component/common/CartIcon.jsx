import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartIcon = ({ cartCount }) => (
  <Link to="/cart" className="relative">
    <FaShoppingCart
      size={22}
      className="text-gray-700 hover:text-black cursor-pointer"
    />
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
        {cartCount}
      </span>
    )}
  </Link>
);

export default CartIcon;
