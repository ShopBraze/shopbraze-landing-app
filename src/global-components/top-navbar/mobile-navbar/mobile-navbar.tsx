

import Image from "next/image"
import ShopbrazeDesktopLogo from "assets/website-logo/desktop-logo.svg"
import Button from "common-components/button/button"
import ThreeDashHorizontalBarIcon from "assets/icons/three-dash-horizontal-bar-nav.svg"
import BookAFreeDemo from "global-components/buttons/book-a-free-demo/book-a-free-demo"
import CrossIcon from "assets/icons/cross-navbar.svg"
import { useState } from "react"
import { ScrollToElement } from "utils/scroll-to-element"
import useNavbar from "../use-navbar"

const MobileNavbar = () => {
  // const { activeDiv } = useNavbar()

  const [openSidebar, setOpenSidebar] = useState(false)
  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="flex flex-col xs:flex-row items-center gap-1 xs:gap-3 md:gap-6">
          <Image src={ShopbrazeDesktopLogo} alt="shopbraze_logo.svg" height={80} width={100} className="h-14 w-14 md:h-20 md:w-24" />
          <p className="text-primary-500 font-bold text-sm md:text-2xl uppercase">Shop Braze</p>
        </div>
        <div className="flex items-center gap-5">
          <BookAFreeDemo />
          <Button onClick={handleToggleSidebar}>
            <Image src={ThreeDashHorizontalBarIcon} alt="nav-dash.svg" className="" />
          </Button>
        </div>
      </div>
      {
        <div className={`fixed top-0 bottom-0 overflow-hidden right-0 bg-[#fff] w-[250px] border border-gray-200 transform transition-transform duration-300 ease-in-out ${openSidebar ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="w-full flex bg-primary-700 justify-end p-3">
            <Image src={CrossIcon} alt="cross.svg" onClick={handleToggleSidebar} className="cursor-pointer" />
          </div>
          <div className="p-5 space-y-5">
            {
              ["Homepage", "Testimonials", "Pricing"].map((item, index) => {
                return (
                  <p className="text-sm md:text-base font-medium cursor-pointer hover:text-primary-400 text-gray-500" key={index}
                    onClick={() => {
                      handleToggleSidebar()
                      ScrollToElement(item?.toLowerCase())
                    }}>
                    {item}
                  </p>
                )
              })
            }
          </div>
          {/* <Button variant="primary" className="mt-5 text-[#fff] font-medium !rounded-full">Sign In</Button> */}
        </div>
      }
    </>
  )
}

export default MobileNavbar