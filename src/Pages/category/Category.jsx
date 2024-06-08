// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import { CiHeart } from "react-icons/ci";

const Category = () => {
  const data = [
    {
      id: 1,
      image:
        "https://i.ibb.co/2nGtpJX/s1-jeans-pant-for-men-fashionable-export-quality-jeans-pant-new-collection-jeans-pants-for-men-pant.jpg",
      name: "জিন্স প্যান্ট ফর মেন",
      price: "৮৫০",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co/2nGtpJX/s1-jeans-pant-for-men-fashionable-export-quality-jeans-pant-new-collection-jeans-pants-for-men-pant.jpg",
      name: "জিন্স প্যান্ট ফর মেন",
      price: "৮৫০",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co/2nGtpJX/s1-jeans-pant-for-men-fashionable-export-quality-jeans-pant-new-collection-jeans-pants-for-men-pant.jpg",
      name: "জিন্স প্যান্ট ফর মেন",
      price: "৮৫০",
    },
    {
      id: 4,
      image:
        "https://i.ibb.co/2nGtpJX/s1-jeans-pant-for-men-fashionable-export-quality-jeans-pant-new-collection-jeans-pants-for-men-pant.jpg",
      name: "জিন্স প্যান্ট ফর মেন",
      price: "৮৫০",
    },
    {
      id: 5,
      image:
        "https://i.ibb.co/2nGtpJX/s1-jeans-pant-for-men-fashionable-export-quality-jeans-pant-new-collection-jeans-pants-for-men-pant.jpg",
      name: "জিন্স প্যান্ট ফর মেন",
      price: "৮৫০",
    },
    {
      id: 6,
      image:
        "https://i.ibb.co/2nGtpJX/s1-jeans-pant-for-men-fashionable-export-quality-jeans-pant-new-collection-jeans-pants-for-men-pant.jpg",
      name: "জিন্স প্যান্ট ফর মেন",
      price: "৮৫০",
    },
    {
      id: 7,
      image:
        "https://i.ibb.co/2nGtpJX/s1-jeans-pant-for-men-fashionable-export-quality-jeans-pant-new-collection-jeans-pants-for-men-pant.jpg",
      name: "জিন্স প্যান্ট ফর মেন",
      price: "৮৫০",
    },
    {
      id: 8,
      image:
        "https://i.ibb.co/2nGtpJX/s1-jeans-pant-for-men-fashionable-export-quality-jeans-pant-new-collection-jeans-pants-for-men-pant.jpg",
      name: "জিন্স প্যান্ট ফর মেন",
      price: "৮৫০",
    },
    {
      id: 9,
      image:
        "https://i.ibb.co/2nGtpJX/s1-jeans-pant-for-men-fashionable-export-quality-jeans-pant-new-collection-jeans-pants-for-men-pant.jpg",
      name: "জিন্স প্যান্ট ফর মেন",
      price: "৮৫০",
    },
    {
      id: 10,
      image:
        "https://i.ibb.co/2nGtpJX/s1-jeans-pant-for-men-fashionable-export-quality-jeans-pant-new-collection-jeans-pants-for-men-pant.jpg",
      name: "জিন্স প্যান্ট ফর মেন",
      price: "৮৫০",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-4">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Category | Grain Pastry & Bakery</title>
                <link rel="canonical" href="http://static.ajkerdeal.com/images/dealdetails/ad-logo.svg" />
            </Helmet>

      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <div className="md:w-[20%] bg-white p-5 rounded">
          <h1 className="text-sm">ফিল্টার</h1>
          <hr className="mt-4" />
          <div className="mt-4">
            <p className="font-bold text-xs">সাব ক্যাটাগরি</p>
            {/* Filter Category  */}
            <div className="form-control flex-row items-center gap-1 mt-2">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs rounded-none checkbox-accent"
                />
              </label>
              <p className="text-xs">জিন্স</p>
            </div>
            <div className="form-control flex-row items-center gap-1 mt-2">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs rounded-none checkbox-accent"
                />
              </label>
              <p className="text-xs">স্ক্র্যাচড জিন্স</p>
            </div>
            <div className="form-control flex-row items-center gap-1 mt-2">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs rounded-none checkbox-accent"
                />
              </label>
              <p className="text-xs">ফর্মাল</p>
            </div>
            <div className="form-control flex-row items-center gap-1 mt-2">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs rounded-none checkbox-accent"
                />
              </label>
              <p className="text-xs">টুইল/গ্যাবার্ডিন</p>
            </div>
            <div className="form-control flex-row items-center gap-1 mt-2">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs rounded-none checkbox-accent"
                />
              </label>
              <p className="text-xs">জিন্স</p>
            </div>
            <div className="form-control flex-row items-center gap-1 mt-2">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs rounded-none checkbox-accent"
                />
              </label>
              <p className="text-xs">চিনো</p>
            </div>
            <div className="form-control flex-row items-center gap-1 mt-2">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs rounded-none checkbox-accent"
                />
              </label>
              <p className="text-xs">কার্গো এন্ড শর্টস</p>
            </div>
            <div className="form-control flex-row items-center gap-1 mt-2">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs rounded-none checkbox-accent"
                />
              </label>
              <p className="text-xs">স্লিপিং ট্রাউজার</p>
            </div>
            <div className="form-control flex-row items-center gap-1 mt-2">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xs rounded-none checkbox-accent"
                />
              </label>
              <p className="text-xs">কালারফুল প্যান্ট</p>
            </div>
          </div>
        </div>
        <div className="md:w-[80%] bg-white p-5 rounded">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="text-[18px] font-medium">জিন্স - ১,৫১২ টি</h2>
            <div>
              <select className="select select-bordered select-xs w-52">
                <option>নতুন</option>
                <option>জনপ্রিয় </option>
                <option>দাম : সবচেয়ে কম থেকে বেশী </option>
                <option>দাম : সবচেয়ে বেশী থেকে কম </option>
              </select>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {data.map((item) => (
              <div
                className="text-center relative space-y-2 rounded hover:shadow-md p-2 hover:border"
                key={item.id}
              >
                <img className="w-full" src={item.image} alt="" />
                <div className="absolute cursor-pointer top-1 right-9 border rounded-full bg-white">
                  <CiHeart className="text-2xl" />
                </div>
                <p className="text-xs">{item.name}</p>
                <p className="text-xs text-red-500 font-bold">৳{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
