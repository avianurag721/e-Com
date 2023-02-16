import React from "react";
import Marquee from "react-fast-marquee";
import BlogCart from "../components/BlogCart";
import SpecialProducts from "../components/SpecialProducts";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1">
        <div className="home-section flex  bg-red-100  justify-center">
          <div className="w-[90%]  py-[3rem] flex-col md:flex-row flex justify-between">
            <div className="banner-left flex justify-center w-[50%] relative">
              <img
                className="rounded-md  w-[80%]"
                src="images/images/main-banner-1.jpg"
                alt="home-banner"
              />
            </div>

            {/* right   */}
            <div className="bannerright flex w-6/12 gap-5  justify-center flex-wrap  relative">
              <div className="rightitems flex relative">
                <img
                  className=" rounded"
                  src="images/images/catbanner-01.jpg"
                  width={250}
                  alt="home-baner"
                />
                <div className="absolute pt-4 pl-4 space-y-2">
                  <span className=" text-amber-800">BEST PRICE </span>
                  <h1>iPad S12+Pro</h1>
                  <div className="flex leading-4 flex-col">
                    <span>From $999.00</span>
                    <span>or $41.61/mo</span>
                  </div>
                </div>
              </div>
              <div className="rightitems flex relative">
                <img
                  className="rounded"
                  src="images/images/catbanner-02.jpg"
                  width={250}
                  alt="home-baner"
                />
                <div className="absolute pt-4 pl-4 space-y-2">
                  <span className=" text-amber-800">BEST PRICE </span>
                  <h1>iPad S12+Pro</h1>
                  <div className="flex leading-4 flex-col">
                    <span>From $999.00</span>
                    <span>or $41.61/mo</span>
                  </div>
                </div>
              </div>
              <div className="rightitems flex relative">
                <img
                  className=" rounded"
                  src="images/images/catbanner-03.jpg"
                  width={250}
                  alt="home-baner"
                />
                <div className="absolute pt-4 pl-4 space-y-2">
                  <span className=" text-amber-800">BEST PRICE </span>
                  <h1>iPad S12+Pro</h1>
                  <div className="flex leading-4 flex-col">
                    <span>From $999.00</span>
                    <span>or $41.61/mo</span>
                  </div>
                </div>
              </div>
              <div className="rightitems flex relative">
                <img
                  className="rounded"
                  src="images/images/catbanner-04.jpg"
                  width={250}
                  alt="home-baner"
                />
                <div className="absolute pt-4 pl-4 space-y-2">
                  <span className=" text-amber-800">BEST PRICE </span>
                  <h1>iPad S12+Pro</h1>
                  <div className="flex leading-4 flex-col">
                    <span>From $999.00</span>
                    <span>or $41.61/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-wrapper-2  flex flex-col justify-center items-center ">
          <div className="services w-[90%] py-6 flex flex-wrap justify-evenly ">
            <div className="service flex  ">
              <img
                className="mx-2  "
                src="images/images/service.png"
                width={50}
                alt=""
              />
              <div className="">
                <h1 className="font-bold">Free Shipping</h1>
                <span className=" text-sm ">From all order over $100</span>
              </div>
            </div>
            <div className="service flex  ">
              <img
                className="mx-2  "
                src="images/images/service-02.png"
                width={50}
                alt=""
              />
              <div className="">
                <h1 className="font-bold">Daily Surprize offer</h1>
                <span className=" text-sm ">Save up t0 25% off</span>
              </div>
            </div>
            <div className="service flex  ">
              <img
                className="mx-2  "
                src="images/images/service-03.png"
                width={50}
                alt=""
              />
              <div className="">
                <h1 className="font-bold">Support 24/7</h1>
                <span className=" text-sm ">shop with an expert</span>
              </div>
            </div>
            <div className="service flex  ">
              <img
                className="mx-2  "
                src="images/images/service-04.png"
                width={50}
                alt=""
              />
              <div className="">
                <h1 className="font-bold">Affordable Price</h1>
                <span className=" text-sm ">Get factory direct prize</span>
              </div>
            </div>
            <div className="service flex  ">
              <img
                className="mx-2  "
                src="images/images/service-05.png"
                width={50}
                alt=""
              />
              <div className="">
                <h1 className="font-bold">Secure Payment</h1>
                <span className=" text-sm ">100% Payment Protected</span>
              </div>
            </div>
          </div>
          <div className="categories bg-white flex-wrap w-[90%] p-6 py-7 flex  justify-between gap-[1px] ">
            <div className="itemss flex justify-center items-center border-r-2 border-b-2 bg-white rounded px-4">
              <div>
                <h1 className="text-bold">Cameras & Videos</h1>
                <span>10 Items</span>
              </div>
              <img src="images/images/watch.jpg" width={120} alt="" />
            </div>
            <div className="itemss border-r-2 border-b-2 flex justify-center items-center bg-white rounded px-4">
              <div>
                <h1 className="text-bold">Cameras & Videos</h1>
                <span>10 Items</span>
              </div>
              <img src="images/images/headphone.jpg" alt="" />
            </div>
            <div className="itemss border-r-2 border-b-2 flex justify-center items-center bg-white rounded px-4">
              <div>
                <h1 className="text-bold">Cameras & Videos</h1>
                <span>10 Items</span>
              </div>
              <img src="images/images/tv.jpg" alt="" />
            </div>
            <div className="itemss border-r-2 border-b-2 flex justify-center items-center bg-white rounded px-4">
              <div>
                <h1 className="text-bold">Cameras & Videos</h1>
                <span>10 Items</span>
              </div>
              <img src="images/images/camera.jpg" alt="" />
            </div>
            <div className="itemss border-r-2  flex justify-center items-center bg-white rounded px-4">
              <div>
                <h1 className="text-bold">Cameras & Videos</h1>
                <span>10 Items</span>
              </div>
              <img src="images/images/watch.jpg" width={120} alt="" />
            </div>
            <div className="itemss border-r-2  flex justify-center items-center bg-white rounded px-4">
              <div>
                <h1 className="text-bold">Cameras & Videos</h1>
                <span>10 Items</span>
              </div>
              <img src="images/images/headphone.jpg" alt="" />
            </div>
            <div className="itemss border-r-2  flex justify-center items-center bg-white rounded px-4">
              <div>
                <h1 className="text-bold">Cameras & Videos</h1>
                <span>10 Items</span>
              </div>
              <img src="images/images/tv.jpg" alt="" />
            </div>
            <div className="itemss border-r-2  flex justify-center items-center bg-white rounded px-4">
              <div>
                <h1 className="text-bold">Cameras & Videos</h1>
                <span>10 Items</span>
              </div>
              <img src="images/images/camera.jpg" alt="" />
            </div>
          </div>
          <div className="marque hidden lg:block  bg-white flex-wrap w-[90%] p-4   justify-between gap-[1px]  ">
            <Marquee className="flex">
              <img
                className="mx-8"
                src="images/images/brand-01.png"
                alt="brand"
              />
              <img
                className="mx-8"
                src="images/images/brand-02.png"
                alt="brand"
              />
              <img
                className="mx-8"
                src="images/images/brand-03.png"
                alt="brand"
              />
              <img
                className="mx-8"
                src="images/images/brand-04.png"
                alt="brand"
              />
              <img
                className="mx-8"
                src="images/images/brand-05.png"
                alt="brand"
              />
              <img
                className="mx-8"
                src="images/images/brand-06.png"
                alt="brand"
              />
              <img
                className="mx-8"
                src="images/images/brand-07.png"
                alt="brand"
              />
              <img
                className="mx-8"
                src="images/images/brand-08.png"
                alt="brand"
              />
            </Marquee>
          </div>
          <div className="blogs w-full bg-white justify-center py-7 items-center flex flex-col">
            <div className="flex items-start w-[90%]">
              <h1 className="text-4xl">Our Latest Blogs</h1>
            </div>
            <div className="w-[90%] gap-4 flex  flex-wrap ">
              <BlogCart />
              <BlogCart />
              <BlogCart />
              <BlogCart />
            </div>
          </div>
          <div className="homeSpecial w-full bg-white justify-center py-7 items-center flex flex-col">
            <div className="flex flex-col  items-start   w-[90%]">
              <div className="heading text-2xl"> Special Products </div>
              <div className="items flex-wrap flex gap-4">
                <SpecialProducts />
                <SpecialProducts />
                <SpecialProducts />
                <SpecialProducts />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
