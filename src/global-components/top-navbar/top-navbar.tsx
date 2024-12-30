import DesktopNavbar from "./desktop-navbar/desktop-navbar"
import MobileNavbar from "./mobile-navbar/mobile-navbar"

const TopNavbar = () => {
  return (
    <div className="h-[90px] sticky top-0 border-b border-gray-200 bg-[#fff] z-20">
      <div className="hidden md:block ">
        <DesktopNavbar />
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </div>
  )
}

export default TopNavbar