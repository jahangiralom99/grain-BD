import { FaRegHandPointRight } from "react-icons/fa";

const OpenClose = () => {
  return (
    <div className="bg-[#4f3326] mt-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center p-8 gap-5">
        <div className="flex-1">
          <img
            className="h-[433px]"
            src="https://i.ibb.co/zmXXJzd/Web-Banner-1.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 text-white space-y-6">
          <h1 className="text-3xl font-semibold">
            Open Daily - 7:00AM - 11:00PM
          </h1>
          <h1 className="text-4xl font-semibold">Freshly baked Everyday</h1>
          <div className="pt-8">
            <button className="px-8 gap-4 flex items-center  md:text-xl py-3 bg-white text-[#823400] rounded">
              VISIT OUR STORE <FaRegHandPointRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenClose;
