import WebsiteLogo from "assets/website-logo/shopbraze-logo.svg"
import Image from "next/image"
import FacebookIcon from "assets/icons/footer-section/facebook-icon.svg"
import InstagramIcon from "assets/icons/footer-section/instagram-icon.svg"
import TwitterIcon from "assets/icons/footer-section/twitter-icon.svg"
import LinkedinIcon from "assets/icons/footer-section/linkedin-icon.svg"

import ShopBrazeHalfImageFooter from "assets/images/shopbraze-half-image-footer.svg"

import { ScrollToElement } from "utils/scroll-to-element"

const SocialMediaLinksData = [
  {
    url: "https://www.facebook.com/shop.braze",
    icon: FacebookIcon
  },
  {
    url: "https://www.instagram.com/shop.braze",
    icon: InstagramIcon
  },
  {
    url: "https://www.linkedin.com/company/shopbraze/",
    icon: LinkedinIcon
  },
]


const Footer = () => {
  return (
    <div className="bg-[#F7FAF8] max-w-[1440px] mx-auto">
      <div className="px-[120px] py-20 flex justify-between">
        <div className="">
          <div className="space-y-2">
            <Image src={WebsiteLogo} alt="Website Logo" />
            <p className="text-[#017356] text-2xl font-semibold leading-[29px]">ShopBraze </p>
          </div>
          <p className="mt-4 text-[#0B4627] font-medium">
            Making the world a better cloth through our <br />shopbraze and make a cheerful
          </p>
          <div className="mt-6 flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 3C16.968 3 21 7.032 21 12C21 16.968 16.968 21 12 21C7.032 21 3 16.968 3 12C3 7.032 7.032 3 12 3ZM12 4.8C8.022 4.8 4.8 8.022 4.8 12C4.8 15.978 8.022 19.2 12 19.2C15.978 19.2 19.2 15.978 19.2 12C19.2 8.022 15.978 4.8 12 4.8ZM12 7.5C13.638 7.5 15.0717 8.3757 15.8592 9.6852L14.3166 10.6113C14.0738 10.2065 13.7292 9.87245 13.3171 9.6424C12.9049 9.41235 12.4397 9.29437 11.9677 9.30021C11.4957 9.30605 11.0336 9.43551 10.6272 9.67568C10.2209 9.91585 9.88464 10.2583 9.65196 10.669C9.41929 11.0797 9.29833 11.5442 9.30115 12.0161C9.30398 12.4881 9.43048 12.9511 9.66805 13.359C9.90562 13.7668 10.246 14.1053 10.6551 14.3406C11.0643 14.5759 11.528 14.6998 12 14.7C12.4663 14.7003 12.9248 14.5797 13.3306 14.3501C13.7365 14.1204 14.0759 13.7895 14.3157 13.3896L15.8592 14.3148C15.3534 15.1596 14.5845 15.8151 13.6703 16.1808C12.7562 16.5466 11.7473 16.6023 10.7984 16.3396C9.84952 16.0768 9.01303 15.51 8.41722 14.7261C7.82142 13.9423 7.49921 12.9846 7.5 12C7.5 9.516 9.516 7.5 12 7.5Z" fill="#525866" />
            </svg>
            <p className="text-[#525866] font-medium whitespace-nowrap">2025 ShopBraze, Inc. All rights reserved.</p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          {
            ["Home", "Features", "Testimonials", "Pricing"].map((item, index) => {
              return (
                <p className="text-sm md:text-base font-medium cursor-pointer hover:text-primary-400 text-gray-500" key={index} onClick={() => { ScrollToElement(item?.toLowerCase()) }}>{item}</p>
              )
            })
          }
        </div>

        <div className="flex gap-5 items-center">
          {
            SocialMediaLinksData.map((item, index) => {
              return (
                <div className="w-[40px] h-[40px] bg-[#fff] border border-gray-200 rounded-full flex items-center justify-center cursor-pointer" key={index} onClick={() => { window?.open(item.url, "_blank") }}>
                  <Image src={item.icon} alt={item.icon} />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="mt-13 w-full flex justify-center">
        <Image src={ShopBrazeHalfImageFooter} alt="ShopBraze Half Image Footer" />
      </div>
    </div>
  )
}

export default Footer