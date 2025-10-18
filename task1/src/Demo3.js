import React from "react";
import WowImage from "./assests/cat.jpg";
import { CgProfile } from "react-icons/cg";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";

function Demo3() {
  return (
    <div className="bg-orange-500 w-full h-[300px] grid grid-cols-1 md:grid-cols-4">
      <div className="bg-purple-600 flex justify-center items-center">
        <FaRegFaceKissWinkHeart className="text-green-300 text-5xl" />
      </div>
      <div className="bg-pink-600 flex justify-center items-center">orange</div>
      <div className="bg-purple-600 flex justify-center items-center">
        mango
        <CgProfile className="text-white text-8xl" />
      </div>
      <div className="bg-green-500 flex justify-center items-center">
        <img src={WowImage} alt="wowimage" />
      </div>
    </div>
  );
}

export default Demo3;
