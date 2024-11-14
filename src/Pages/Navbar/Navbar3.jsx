import { useContext } from "react";
import { CiShop, CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../../Root";
import { getStrdCart } from "../../utilities/functions";

const Navbar3 = () => {
  const { cartItems } = useContext(CartContext);
  const { data } = getStrdCart("grain-login");
  return (
    <div className="bg-white fixed bottom-0 w-full z-40 p-3 lg:hidden xl:hidden 2xl:hidden">
      <div className="flex items-center justify-around  cursor-pointer">
        <Link to="/allCategory" className="text-xs text-[#4f3326] hover:text-[#ad6a4d] font-bold">
          <CiShop className="text-2xl  cursor-pointer" />
          Shop
        </Link>
        {data?.full_name ? (
          <>
            <Link
              to="/cart"
              className="relative text-xs font-bold text-[#4f3326] hover:text-[#ad6a4d] cursor-pointer"
            >
              <MdOutlineShoppingBag className="text-2xl" />
              Cart
              <div className="absolute bg-[#823400] rounded-full p-1 h-5 flex items-center justify-center -top-2 left-3">
                <p className="text-white">{cartItems}</p>
              </div>
            </Link>
          </>
        ) : null}
        {!data?.full_name ? (
          <Link
            to="/login"
            className="text-xs font-bold flex text-[#4f3326] hover:text-[#ad6a4d] flex-col items-center cursor-pointer"
          >
            <CiUser className="text-2xl" />
            My Account
          </Link>
        ) : (
          <Link
            data-tip="Profile"
            className="lg:tooltip lg:tooltip-bottom hover:text-[#f96331]"
            to="/profile"
          >
            <CiUser className="text-2xl" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar3;
