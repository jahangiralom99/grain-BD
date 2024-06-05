import { FaBirthdayCake } from "react-icons/fa";

const Delivery = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-12">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="lg:flex-1">
          <img className="rounded" src="https://i.ibb.co/dD8fCS9/delivery-service-1.jpg" alt="" />
        </div>
        <div className="lg:flex-1 px-6 space-y-5">
          <h1 className="text-4xl font-bold text-[#4f3326]">
            Delivery within 3 Hours
          </h1>
          <p className="text-[18px] font-bold text-[#4f3326]">
            Celebrate any occasion with our delicious and beautiful cake. Choose
            your favorite design and flavor.
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-4 justify-between text-slate-400">
            <div className="flex-1">
              <h1 className="text-[18px] font-bold text-[#4f3326]">
                Minimum Order
              </h1>
              <p>300/- Taka Products</p>
            </div>
            <div className="flex-1">
              <h1 className="text-[18px] font-bold text-[#4f3326]">
                Order Time
              </h1>
              <p>Before 5pm (Delivery Time 9am – 11pm) Every Day</p>
            </div>
            <div className="flex-1">
              <h1 className="text-[18px] font-bold text-[#4f3326]">
                Free Delivery
              </h1>
              <p>Above 3 KG Cakes and Bulk Order</p>
            </div>
          </div>
          <button className="w-full justify-center cursor-pointer py-2 gap-3 rounded-md flex items-center text-white bg-[#4f3326]">
            <FaBirthdayCake className="text-2xl" /> ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
