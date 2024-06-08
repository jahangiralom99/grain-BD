import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineMenu, MdOutlineShoppingBag } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <li>HOME</li>
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
        className={`h-[100vh] fixed  bg-white z-50  ${
          open
            ? "left-0 top-0 h-screen w-56 transition duration-700"
            : "-left-80"
        }`}
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
          {links}
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
      <div className="hidden lg:block">
        <div className="flex items-center gap-2">

          <Link to='/cart'>
          <LuShoppingCart className="text-3xl text-gray-500" />
          </Link> |
          <div className="flex items-center text-2xl font-bold">
            0 <TbCurrencyTaka className="text-3xl text-gray-500" />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="relative">
          <MdOutlineShoppingBag className="text-2xl" />
          <div className="absolute bg-[#823400] rounded-full p-1 h-5 flex items-center justify-center -top-2 left-3">
            <p className="text-white">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
