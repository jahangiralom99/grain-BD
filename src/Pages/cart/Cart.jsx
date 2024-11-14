// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import {
  addToProceed,
  getStrdCart,
  removeToCart,
} from "../../utilities/functions";
import { base_url } from "../../utilities/dataPanel";
import { useContext, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../../Root";
import { toast } from "react-toastify";

const calculateTotalPrice = (cartData, quantities) => {
  return cartData?.reduce(
    (total, item, idx) => total + item.standard_rate * quantities[idx],
    0
  );
};

const Cart = () => {
  const [cartItmData, setCartItmData] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // context card
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [loader, setLoader] = useState(true);
  // const { data } = getStrdCart("login-info");

  useEffect(() => {
    let cart = getStrdCart("cart");
    setQuantities(cart?.map((item) => item?.qty));
    setTotalPrice(calculateTotalPrice(cart, quantities));
    setCartItmData(cart);
    setLoader(false);
  }, [loader]);

  const update = (index, newQty) => {
    if (newQty >= 0) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] = newQty;
      setQuantities(updatedQuantities);
      setTotalPrice(calculateTotalPrice(cartItmData, updatedQuantities));
    }
  };

  // Deleted Cart Item
  const handleCartDel = (key) => {
    removeToCart(key);
    setCartItems(cartItems - 1);

    // let cart = getStrdCart("cart");
    // putCartDB(user, cart).then((result) => {
    //   // if (result) {
    //   //   setCartItems(cartItems - 1);
    //   // }
    // });
    setLoader(true);
  };

  const handleProceed = () => {
    const dataToSubmit = cartItmData?.map((data, idx) => ({
      image: data.image,
      item_name: data.item_name,
      item_code: data.item_code,
      standard_rate: data.standard_rate,
      qty: quantities[idx],
      uom: data.uom,
      price: quantities[idx] * data.standard_rate,
    }));

    const dataToProceed = cartItmData?.map((data, idx) => ({
      item_name: data.item_name,
      item_code: data.item_code,
      rate: data.standard_rate,
      qty: quantities[idx],
      uom: data.uom,
      amount: quantities[idx] * data.standard_rate,
    }));

    console.log("dataToProceed", dataToProceed);

    if (cartItmData.length === 0) {
      toast.info("Please select Order Item");
    } else {
      if (addToProceed(dataToSubmit, "cart")) {
        if (addToProceed(dataToProceed, "proceed")) {
          navigate("/checkout");
        }
      }
    }
  };

  return (
    <div className="mt-8 max-w-screen-xl mx-auto px-4 pb-5 bg-[#f9f9f9]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart | Grain Pastry & Bakery </title>
      </Helmet>
      <div className="flex flex-col lg:flex-row items-start  gap-3 mt-12">
        <div className="lg:w-[70%] w-full">
          <div className=" overflow-x-auto">
            <table className=" w-full min-w-max table-auto text-left ">
              <thead>
                <tr>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900 font-bold leading-none opacity-70">
                      No
                    </p>
                  </th>
                  <th className="cursor-pointer border-y  border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  leading-none opacity-70 font-bold">
                      PRODUCT
                    </p>
                  </th>
                  {/* <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                      SKU
                    </p>
                  </th> */}
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                      PRICE
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                      QUANTITY
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                      SUBTOTAL
                    </p>
                  </th>
                  <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                    <p className="text-sm text-blue-gray-900  font-bold leading-none opacity-70">
                      Delete
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItmData?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div>
                        <p>{idx + 1}</p>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="flex items-center gap-3">
                        <img
                          className="size-16 border rounded-lg"
                          src={`${base_url + item?.image}`}
                          alt={item?.item_name}
                        />
                        <p className="font-semibold text-sm md:w-44">
                          {item?.item_name}
                        </p>
                      </div>
                    </td>
                    {/* <td className="p-4 border-b border-blue-gray-50">
                      {" "}
                      <p>DF00103</p>
                    </td> */}
                    <td className="p-4 border-b border-blue-gray-50">
                      {" "}
                      <p>{item?.standard_rate}</p>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="font-bold flex items-center cursor-pointer">
                        <p
                          onClick={() => update(idx, quantities[idx] - 1)}
                          className="border text-xl p-1 rounded-s-full px-3"
                        >
                          -
                        </p>
                        <input
                          className="py-1 px-2 w-9"
                          type="text"
                          value={quantities[idx]}
                        />
                        <p
                          onClick={() => update(idx, quantities[idx] + 1)}
                          className="border text-xl py-1 rounded-r-full px-3"
                        >
                          +
                        </p>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <p className="text-xl text-[#db3a87]">
                        {quantities[idx] * item?.standard_rate}
                      </p>
                    </td>
                    <td className="text-2xl text-[#db3a87]">
                      <button onClick={() => handleCartDel(idx)}>
                        <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr className="mt-8" />
          <div className="mt-8 flex flex-col-reverse gap-6 lg:flex-row justify-between items-center">
            <div className="flex gap-4 items-center">
              <input
                className="text-center border rounded-full py-2 md:px-4 "
                type="text"
                name=""
                id=""
                placeholder="Coupon Code"
              />
              <button className="py-2 px-6 bg-red-500 hover:bg-red-800 font-bold text-white rounded-full text-sm">
                APPLY COUPON
              </button>
            </div>
            <div>
              <button className="py-2 px-6 bg-red-400 hover:bg-red-800 font-bold text-white rounded-full text-sm">
                UPDATE CART
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] w-full rounded p-5 border">
          <h1 className="text-2xl font-semibold">CART TOTALS</h1>
          <div className="flex items-center justify-between mt-6">
            <p className="font-semibold text-xl">Subtotal </p>
            <p className="font-bold">{totalPrice} ৳</p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="font-semibold text-xl">Shipping</p>
            <div className="flex flex-col gap-3">
              <p>Delivery Charge (Free)</p>
              <p className="text-[#77777]">
                Shipping to <span className="font-bold">Kishoreganj.</span>
              </p>
              <p className="text-[#db3a87] text-xl font-semibold">
                Change address
              </p>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="mt-5 flex items-center justify-between">
            <p className="font-semibold text-xl">Total</p>
            <p className="text-xl font-semibold text-[#db3a87]">
              {totalPrice} ৳{" "}
            </p>
          </div>
          <div>
            {cartItmData?.length > 0 ? (
              <div className="bg-red-500 hover:bg-red-800 rounded-full text-center p-2 mt-6">
                <button
                  onClick={() => handleProceed()}
                  className="text-white text-sm font-bold"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            ) : (
              <div className="bg-gray-300 cursor-not-allowed rounded-full text-center p-2 mt-6">
                <div
                  // onClick={() => handleProceed()}
                  className="text-white text-sm font-bold"
                >
                  PROCEED TO CHECKOUT
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
