import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Buttonss from "./Buttonss";

const ProfileSidebar = ({ user, firstLetter, handleLogout, toggleProfile }) => {
  return (
    <div className="fixed top-0 right-0 w-64 bg-white/90 backdrop-blur-lg rounded-l-lg shadow-lg z-50 p-4 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold">Profile</h2>
          <button
            onClick={toggleProfile}
            className="text-gray-600 hover:text-black"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-2 mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-black text-3xl font-bold">
            {firstLetter}
          </div>
          <div className="text-lg font-semibold">
            {user?.displayName || "Guest"}
          </div>
        </div>

        <div className="space-y-3 pl-2 text-base font-medium text-gray-700">
          <Link
            to="/myorder"
            onClick={toggleProfile}
            className="block hover:text-black"
          >
            My Order
          </Link>
          <Link
            to="/transaction"
            onClick={toggleProfile}
            className="block hover:text-black"
          >
            Transaction
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <Buttonss variant="outline" onClick={handleLogout} className="w-full">
          LogOut
        </Buttonss>
      </div>
    </div>
  );
};

export default ProfileSidebar;
