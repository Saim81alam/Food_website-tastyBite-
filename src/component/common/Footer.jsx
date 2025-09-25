import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f8] py-12 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <div className="text-black text-3xl font-bold flex items-center gap-2">
            <img
              src="../LOGO.png"
              alt="Logo"
              className="w-12 h-12 object-cover"
            />
            TastyBite
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Team</li>
            <li>TastyBite One</li>
            <li>TastyBite Dineout</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact us</h4>
          <ul className="space-y-1 text-sm">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Available in:</h4>
          <ul className="space-y-1 text-sm">
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Hyderabad</li>
            <li>Bangalore</li>
            <li>Pune</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Social Links</h4>
          <div className="flex gap-4 text-xl">
            <FaLinkedin className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaFacebook className="hover:text-black cursor-pointer" />
            <FaPinterest className="hover:text-black cursor-pointer" />
            <FaTwitter className="hover:text-black cursor-pointer" />
          </div>
          <p className="text-sm mt-2">© 2025 TastyBite Limited</p>
        </div>
      </div>
    </footer>
  );
}
