// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 mt-4 py-5">


           <Helmet>
                <meta charSet="utf-8" />
                <title>Login | Grain Pastry & Bakery</title>
                <link rel="canonical" href="http://static.ajkerdeal.com/images/dealdetails/ad-logo.svg" />
            </Helmet>
      <form className="overflow-hidden rounded border bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 text-center bg-[#f85606] p-4 rounded ">
            <h3 className="text-xl flex items-center justify-center gap-3 font-medium text-white">
              <CiUser className="text-2xl" />
              লগইন
            </h3>
          </header>
          <div className="flex flex-col">
            {/*      <!-- Input field --> */}
            <div className="relative my-6">
              <input
                id="id-b03"
                type="email"
                name="id-b03"
                placeholder="your gmail"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-200 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b03"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                আপনার ইমেইল আ্যড্রেসটি লিখুন
              </label>
            </div>
            {/*      <!-- Input field --> */}
            <div className="relative my-6">
              <input
                id="id-b13"
                type="password"
                name="id-b13"
                placeholder="your password"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-gray-200 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b13"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                আপনার পাসওয়ার্ডটি লিখুন *
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            </div>
          </div>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-4 ">
          <button className="inline-flex h-10 w-44 mx-auto items-center justify-center gap-2 whitespace-nowrap rounded bg-[#f85606] px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#9a471d] focus-visible:outline-none disabled:cursor-not-allowed disabled:shadow-none">
            <span>লগইন</span>
          </button>
        </div>
        <div className="mt-4 text-center mb-4">
          <p className="font-bold">অথবা</p>
          <Link
            to="/registration"
            className="mt-3 cursor-pointer text-xs font-bold text-[#f85606] hover:text-red-600"
          >
            রেজিস্টার
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
