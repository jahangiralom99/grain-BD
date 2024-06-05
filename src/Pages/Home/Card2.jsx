import { CiSearch, CiStar } from "react-icons/ci";
import { TiArrowShuffle } from "react-icons/ti";

const Card2 = () => {
  const snacks = [
    {
      id: 1,
      image: "https://i.ibb.co/HH7Lmxh/Cake-Items-Product-Design-1-430x304.jpg",
      name: "Whole Milk",
      SKU: "MILK1234",
      DAIRY: "Yes",
      price: 3.49,
    },
    {
      id: 2,
      image: "https://i.ibb.co/HH7Lmxh/Cake-Items-Product-Design-1-430x304.jpg",
      name: "Cheddar Cheese",
      SKU: "CHEESE5678",
      DAIRY: "Yes",
      price: 4.99,
    },
    {
      id: 3,
      image: "https://i.ibb.co/HH7Lmxh/Cake-Items-Product-Design-1-430x304.jpg",
      name: "Greek Yogurt",
      SKU: "YOGURT9101",
      DAIRY: "Yes",
      price: 1.99,
    },
  ];

  return (
    <div className="mt-8 max-w-screen-2xl mx-auto gap-4 px-4 grid md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-3 grid-cols-1">
      <div>
        <h1 className="text-2xl font-semibold text-center">Dessert Item</h1>
        <div className="mt-5 flex flex-col gap-4 items-center justify-center">
          {snacks.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col items-center gap-3 relative group">
                <img className="rounded w-full" src={item.image} alt="" />
                <div className="bg-white hidden group-hover:block rounded absolute top-3 left-3 p-2">
                  <TiArrowShuffle className="text-2xl cursor-pointer" />
                  <div className="mt-3 cursor-pointer">
                    <CiSearch className="text-2xl" />
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">Snacks</p>
                  <p className="text-gray-400">
                    <span className="font-bold text-black">SKU:</span>{" "}
                    {item.SKU}
                  </p>
                  <div className="flex items-center">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <h1 className="text-2xl font-semibold">{item.price}৳</h1>
                  <button className="bg-[#dd9221] px-2 py-1 rounded text-white ">
                    ADD TO CART
                  </button>
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
        <h1 className="text-2xl font-semibold text-center">Dessert Item</h1>
        <div className="mt-5 flex flex-col gap-4 items-center justify-center">
          {snacks.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col items-center gap-3 relative group">
                <img className="rounded" src={item.image} alt="" />
                <div className="bg-white hidden group-hover:block rounded absolute top-3 left-3 p-2">
                  <TiArrowShuffle className="text-2xl cursor-pointer" />
                  <div className="mt-3 cursor-pointer">
                    <CiSearch className="text-2xl" />
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">Snacks</p>
                  <p className="text-gray-400">
                    <span className="font-bold text-black">SKU:</span>{" "}
                    {item.SKU}
                  </p>
                  <div className="flex items-center">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <h1 className="text-2xl font-semibold">{item.price}৳</h1>
                  <button className="bg-[#dd9221] px-2 py-1 rounded text-white ">
                    ADD TO CART
                  </button>
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
        <h1 className="text-2xl font-semibold text-center">Dessert Item</h1>
        <div className="mt-5 flex flex-col gap-4 items-center justify-center">
          {snacks.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col items-center gap-3 relative group">
                <img className="rounded" src={item.image} alt="" />
                <div className="bg-white hidden group-hover:block rounded absolute top-3 left-3 p-2">
                  <TiArrowShuffle className="text-2xl cursor-pointer" />
                  <div className="mt-3 cursor-pointer">
                    <CiSearch className="text-2xl" />
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">Snacks</p>
                  <p className="text-gray-400">
                    <span className="font-bold text-black">SKU:</span>{" "}
                    {item.SKU}
                  </p>
                  <div className="flex items-center">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <h1 className="text-2xl font-semibold">{item.price}৳</h1>
                  <button className="bg-[#dd9221] px-2 py-1 rounded text-white ">
                    ADD TO CART
                  </button>
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
