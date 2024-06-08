
import { CiSearch, CiStar } from "react-icons/ci";
import { TiArrowShuffle } from "react-icons/ti";
import { Link } from "react-router-dom";

const Card = () => {
  const data = [
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
    {
      id: 4,
      image: "https://i.ibb.co/HH7Lmxh/Cake-Items-Product-Design-1-430x304.jpg",
      name: "Butter",
      SKU: "BUTTER1121",
      DAIRY: "Yes",
      price: 2.99,
    },
    {
      id: 5,
      image: "https://i.ibb.co/HH7Lmxh/Cake-Items-Product-Design-1-430x304.jpg",
      name: "Almond Milk",
      SKU: "ALMOND1324",
      DAIRY: "No",
      price: 3.79,
    },
    {
      id: 6,
      image: "https://i.ibb.co/HH7Lmxh/Cake-Items-Product-Design-1-430x304.jpg",
      name: "Oat Milk",
      SKU: "OATMILK5678",
      DAIRY: "No",
      price: 3.99,
    },
    {
      id: 7,
      image: "https://i.ibb.co/HH7Lmxh/Cake-Items-Product-Design-1-430x304.jpg",
      name: "Swiss Cheese",
      SKU: "CHEESE9021",
      DAIRY: "Yes",
      price: 5.49,
    },
    {
      id: 8,
      image: "https://i.ibb.co/HH7Lmxh/Cake-Items-Product-Design-1-430x304.jpg",
      name: "Cottage Cheese",
      SKU: "CHEESE3456",
      DAIRY: "Yes",
      price: 2.49,
    },
    {
      id: 9,
      image: "https://i.ibb.co/HH7Lmxh/Cake-Items-Product-Design-1-430x304.jpg",
      name: "Soy Milk",
      SKU: "SOYMILK7890",
      DAIRY: "No",
      price: 3.29,
    },
    {
      id: 10,
      image: "https://i.ibb.co/HH7Lmxh/Cake-Items-Product-Design-1-430x304.jpg",
      name: "Cream Cheese",
      SKU: "CHEESE1112",
      DAIRY: "Yes",
      price: 2.79,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-16">
      <div className="grid gap-5 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
        {data.map((item) => (
          <div className="relative group" key={item.id}>


            <Link to='/product'>
            <img src={item.image} alt="" />
            <div className="bg-white hidden group-hover:block rounded absolute top-3 right-3 p-2">
              <TiArrowShuffle className="text-2xl " />
              <div className="mt-3">
                <CiSearch className="text-2xl" />
              </div>
            </div>
            </Link>
            <div className="text-center space-y-3 mt-3">
              <Link to='/product'>
              <h3 className="font-bold ">{item.name}</h3>
              <p className="text-gray-400">DAIRY</p>
              <p className="font-bold">
                SKU:{" "}
                <span className="font-normal text-gray-400">{item.SKU}</span>
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
                  <div className="text-2xl border px-3 py- border-l-2 rounded-l-full font-bold">
                    -
                  </div>
                  <input
                    className="border w-8 text-center"
                    type="text"
                    defaultValue={1}
                  />
                  <div className="text-2xl border px-3 py- border-l-2 rounded-r-full font-bold">
                    +
                  </div>
                </div>
                  <button className="bg-[#dd9221] gap-1 px-6 py-2 rounded text-white ">
                    ADD TOCART
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
