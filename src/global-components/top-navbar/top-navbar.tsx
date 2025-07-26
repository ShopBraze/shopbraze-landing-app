import DesktopNavbar from "./desktop-navbar/desktop-navbar"
import MobileNavbar from "./mobile-navbar/mobile-navbar"

const TopNavbar = () => {
  return (
    <div className="sticky top-0 border-b border-[#F2F2F2] bg-[#fff] z-20">
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