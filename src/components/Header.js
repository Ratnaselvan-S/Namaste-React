import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import { useSelector } from "react-redux";
import UserContest from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedinuser } = useContext(UserContest);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" flex justify-between bg-purple-100 items-center mb-4">
      <div className="w-32">
        <img
          src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
          alt="App Logo"
          className="w-[100%]"
        />
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link
              to={"/"}
              className="hover:border border-red-600 hover:px-3 hover:py-3"
            >
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link
              to={"/about"}
              className="hover:border border-red-600 hover:px-3 hover:py-3"
            >
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link
              to={"/contact"}
              className="hover:border border-red-600 hover:px-3 hover:py-3"
            >
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link
              className="hover:border border-red-600 hover:px-3 hover:py-3 "
              to={"/cart"}
            >
              Cart - {cartItems.length} items
            </Link>
          </li>
          <li className="px-4">{loggedinuser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
