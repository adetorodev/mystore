import React from "react";
import Star from "../../assets/Icons/star.svg";
import { MdStars,MdCommute } from "react-icons/md";
import { RiSecurePaymentLine,RiMedal2Line } from "react-icons/ri";
import { GiBeerBottle } from "react-icons/gi";

function TopMenu() {
  return (
    <div className="bg-gray-100 mt-12 flex flex-row h-8 items-center">
      <div className="flex flex-row ml-10 mr-8 space-x-">
        <MdStars className="text-orange-600 mt-1" />
        <a href="#" className="text-orange-600 text-xs font-light ml-1 mt-1 hover:underline">
          Sell on Jumia
        </a>
      </div>
      <div className="flex flex-row text-center font-['sofia'] ml-36 space-x-4  ">
        <h2 className="mt-1 tracking-tighter flex">JUMIA<MdStars className="text-orange-500 mt-1 w-3" /></h2>
        <h2 className="text-gray-400 hover:text-blue-500 flex mt-1 tracking-tighter font-['sofia']"><RiSecurePaymentLine />PAY</h2>
        <h2 className="text-gray-400 hover:text-orange-500 flex mt-1 tracking-tighter font-['sofia']"><RiMedal2Line className="rotate-45" />FOOD</h2>
        <h2 className="text-gray-400 hover:text-orange-800 flex mt-1 tracking-tighter font-['sofia']"><GiBeerBottle />PARTY</h2>
        <h2 className="text-gray-400 hover:text-orange-500 flex mt-1 tracking-tighter font-['sofia']">
          <MdCommute />LOGISTICS
        </h2>
      </div>
    </div>
  );
}

export default TopMenu;
