import { CiShop, CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar3 = () => {
  return (
    <div className="bg-white fixed bottom-0 w-full z-40 p-3 lg:hidden xl:hidden 2xl:hidden">
      <div className="flex items-center justify-around text-[#4f3326] hover:text-[#ad6a4d] cursor-pointer">
        <div className="text-xs font-bold">
          <CiShop className="text-2xl" />
          Shop
        </div>
        <div className="relative text-xs font-bold text-[#4f3326] hover:text-[#ad6a4d] cursor-pointer">
          <MdOutlineShoppingBag className="text-2xl" />
          Cart
          <div className="absolute bg-[#823400] rounded-full p-1 h-5 flex items-center justify-center -top-2 left-3">
            <p className="text-white">0</p>
          </div>
        </div>
        <div className="text-xs font-bold flex text-[#4f3326] hover:text-[#ad6a4d] flex-col items-center cursor-pointer">
          <CiUser className="text-2xl" />
          My Account
        </div>
      </div>
    </div>
  );
};

export default Navbar3;
