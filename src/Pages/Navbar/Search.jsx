import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="bg-[#4f3326] relative mt-3 mb-3 lg:hidden xl:hidden 2xl:hidden">
      <div className="px-12 py-3 ">
        <input
          className="w-full text-white bg-[#4f3326] border rounded-full mx-auto py-1 px-4"
          type="text"
          name=""
          id=""
          placeholder="Search for products"
        />
      </div>
      <div className="absolute top-4 right-16">
        <CiSearch className="text-2xl text-white" />
      </div>
    </div>
  );
};

export default Search;
