



const MarqueeNavar = () => {
    return (
        <div className="bg-[#4F3326]  text-white lg:flex lg:justify-between hidden ">
       
            <div className="grow relative">
                <marquee>
            Welcome to our MAK family. MAK Taste Shop is a concern of M.M Khan Foods. Please explore our web site & place order to taste the best. Any Quarry # 01962-412149
            </marquee>
            </div>
            <div className="flex justify-center items-center">


             <div className="flex gap-2 px-5">
                <p className="flex justify-center items-center w-28">|
                <button className="pl-2">Track Order</button>
                </p>
                <p className="flex justify-center items-center w-28">|
                <button className="pl-2">Need Help?</button>
                </p>
            </div>

            </div>
         


        </div>
    );
};

export default MarqueeNavar;