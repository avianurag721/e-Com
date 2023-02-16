import React from "react";
import {  Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsMailbox2 } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div className=" overflow-hidden top-0  ">
        {/* navvbar top strip */}

        <div className="strip w-full flex   justify-evenly  text-white bg-zinc-600">
          <p>Free Shipping Over $100 & Free Returns</p>
          <div className="flex">
            <p className="flex justify-center items-center px-4">
              <BsPhone />

              <a className="border-r-[2px] px-2" href="tel:+91 9140931309">
                {" "}
                +919140931309
              </a>
            </p>
            <p className="flex justify-center items-center px-4">
              <BsMailbox2 />
              <a
                className="border-r-[2px] px-2"
                href="mailto:avianurag.721@gamil.com"
              >
                Mail Us
              </a>
            </p>
          </div>
        </div>

        {/* navbar */}
        <div className="nav bg-zinc-800 text-white flex justify-center py-2">
          <div className="  flex w-[90%] flex-wrap justify-between">
            {/* navbar logo */}
            <div className="logo border-2 bg-red-900 text-white p-[0.5rem] font-bold items-center flex rounded-full ">
              <Link> <h1>Lucknow Furniture</h1> </Link>
            </div>

            {/* navbar search bar */}
            <div className="searchbar pt-2 rounded w-5/12">
              <div className="form-control flex flex-row bg-black-200 border  rounded-md items-center">
                <input
                  type="text"
                  placeholder="Search Product here..."
                  className="input text-black focus:outline-0 border-2   rounded w-11/12 "
                />
                <div className="flex items-center justify-center ml-4">
                  {" "}
                  <BsSearch />
                </div>
              </div>
            </div>

            {/* navbar right ppart */}
            <div className="rightPart flex flex-wrap select-none gap-4">
              <div className="flex  items-center flex-col ">
                <img
                  src="images/images/compare.svg"
                  className=" h-6 font-bold "
                  alt="Compare"
                />
                <p>Compare</p>
              </div>
              <div className="flex items-center flex-col ">
                <img
                  src="images/images/wishlist.svg"
                  className=" h-6 font-bold "
                  alt="Wishlist"
                />
                <p>Wishlist</p>
              </div>
              <div className="flex items-center flex-col">
                <img
                  src="images/images/user.svg"
                  className=" h-6 font-bold "
                  alt="user"
                />

                <p>User Login</p>
              </div>
              <div className="flex relative items-center  flex-col ">
                <img
                  src="images/images/cart.svg"
                  className="h-6 font-bold "
                  alt="cart"
                />
                <p className="px1  ">Cart</p>
                <div className=" absolute  -top-3 right-2 gap-2 ">0</div>
              </div>
            </div>
          </div>
        </div>
        {/* botoom strip navbar  */}
        <div className="navbar-bottom justify-center  text-white bg-zinc-600 flex">
          <div className="navbar-bottom w-[90%] flex-wrap  text-white  flex">
            <div className="collaps border-r-2 space-x-3 flex">
              <img src="images/images/menu.svg" alt="menu" />
              <span></span>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn m-1">
                  Shop Categories
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content text-white bg-zinc-600 menu  shadow rounded-box w-52"
                >
                  <li>
                    <a href="/">Item 1</a>
                  </li>
                  <li>
                    <a href="/">Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* uls  */}
            <div className="lists mx-4 flex-wrap flex justify-center items-center  ">
              <ul className="flex flex-wrap justify-center items-center space-x-2">
                <li className=" transition-all  hover:text-black hover:bg-zinc-400 px-4 rounded-md">
                  <a href="/">HOME</a>{" "}
                </li>
                <li className="transition-all  hover:text-black hover:bg-zinc-400 px-4 rounded-md">
                  <a href="/"> OUR STORE </a>
                </li>
                <li className=" transition-all  hover:text-black hover:bg-zinc-400 px-4 rounded-md">
                  <a href="/"> BLOGS </a>
                </li>
                <li className=" transition-all  hover:text-black hover:bg-zinc-400 px-4 rounded-md">
                  <a href="/"> CONTACT </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
