import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = () => {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co/Cbcj7F4/Web-Icon-2-1-85x85.jpg",
      name: "CAKE",
    },
    {
      id: 2,
      image: "https://i.ibb.co/Cbcj7F4/Web-Icon-2-1-85x85.jpg",
      name: "DESSERT",
    },
    {
      id: 3,
      image: "https://i.ibb.co/Cbcj7F4/Web-Icon-2-1-85x85.jpg",
      name: "PASTRY",
    },
    {
      id: 4,
      image: "https://i.ibb.co/Cbcj7F4/Web-Icon-2-1-85x85.jpg",
      name: "SAVORIES",
    },
    {
      id: 5,
      image: "https://i.ibb.co/Cbcj7F4/Web-Icon-2-1-85x85.jpg",
      name: "POUND CAKE",
    },
    {
      id: 6,
      image: "https://i.ibb.co/Cbcj7F4/Web-Icon-2-1-85x85.jpg",
      name: "BREAD & BUN",
    },
    {
      id: 7,
      image: "https://i.ibb.co/Cbcj7F4/Web-Icon-2-1-85x85.jpg",
      name: "BISCUITS",
    },
    {
      id: 8,
      image: "https://i.ibb.co/Cbcj7F4/Web-Icon-2-1-85x85.jpg",
      name: "CUSTOMIZED CAKE",
    },
  ];

  return (
    <div className="mt-12 max-w-screen-2xl mx-auto px-4 lg:px-8">

<section className=" flex justify-between items-center">

<span className="md:block hidden"></span >
<span className="text-center font-bold text-2xl">OUR CATEGORIES</span>

<Link to='/allCategory'>
<span className=" md:text-xl font-semibold flex justify-center items-center">All <FaChevronRight/> </span>
</Link>
</section>



      <div className="flex gap-6 items-center justify-center overflow-x-auto mt-8 ">
        {data.map((item) => (
          <div className="flex flex-col items-center " key={item.id}>
            <img className="bg-white min-w-20" src={item.image} alt="" />
            <p className="font-bold text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
