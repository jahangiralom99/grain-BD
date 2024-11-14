import { useContext, useEffect, useRef, useState } from "react";
import { CiLogin, CiSearch, CiUser } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { MdLogout, MdOutlineMenu } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Root";
import { clearStoredCart, getStrdCart } from "../../utilities/functions";
import { base_url, fetch_url } from "../../utilities/dataPanel";
import { toast } from "react-toastify";
import LoaderComponent from "../../components/Shared/LoaderComponent";
import { FaUserPlus } from "react-icons/fa";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [loader, setLoader] = useState(false);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const { data } = getStrdCart("grain-login");

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

  // logout info
  const handleLogOut = () => {
    setLoader(true);
    const postBody = {
      erp_url: base_url,
    };
    // console.log(postBody);
    fetch(`${fetch_url}/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          clearStoredCart("grain-login");
          clearStoredCart("proceed");
          //   clearStoredCart("cart");
          clearStoredCart("item-all-data");
          //   setCartItems(cartItems + 1);
          navigate("/login");
          // window.location.reload();
          setLoader(false);
          toast.success("Logout successfully");
        }
      })
      .then((err) => {
        console.log(err);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };

  if (loader) {
    return <LoaderComponent />;
  }

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

          <li className="gap-4" onClick={() => setOpen(false)}>
            {links}
          </li>
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
          <div className="lg:hidden flex items-center justify-center gap-3">
            <Link
              data-tip="Profile"
              className="lg:tooltip lg:tooltip-bottom hover:text-[#f96331]"
              to="/profile"
            >
              <CiUser className="text-2xl" />
            </Link>
            <button
              onClick={handleLogOut}
              data-tip="logout"
              className="lg:tooltip lg:tooltip-bottom"
            >
              <MdLogout className="text-2xl hover:text-[#f96331]" />
            </button>
          </div>
        </>
      ) : (
        <Link to="/login">
          <FaUserPlus className="text-2xl hover:text-[#f96331]" />
        </Link>
      )}
    </div>
  );
};

export default Navbar2;
