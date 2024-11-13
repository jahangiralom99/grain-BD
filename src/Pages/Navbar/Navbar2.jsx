import { useContext, useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineMenu, MdOutlineShoppingBag } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CartContext } from "../../Root";
import { getStrdCart } from "../../utilities/functions";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar if click is outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  const { cartItems } = useContext(CartContext);
  const { data } = getStrdCart("grain-login");

  const links = (
    <>
      <Link to="/">HOME</Link>
      <li>MENU</li>
      <li>CAKE REQUEST</li>
      <li>ADDONS</li>
      <li>PROMOTION</li>
      <li>LOCATION</li>
      <li>CONTACT US</li>
      <li>ABOUT US</li>
    </>
  );
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex ${
        isSticky
          ? "fixed top-0  z-10  px-3 md:px-6 lg:px-12 xl:px-14 shadow-2xl  w-full "
          : ""
      } w-full bg-white z-40 items-center justify-between mx-auto px-4 p-1`}
    >
      <div onClick={() => setOpen(!open)} className="lg:hidden">
        <div className="flex items-center cursor-pointer">
          <MdOutlineMenu className="text-3xl" />
          MENU
        </div>
      </div>
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-transform duration-500 ease-in-out transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } w-56`}
      >
        <div
          className="absolute right-0 top-0 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <h1 className=" bg-slate-300 p-1 rounded-full">
            <IoMdClose className="text-2xl" />
          </h1>
        </div>
        <ul className="p-4 flex flex-col gap-3">
          <div className=" relative  mt-3">
            <div className=" py-3">
              <input
                className="w-full border-b-2 outline-none font-semibold rounded mx-auto py-1 px-1"
                type="text"
                name=""
                id=""
                placeholder="Search for products"
              />
            </div>
            <div className="absolute top-5 right-5">
              <CiSearch className="text-2xl " />
            </div>
          </div>

          <li onClick={() => setOpen(false)}>{links}</li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/">
          <img
            className="w-48 p-3"
            src="https://i.ibb.co/t8pDQBv/grain-logo2.png"
            alt=""
          />
        </Link>
        <div className="hidden lg:block">
          <ul className="flex gap-4 relative group cursor-pointer flex-wrap text-[16px] font-semibold">
            {links}
          </ul>
        </div>
      </div>
      {data?.full_name ? (
        <>
          <div className={"hidden lg:block"}>
            <div className="flex items-center gap-2">
              <Link to="/cart">
                <LuShoppingCart className="text-3xl text-gray-500" />
              </Link>{" "}
              |
              <div className="flex items-center text-2xl font-bold">
                {cartItems}{" "}
                <TbCurrencyTaka className="text-3xl text-gray-500" />
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <Link to="/cart" className="relative">
              <MdOutlineShoppingBag className="text-2xl" />
              <div className="absolute bg-[#823400] rounded-full p-1 h-5 flex items-center justify-center -top-2 left-3">
                <p className="text-white">{cartItems}</p>
              </div>
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Navbar2;
