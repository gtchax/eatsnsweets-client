import { PlayCircleIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex min-h-[calc(100vh - 74px)]">
      <div
        className="flex-1 flex flex-col z-10  relative -mt-20"
        // data-aos="fade-up"
      >
        <img
          src="/bg-cakes.jpg"
          className="w-full h-full object-cover overflow-hidden "
          alt="bakery"
        />

        {/* <div className="inset-0 w-full  -z-10 absolute  bg-[#c37960]"></div> */}
      </div>

      <div className="flex-[1.22] flex flex-col justify-between">
        <div
          className="flex-1 flex flex-col justify-center p-16"
          data-aos="fade-left"
        >
          <h1 className="font-semibold text-[#121212] text-[80px] playfair mt-8 ml-8 mb-0 mr-0">
            Freshly <span className="text-[#894e3f]">baked </span>delights for
            all
          </h1>
          <p className="font-medium text-[18px] jakarta">
            Feel the taste of freshly German baked pastries to sweet treats in
            Cape Town.
          </p>

          <div className="flex flex-wrap gap-9 mt-[41px] mr-0 mb-0 ml-[41px]">
            <button className="outline-none cursor-pointer min-w-[212px] p-5 text-white font-semibold text-[18px] rounded-[36px] bg-[#894e3f] shadow-lg">
              Order Now
            </button>
            <button className="jakarta flex items-center outline-none border-none text-[#894e3f]">
              <PlayCircleIcon className="w-8 h-8 text-[#894e3f] " />
              <span>How to Order</span>
            </button>
          </div>
        </div>
{/* 
        <div className="bg-white py-8 px-16 flex flex-wrap gap-2" >
        <div className="gap-2 flex-1 items-center justify-center flex">
          <h4>24<span>k+</span></h4>
          <p>Happy Customers</p>
        </div>

        <div className="flex-1 flex gap-2 items-center pl-5 border-l ">
          <img src="assets/user.png" alt="user" />
          <p>"This is the best Japanese food delivery service that ever existed."</p>
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default Hero;
