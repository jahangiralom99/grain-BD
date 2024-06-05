import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#8d3041] ">
      <div className="mt-16 p-2 pt-12">
        <div className="mx-auto w-full max-w-screen-xl px-4 xl:px-0">
          <div className="flex flex-col justify-between gap-6 sm:px-[18px] md:flex-row md:px-10">
            <div className="md:w-[316px]">
              <div className="text-[18px] font-medium text-white">
                <div className="text-white font-extrabold">
                  <img
                    src="https://i.ibb.co/XsZm6Qr/Bhor-Bazar-Logo3.png"
                    alt=""
                  />
                </div>
              </div>
              <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
              Grain Pastry & Bakery is a concern of the Niamah Food and Beverage Industries trade licenses no - TRADE/DNCC/012410/2022, established in 2022. We are always cautious about our food quality & hygiene to make you feel better.
              </p>
              <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
              Corporate Office: <br />
              Niamah Food & Beverage<br />
                Plot-3631, Shordar Bari, Panir <br />
                Pump Road, Dakshinkhan, Dhaka - 
                1230 <br />
                ioniccorporation@grain.com.bd <br />
                Mobile +880 1958-442200
              </p>
              
            </div>
            <div className="md:w-[316px] text-white">
                <h1 className="text-2xl font-semibold mb-3">Our Outlets</h1>
                <p>Outlet/Sector - 6</p>
            </div>
            <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
              <div className="">
                <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
                  Pages
                </p>
                <ul>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/our-tutors"
                    >
                      News
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/become-a-tutor"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/plans-and-pricing"
                    >
                      Plans and pricing
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/terms-and-conditions"
                    >
                      Terms and conditions
                    </a>
                  </li>
                  <li className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href="/privacy-policy"
                    >
                      Privcay policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:mt-0">
                <p className="text-deutziawhite font-inter text-[18px] font-medium">
                  Download Our App
                </p>
                <div className="flex gap-4 sm:flex-col">
                  <a target="_blank" href="#">
                    <img
                      alt="facebook icon"
                      loading="lazy"
                      width="168"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      src="https://www.englishyaari.com/img/google-store.svg"
                    />
                  </a>
                  <a target="_blank" href="#">
                    <img
                      alt="facebook icon"
                      loading="lazy"
                      width="168"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      src="https://i.ibb.co/p038kmc/preview-d605be53ac335ec29de57d357cb82436-e1695739582877-300x199.jpg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-[30px] text-white" />
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center pt-[9px] md:py-8">
            <p className="flex-1 font-bold text-white">
              Copyright © Classy Style 2024 Development{" "}
              <Link
                className="cursor-pointer underline"
                target="_blank"
                to="https://ioniccorporation.com/"
              >
                IONIC Corporation
              </Link>
            </p>
            <div className="flex-1 mb-20">
              <img
                src="https://i.ibb.co/XLjLNxR/SSLCommerz-Pay-With-logo-All-Size-01.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
