import { CiUser } from "react-icons/ci";
import { TiArrowShuffle } from "react-icons/ti";

const Navbar1 = () => {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
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
          </div> |
          <CiUser className="text-2xl " /> |
          <TiArrowShuffle className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
