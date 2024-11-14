import { CiUser } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { TiArrowShuffle } from "react-icons/ti";
import { Link } from "react-router-dom";
import { getStrdCart } from "../../utilities/functions";
import { FaUserPlus } from "react-icons/fa";

const Navbar1 = () => {
  const { data } = getStrdCart("grain-login");

  return (
    <div className="max-w-screen-xl mx-auto px-4 border-b-2 hidden lg:block">
      <div className="flex justify-end  p-3  ">
        <div className="flex gap-3 items-center">
          <div className="relative">
            <input
              id="id-s03"
              type="search"
              name="id-s03"
              placeholder="Search here"
              aria-label="Search content"
              className="relative h-10 w-full rounded-full border border-slate-200 px-4 "
            />
            <div className="absolute right-0 top-0 h-10 w-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="  cursor-pointer stroke-white p-1 bg-[#4f3326] rounded-r-full peer-disabled:cursor-not-allowed"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                aria-label="Search icon"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>{" "}
          |
          {data?.full_name ? (
            <div className="flex gap-4 items-center justify-center">
              <Link
                data-tip="Profile"
                className="lg:tooltip lg:tooltip-bottom hover:text-[#f96331]"
                to="/profile"
              >
                <CiUser className="text-2xl" />
              </Link>{" "}
              |
              <button
                // onClick={handleLogOut}
                data-tip="logout"
                className="lg:tooltip lg:tooltip-bottom"
              >
                <MdLogout className="text-2xl hover:text-[#f96331]" />
              </button>
            </div>
          ) : (
            <Link to="/login">
              <FaUserPlus className="text-2xl hover:text-[#f96331]" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
