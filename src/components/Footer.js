import React from "react";
import { BsTwitter, BsGithub, BsFacebook, BsYoutube } from "react-icons/bs";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main bg-zinc-700 text-white">
      {/* upper footer  */}
      <div className="upperFooter w-[90%] h-[5rem] ">
        <div className="flex py-3 justify-evenly  item-center">
          <div className="my-1  flex w-6/12  item-center">
            <img src="images/images/newsletter.png" alt="newsletter" />
            <span className="mt-2 pl-4 font-bold">
              Subscribe Our Newsletter
            </span>
          </div>
          <div className="search flex w-4/12 justify-center rounded-md border items-center">
            <input
              type="text "
              placeholder="Enter Your E-mail..."
              className="input py-2 w-full  text-black focus:outline-0   pl-2 rounded  "
            />
            <button className="bg-zinc-800 hover:bg-zinc-600 rounded-md text-white  px-3 py-2 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* mid footer  */}
      <div className="mid-footer flex justify-center bg-zinc-800 py-4">
        <div className=" w-[90%] flex justify-between ">
          <div className="contact ">
            <div>
              <h1 className="font-bold">Contact Us </h1>
              <p>Demo Store</p>
              <p>No.1234,Integral university,</p>
              <p>Lucknow,INDIA</p> <br />
              <a href="tel:+91 9140931309">+91 9140931309</a> <br />
              <a href="mailto:avianurag.721@gmail.com">demo@gmail.com</a>
            </div>
            <div className="icons flex">
              <div className="m-2">
                <a href="/">
                  <BsTwitter />
                </a>
              </div>
              <div className="m-2">
                <a href="/">
                  <BsGithub />
                </a>
              </div>
              <div className="m-2">
                <a href="/">
                  <BsFacebook />
                </a>
              </div>
              <div className="m-2">
                <a href="/">
                  <BsYoutube />
                </a>
              </div>
            </div>
          </div>
          {/* information  */}
          <div className="contact leading-6">
            <h1 className="font-bold">Information </h1>
            <div className="flex flex-col  leading-9">
              <p>Privacy Policy</p>
              <p>Refund Policy</p>
              <p>Shipping Policy</p>
              <p>Terms of Service</p>
              <p>Blogs</p>
            </div>
          </div>
          {/* Accounts  */}
          <div className="contact">
            <h1 className="font-bold">Accounts </h1>
            <div className="flex flex-col  leading-9">
              <p>Search</p>
              <p>About Us</p>
              <p>Faq</p>
              <p>Contact</p>
              <p>Size Chart</p>
            </div>
          </div>
          {/* quick links  */}
          <div className="contact">
            <h1 className="font-bold">Quick Links</h1>
            <div className="flex flex-col  leading-9">
              <Link>Accessories</Link>
              <Link>Laptops</Link>
              <Link>Headphones</Link>
              <Link>Smart Watches</Link>
              <Link>Tablets</Link>
            </div>
          </div>
          {/* our apps  */}
          <div className="contact mr-4 overflow-x-hidden">
            <h1 className="font-bold">Our apps</h1>
            <p>
              Download Our apps and get Extra 15% off <br /> on your First Order
            </p>
            <div className="flex flex-wrap space-x-6  mt-4 ">
              <div className="flex item-center bg-red-300 rounded-lg  justify-center w-[40%]">
                <div className="flex item-center text-2xl justify-center  ">
                  <FaGooglePlay className=" text-black mt-3 mr-1 flex item-center justify-center " />
                </div>
                <div className="text-black w-full">
                  <span className="text-xs leading-0"> Gey it On</span>
                  <h3>Google Play</h3>
                </div>
              </div>
              <div>
                <div className="flex item-center bg-red-300 rounded-lg  justify-center w-[120%]">
                  <div className="flex item-center text-2xl justify-center  ">
                    <FaAppStoreIos className=" text-black mt-3 mr-1 flex item-center justify-center " />
                  </div>
                  <div className="text-black">
                    <span className="text-xs leading-0"> Gey it On</span>
                    <h3>App Store</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* lower footer  */}
      <div className="lower-footer justify-center flex ">
        <div className="powered justify-center flex w-[90%]">
          <span>&copy;{new Date().getFullYear()} </span>{" "}
          <span>Powered By Developer</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
