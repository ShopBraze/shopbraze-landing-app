import BookAFreeDemo from "global-components/buttons/book-a-free-demo/book-a-free-demo";
import DesktopHeroImage from "assets/images/desktop-hero-image.webp"
import MobileHeroImage from "assets/images/mobile-hero-image.webp"
import Image from "next/image";

const TopSection = () => {
  return (
    <div className="pt-[76px] pb-10" id="home">
      <div className="text-center space-y-2">
        <p className="text-[#0B4627] text-[52px] font-bold leading-[60px]">Run Your D2C Brand — <span className="bg-[linear-gradient(90deg,_#0B4627_0%,_#1FC16B_92.31%)] bg-clip-text text-transparent">Profitably</span></p>
        <p className="text-[#0B4627] text-[52px] font-bold leading-[60px]">Without the Chaos</p>
      </div>
      <div className="mt-5">
        <p className="text-[#0B4627] text-center text-lg font-medium leading-7">Everything you need to launch, grow, and scale your online store — from storefront to <br />shipping to ad campaigns — all in one platform.</p>
      </div>
      <div className="mt-7 mx-auto  flex justify-center">
        <BookAFreeDemo />
      </div>
      {/* <div className="mt-6">
        <Image src={DesktopHeroImage} alt="DesktopHeroImage" className="rounded-[16px] w-1/2 mx-auto" />
        <Image src={MobileHeroImage} alt="MobileHeroImage" className="rounded-[16px]  flex-1" />
      </div> */}
    </div>
  )
}

export default TopSection
