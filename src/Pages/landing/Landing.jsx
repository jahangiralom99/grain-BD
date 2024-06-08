import {FaShoppingCart} from "react-icons/fa";
import {FaCheckCircle} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import From from "./files/From";
// import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Landing = () => {
  return (
    <section className="bg-[#F4F3EA] mt-3 py-5">

           <Helmet>
                <meta charSet="utf-8" />
                <title>Landing | Grain Pastry & Bakery </title>
               
            </Helmet>
      
      {/* Top Bar Section */}
      <div className="mt-8 mx-auto max-w-screen-xl px-3">
        <h2 className="font-extrabold text-center text-2xl leading-8	">
          আপনি কি জানেন! <br />
          আপনার প্রিয়জন সামাজিক অনুষ্ঠান এড়িয়ে চলে কেননা <br />
          সে সামাজিকভাবে হীনমন্যতায় ভূগে থাকে। নজড়কাঁড়া এই
          <span className="text-[#d3ac2b] ml-2">সাবিহা আবায়াটি</span> <br />
          আপনার প্রিয়জনের পোশাকে ফুটিয়ে তুলবে রুচিশীল এক নাজাতীয় আভিজাত্য।
        </h2>
        <div className="mt-8 text-center"></div>


        <Link to='/form'>
        <div className="text-center mt-6 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300	flex justify-center items-center">
          <button className="font-extrabold py-4 md:px-[85px] px-[40px] bg-[#d3ac2b] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
            <FaShoppingCart />
            অর্ডার করতে চাই
          </button>
        </div>
        </Link>
        <h1 className="text-red-500 font-extrabold text-2xl text-center mt-8 ">
          “আবায়া-ই সাবিহা” এই মুহূর্তের সর্বাধিক চাহিদার একটি বোরখা। আমাদের আপুরা খুবই পছন্দ করেছেন এই বোরখাটি। আপনিও
          সংগ্রহ করে নিন এখনই!
        </h1>
      </div>

      {/* আবায়া-ই সাবিহা Section */}
      <section className="my-8 bg-[#F4F3EA]  px-3 py-12">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4  gap-4 pt-12">
          <div className="border-2 border-[#d3ac2b]">
            <img src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0106.png.webp" alt="" />
            <p className="text-center font-extrabold p-2">ডিপ সি-গ্রীন কালার</p>
          </div>
          <div className="border-2 border-[#d3ac2b]">
            <img
              className="border-2 border-[#d3ac2b]"
              src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0102.png.webp"
              alt=""
            />
            <p className="text-center font-extrabold p-2">রোজ পিংক কালার</p>
          </div>
          <div className="border-2 border-[#d3ac2b]">
            <img
              className="border-2 border-[#d3ac2b]"
              src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0110.png.webp"
              alt=""
            />
            <p className="text-center font-extrabold p-2">ব্ল্যাক কালার</p>
          </div>
          <div className="border-2 border-[#d3ac2b]">
            <img
              className="border-2 border-[#d3ac2b]"
              src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0108.png.webp"
              alt=""
            />
            <p className="text-center font-extrabold p-2">অলিভ কালার</p>
          </div>
        </div>
        <div></div>
      </section>
      {/* Order now section  */}
      <div className="max-w-screen-xl mx-auto p-3 text-center">
        <h1 className="font-extrabold text-3xl">
          জনপ্রিয় এই সাবিহা আবায়ার পূর্বের মূল্য
          <span className="relative">
            ২৫০০/-
            <svg
              className="w-28 absolute -left-6 top-1 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none">
              <path fill="red" d="M497.4,23.9C301.6,40,155.9,80.6,4,144.4"></path>
              <path fill="red" d="M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"></path>
            </svg>
          </span>
          টাকা
        </h1>
        <h1 className="font-extrabold text-4xl mt-4 text-[#D3AC2B]">
          আজকের অফার মূল্য মাত্র
          <span className="relative ml-2 mr-2 text-[#38b000]">
            ১৯৪০/-
            <svg
              className="w-44 absolute -left-8 -top-[68px] "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 150 150"
              preserveAspectRatio="none"></svg>
          </span>
          টাকা
        </h1>
        <h2 className="mt-5 text-red-500 text-2xl font-extrabold">
          অফারটি লুফে নিতে এখনি “অর্ডার করতে চাই” বাটনে ক্লিক করুন
        </h2>
        {/* <div className="text-center mt-8 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300	">
          <button className="font-extrabold py-4 md:px-[85px] px-[40px] bg-[#d3ac2b] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
            <FaShoppingCart />
            অর্ডার করতে চাই
          </button>
        </div> */}
      </div>
      {/* card Section */}

      <section className="max-w-screen-xl mt-8 mx-auto p-5">
        <div>
          <div className="md:ml-44">
            <h1 className="font-extrabold text-3xl text-[#d3ac2b]">কি কি কারণে সাবিহা বোরকা কিনা উচিৎ!</h1>
            <div className="flex items-center gap-2 mt-6">
              <p className="h-3 w-6 bg-[#38B000]"></p>
              <p className="h-3 w-6 bg-[#38B000]"></p>
              <p className="h-3 w-6 bg-[#38B000]"></p>
              <p className="h-3 w-6 bg-[#38B000]"></p>
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold">
              <FaCheckCircle className="text-2xl text-[#38B000]" />
              <p>একদিকে পর্দা পালন অন্যদিকে চমৎকার ডিজাইনের চমৎকার মডেস্ট হিজাবী।</p>
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold">
              <FaCheckCircle className="text-2xl text-[#38B000]" />
              <p>কাপড় হাতে নেবার পরে সারা জীবনের অভিজ্ঞতা পরিবর্তন হয়ে যেতে হবে।</p>
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold">
              <FaCheckCircle className="text-2xl text-[#38B000]" />
              <p>পরিধেয় মসৃণ, চোখের শীতলতার কালার, ইম্পোরটেড।</p>
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold">
              <FaCheckCircle className="text-2xl text-[#38B000]" />
              <p>প্রথম অর্ডারে আপনি পেয়ে যাচ্ছেন নাজাত লাইফ টাইম মেম্বারশিপ কার্ড।</p>
            </div>
          </div>


          <Link to='/form'>
          <div className="text-center mt-8 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300 flex justify-center items-center	">
          <button className="font-extrabold  md:px-[85px] px-[32px] bg-[#d3ac2b] rounded-full py-3 flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
            <FaShoppingCart />
            অর্ডার করতে চাই
          </button>
        </div>
        </Link>
        </div>
      </section>
      {/* --------------------- */}
      <section className="bg-[#F4F3EA] text-center mt-8 p-8">
        <div className="md:max-w-screen-xl md:mx-auto">
          <h1 className="text-3xl font-extrabold text-[#d3ac2b]">প্রয়োজনে হোয়াটসআপ করুনঃ 01928 22 77 88</h1>



          <Link to='/form'>
          <div className="text-center mt-8 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300 flex justify-center items-center	">
          <button className="font-extrabold  md:px-[85px] px-[22px] bg-[#d3ac2b] rounded-full py-3 flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
            <FaShoppingCart />
            অর্ডার করতে চাই
          </button>
        </div>
        </Link>
        </div>
      </section>

      {/* React Form used */}
      <From />
    </section>
  );
};

export default Landing;
