
import BannerDesktopImage from "assets/images/landing-page-banner-image-desktop.svg";
import BannerMobileImage from "assets/images/landing-page-banner-image-mobile.svg";
import AutoScrollbar from "common-components/aut-scrollbar/auto-scrollbar";
import ChevronDownIcon from "assets/icons/chevron-down-rounded.svg"
import BookAFreeDemo from "global-components/buttons/book-a-free-demo/book-a-free-demo";
import Image from "next/image";
import Button from "common-components/button/button";
import ExperienceRating from "./experience-rating/experience-rating";
const TopSection = () => {
  return (
    <div className="w-full flex-col space-y-10 md:flex-row flex justify-between" id="homepage">

      <div className="space-y-5 md:space-y-12">
        <div className="text-3xl md:text-5xl md:leading-[65px] font-semibold text-gray-800  text-center md:text-left">
          <p>Run Your D2C Business</p>
          <p> <span className="text-primary-700">“Profitably”</span></p>
        </div>
        <p className="text-lg md:text-3xl font-semibold text-gray-700 text-center md:text-left">Your all-in-one stack to run profitable,<br className="hidden md:block" /> streamlined storefronts with ease</p>
        <div className="flex justify-center md:justify-normal">
          <BookAFreeDemo />
        </div>
        <div className="hidden md:block pt-2">
          <p className="cursor-pointer font-bold text-gray-500">Seamless Shopping Experience <br />Starts Here &rarr;</p>
        </div>
      </div>

      <div className="flex justify-center md:hidden relative">
        <Image src={BannerMobileImage} alt="BannerImage.svg" className="" />
        <div className="absolute right-12 top-5">
          <ExperienceRating />
        </div>
      </div>

      <div className="hidden md:block relative">
        <Image src={BannerDesktopImage} alt="BannerImage.svg" className="" />
        <div className="absolute right-5 top-5">
          <ExperienceRating />
        </div>
      </div>
    </div >
  )
}

export default TopSection
