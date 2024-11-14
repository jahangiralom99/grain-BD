/* eslint-disable react/prop-types */
import { CiSearch, CiStar } from "react-icons/ci";
import { TiArrowShuffle } from "react-icons/ti";
import { Link } from "react-router-dom";
import { base_url } from "../../utilities/dataPanel";
import { useContext, useState } from "react";
import { addToCart, getStrdCart } from "../../utilities/functions";
import { toast } from "react-toastify";
import { CartContext } from "../../Root";

const Card = ({ activeGroupId, itemData }) => {
  // const [count, setCount] = useState(1);
  const [counts, setCounts] = useState({});
  const { cartItems, setCartItems } = useContext(CartContext);
  const { data } = getStrdCart("grain-login");

  // console.log(webItmData);

  // console.log(counts);

  // handle add TO card
  const handleAddToCart = (item) => {
    // console.log(item);

    const newItem = {
      image: item?.image,
      item_name: item?.item_name,
      item_code: item?.item_code,
      standard_rate: item?.standard_rate,
      qty: counts[item?.item_name] || 1,
      uom: item?.stock_uom,
    };

    // console.log(newItem);
    addToCart(newItem);

    // re set the value
    setCounts((prevCounts) => ({ ...prevCounts, [item.item_name]: 1 }));

    // let cart = getStrdCart("cart");
    toast("Cart Added");
    setCartItems(cartItems + 1);
    // putCartDB(userData[0]?.name, cart).then((result) => {
    //   if (result) {
    //
    //   }
    // });
  };

  const handleSetCount = (id, newCount) => {
    setCounts((prevCounts) => ({ ...prevCounts, [id]: newCount }));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-12">
      <div className="grid gap-5 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        {itemData?.data
          ?.filter((item) => item?.item_group === activeGroupId)
          .map((item, idx) => (
            <div className="relative group " key={idx}>
              <Link to={`/product/${item?.name}`}>
                <img
                  className="w-44 h-32 object-contain mx-auto"
                  src={`${base_url + item?.image}`}
                  alt={item.item_name}
                />
                <div className="bg-white hidden group-hover:block rounded absolute top-3 right-3 p-2">
                  <TiArrowShuffle className="text-2xl " />
                  <div className="mt-3">
                    <CiSearch className="text-2xl" />
                  </div>
                </div>
              </Link>
              <div className="text-center space-y-3 mt-3">
                <Link to="/product">
                  <h3 className="font-bold ">{item.item_name}</h3>
                  <p className="text-gray-400">DAIRY</p>
                  <p className="font-bold">
                    SKU:{" "}
                    <span className="font-normal text-gray-400">
                      {item.SKU}
                    </span>
                  </p>
                </Link>
                <div className="flex items-center justify-center">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>

                <div className="flex flex-row  items-center justify-center gap-4">
                  <div className="flex">
                    <div
                      onClick={() =>
                        handleSetCount(
                          item.item_name,
                          Math.max((counts[item.item_name] || 1) - 1, 1)
                        )
                      }
                      className="text-2xl border px-3 py- border-l-2 rounded-l-full font-bold cursor-pointer"
                    >
                      -
                    </div>
                    <input
                      className="border w-8 text-center"
                      type="text"
                      onChange={(e) =>
                        handleSetCount(item.item_name, parseInt(e.target.value))
                      }
                      value={counts[item.item_name] || 1}
                    />
                    <div
                      onClick={() =>
                        handleSetCount(
                          item.item_name,
                          (counts[item.item_name] || 1) + 1
                        )
                      }
                      className="text-2xl border px-3 py- border-l-2 rounded-r-full font-bold cursor-pointer"
                    >
                      +
                    </div>
                  </div>
                  {/* <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-[#dd9221] gap-1 px-6 py-1 rounded text-white whitespace-nowrap"
                  >
                    ADD TOCART
                  </button> */}
                  <div>
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
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
