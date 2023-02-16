import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const SpecialProducts = () => {
  return (
    <>
      <div className="spclProduct rounded-md border-2 w-[24%]">
        <div className="upper flex  flex-row">
          <div className="img relative w-[50%] ">
            <img src="images/images/watch.jpg" alt="" />
            <div className="absolute left-2 top-2">
              <span className=" bg-red-600 p-1 text-sm  rounded-xl">
                -40% off
              </span>
            </div>
            <div className="absolute right-2 top-2">
              <AiOutlineHeart/>
            </div>
          </div>
          <div className="info w-[50%] flex flex-col gap-2  justify-center items-start">
            <span className=" text-red-600 ">Fire-Bolt</span>
            <div className="itemname leading-4">
              Firebolt Smart Watch with 10 days battery life and a features...
            </div>
            <span className=" text-yellow-400 ">stars</span>
            <span className="price text-red-600">
              $60.00 <strike>$75.00</strike>
            </span>
          </div>
        </div>
        <div className="lower flex gap-2 p-3  ">
          <div className="img flex w-[40%] gap-2 flex-row">
            <div className="lowermig w-[50%] border-2 ">
              <img src="images/images/watch.jpg" alt="" />
            </div>
            <div className="lowermig w-[50%] border-2  ">
              <img src="images/images/watch.jpg" alt="" />
            </div>
          </div>
          <div className="options w-[60%] ">
            <div className=" rounded-md bg-slate-800 text-white w-[40%] flex justify-center items-center ">
              Options
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProducts;
