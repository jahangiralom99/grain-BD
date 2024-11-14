/* eslint-disable react/prop-types */
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "./Card";
import { base_url,  } from "../../utilities/dataPanel";
import { useState } from "react";

const Category = (props) => {
  const { grpData, webItmData, itemData } = props;
  const [activeGroupId, setActiveGroupId] = useState("Baby Care");

  // useEffect(() => {
  //   fetch(`${fetch_url}/getall?erp_url=${base_url}&doctype_name=Customer`, {
  //     method: "GET",
  //     headers: header,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => )
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // console.log(itemData);

  return (
    <div className="mt-12 max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 lg:px-8">
      <section className=" flex justify-between items-center">
        <span className="md:block hidden"></span>
        <span className="text-center font-bold text-2xl">OUR CATEGORIES</span>

        <Link to="/allCategory">
          <span className=" md:text-xl font-semibold flex justify-center items-center">
            All <FaChevronRight />{" "}
          </span>
        </Link>
      </section>

      <div className="flex gap-6 items-center justify-start  overflow-x-scroll md:overflow-x-hidden mt-8 pl-4 ">
        {grpData?.data
          ?.filter(
            (filter) => filter.is_group == 0 && filter.show_in_website == 1
          )
          .map((item, idx) => (
            <div
              onClick={() => setActiveGroupId(item?.name)}
              className={`flex flex-col items-center ${
                activeGroupId == item?.name ? "border-b-4 border-[#dd9221]" : ""
              } p-3 cursor-pointer`}
              key={idx}
            >
              <img
                className="w-32 h-24 object-scale-down"
                src={`${base_url + item.image}`}
                alt={item?.thumbnail}
              />
              <p className="text-sm whitespace-nowrap">{item.name}</p>
            </div>
          ))}
      </div>
      <Card
        activeGroupId={activeGroupId}
        webItmData={webItmData}
        itemData={itemData}
      ></Card>
    </div>
  );
};

export default Category;
