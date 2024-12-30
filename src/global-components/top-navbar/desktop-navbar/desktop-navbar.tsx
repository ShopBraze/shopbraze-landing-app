
import Image from "next/image"
import ShopbrazeDesktopLogo from "assets/website-logo/desktop-logo.svg"
import { NavbarPaths } from "constants/navbar"
import { useEffect, useState } from "react";
import { ScrollToElement } from "utils/scroll-to-element";
import useNavbar from "../use-navbar";


const DesktopNavbar = () => {
  const { activeDiv } = useNavbar()

  return (
    <div className="flex justify-between items-center h-[90px] sticky top-0 border-b border-gray-200 bg-[#fff] z-20">
      <div className="flex items-center gap-3 md:gap-6">
        <Image src={ShopbrazeDesktopLogo} alt="shopbraze_logo.svg" height={80} width={100} className="h-14 w-14 md:h-20 md:w-24" />
        <p className="text-primary-500 font-bold text-2xl uppercase">Shop Braze</p>
      </div>
      <div className="flex items-center gap-2">
        {
          NavbarPaths.map((item) => {
            return (
              <div className="flex gap-3 items-center py-2 px-3 rounded-lg bg-gray-100 cursor-pointer" key={item.id} onClick={() => { ScrollToElement(item.name?.toLowerCase()) }}>
                {activeDiv === item.name?.toLowerCase() && <div className="h-2 w-2 rounded-full bg-primary-500" />}
                <p className="text-sm text-gray-600 font-semibold">{item.name}</p>
              </div>
            )
          })
        }
      </div>
      {/* <Button variant="primary" className="text-[#fff] font-medium !rounded-full">Sign In</Button> */}
    </div>
  )
}

export default DesktopNavbar