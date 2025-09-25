import { Link } from "react-router-dom";
import Buttonss from "./Buttonss";

const MobileMenu = ({ toggleMenu, toggleProfile, handleLogout }) => (
  <div className="fixed top-15 right-0 w-25 bg-white/80 backdrop-blur-lg shadow-md px-4 py-4 space-y-3 z-40 rounded-lg">
    <Link className="block font-medium" onClick={toggleProfile}>
      Profile
    </Link>
    <Link to="/" className="block font-medium" onClick={toggleMenu}>
      Home
    </Link>
    <Link to="/menu" className="block font-medium" onClick={toggleMenu}>
      Menu
    </Link>
    <Link to="/about" className="block font-medium" onClick={toggleMenu}>
      About
    </Link>
    <Link to="/contact" className="block font-medium" onClick={toggleMenu}>
      Contact
    </Link>
    <Link to="/reviews" className="block font-medium" onClick={toggleMenu}>
      Reviews
    </Link>
    <Buttonss onClick={handleLogout}>Logout</Buttonss>
  </div>
);

export default MobileMenu;
