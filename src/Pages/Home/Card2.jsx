/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CiSearch, CiStar } from "react-icons/ci";
import { TiArrowShuffle } from "react-icons/ti";
import { Link } from "react-router-dom";
import { base_url } from "../../utilities/dataPanel";
import { addToCart, getStrdCart } from "../../utilities/functions";
import { toast } from "react-toastify";
import { useContext } from "react";
import { CartContext } from "../../Root";

const Card2 = (props) => {
  const { grpData, webItmData, itemData } = props;
  const { data } = getStrdCart("grain-login");
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = (item) => {
    const newItem = {
      image: item?.image,
      item_name: item?.item_name,
      item_code: item?.item_code,
      standard_rate: item?.standard_rate,
      qty: 1,
      uom: item?.stock_uom,
    };
    addToCart(newItem);

    toast("Cart Added");
    setCartItems(cartItems + 1);
  };

  return (
    <div className="mt-8 max-w-screen-2xl mx-auto gap-4 px-4 grid md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-3 grid-cols-1">
      <div>
        <h1 className="text-2xl font-semibold text-center">
          {grpData?.data[2].name} Dessert Item
        </h1>
        <div className="mt-5 flex flex-col gap-4 items-center justify-center">
          {itemData?.data
            ?.filter(
              (item) =>
                item?.item_group === grpData?.data[2].name ||
                item.published === 0
            )
            ?.slice(0, 3)
            ?.map((item, idx) => (
              <div key={idx}>
                <div className="flex flex-col items-center gap-3 relative group">
                  <Link to={`/product/${item?.name}`}>
                    <img
                      className="rounded w-full"
                      src={`${base_url + item?.image}`}
                      alt=""
                    />
                    <div className="bg-white hidden group-hover:block rounded absolute top-3 left-3 p-2">
                      <TiArrowShuffle className="text-2xl cursor-pointer" />
                      <div className="mt-3 cursor-pointer">
                        <CiSearch className="text-2xl" />
                      </div>
                    </div>
                  </Link>
                  <div className="space-y-2 text-center">
                    <Link>
                      <h2 className="text-xl font-semibold">
                        {item.item_name}
                      </h2>
                      <p className="text-gray-400">Snacks</p>
                      <p className="text-gray-400">
                        <span className="font-bold text-black">SKU:</span>{" "}
                        {item.SKU}
                      </p>
                    </Link>
                    <div className="flex items-center justify-center">
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                    <h1 className="text-2xl font-semibold">
                      {item?.standard_rate}৳
                    </h1>
                    {data?.user_id ? (
                      <button
                        onClick={() => handleAddToCart(item)}
                        className={`bg-[#dd9221] gap-1 px-6 py-1 rounded text-white whitespace-nowrap`}
                      >
                        Add To Cart
                      </button>
                    ) : (
                      <Link
                        to={`/login`}
                        className={`bg-[#dd9221] gap-1 px-6 py-1 rounded text-white whitespace-nowrap`}
                      >
                        Add To Cart
                      </Link>
                    )}
                  </div>
                </div>
                <button className="py-1 bg-[#4f3326] w-full mt-2 text-white font-extrabold">
                  Ready To Deliver
                </button>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-center">
          {grpData?.data[3].name} Dessert Item
        </h1>
        <div className="mt-5 flex flex-col gap-4 items-center justify-center">
          {itemData?.data
            ?.filter(
              (item) =>
                item?.item_group === grpData?.data[3].name ||
                item.published === 0
            )
            ?.slice(0, 3)
            ?.map((item, idx) => (
              <div key={idx}>
                <div className="flex flex-col items-center gap-3 relative group">
                  <Link to={`/product/${item?.name}`}>
                    <img
                      className="rounded w-full"
                      src={`${base_url + item?.image}`}
                      alt=""
                    />
                    <div className="bg-white hidden group-hover:block rounded absolute top-3 left-3 p-2">
                      <TiArrowShuffle className="text-2xl cursor-pointer" />
                      <div className="mt-3 cursor-pointer">
                        <CiSearch className="text-2xl" />
                      </div>
                    </div>
                  </Link>
                  <div className="space-y-2 text-center">
                    <Link>
                      <h2 className="text-xl font-semibold">
                        {item.item_name}
                      </h2>
                      <p className="text-gray-400">Snacks</p>
                      <p className="text-gray-400">
                        <span className="font-bold text-black">SKU:</span>{" "}
                        {item.SKU}
                      </p>
                    </Link>
                    <div className="flex items-center justify-center">
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                    <h1 className="text-2xl font-semibold">
                      {item?.standard_rate}৳
                    </h1>
                    {data?.user_id ? (
                      <button
                        onClick={() => handleAddToCart(item)}
                        className={`bg-[#dd9221] gap-1 px-6 py-1 rounded text-white whitespace-nowrap`}
                      >
                        Add To Cart
                      </button>
                    ) : (
                      <Link
                        to={`/login`}
                        className={`bg-[#dd9221] gap-1 px-6 py-1 rounded text-white whitespace-nowrap`}
                      >
                        Add To Cart
                      </Link>
                    )}
                  </div>
                </div>
                <button className="py-1 bg-[#4f3326] w-full mt-2 text-white font-extrabold">
                  Ready To Deliver
                </button>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-center">
          {grpData?.data[5].name} Dessert Item
        </h1>
        <div className="mt-5 flex flex-col gap-4 items-center justify-center">
          {itemData?.data
            ?.filter(
              (item) =>
                item?.item_group === grpData?.data[5].name ||
                item.published === 0
            )
            ?.slice(0, 3)
            ?.map((item, idx) => (
              <div key={idx}>
                <div className="flex flex-col items-center gap-3 relative group">
                  <Link to={`/product/${item?.name}`}>
                    <img
                      className="rounded w-full"
                      src={`${base_url + item?.image}`}
                      alt=""
                    />
                    <div className="bg-white hidden group-hover:block rounded absolute top-3 left-3 p-2">
                      <TiArrowShuffle className="text-2xl cursor-pointer" />
                      <div className="mt-3 cursor-pointer">
                        <CiSearch className="text-2xl" />
                      </div>
                    </div>
                  </Link>
                  <div className="space-y-2 text-center">
                    <Link>
                      <h2 className="text-xl font-semibold">
                        {item.item_name}
                      </h2>
                      <p className="text-gray-400">Snacks</p>
                      <p className="text-gray-400">
                        <span className="font-bold text-black">SKU:</span>{" "}
                        {item.SKU}
                      </p>
                    </Link>
                    <div className="flex items-center justify-center">
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>
                    <h1 className="text-2xl font-semibold">
                      {item?.standard_rate}৳
                    </h1>
                    {data?.user_id ? (
                      <button
                        onClick={() => handleAddToCart(item)}
                        className={`bg-[#dd9221] gap-1 px-6 py-1 rounded text-white whitespace-nowrap`}
                      >
                        Add To Cart
                      </button>
                    ) : (
                      <Link
                        to={`/login`}
                        className={`bg-[#dd9221] gap-1 px-6 py-1 rounded text-white whitespace-nowrap`}
                      >
                        Add To Cart
                      </Link>
                    )}
                  </div>
                </div>
                <button className="py-1 bg-[#4f3326] w-full mt-2 text-white font-extrabold">
                  Ready To Deliver
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card2;
