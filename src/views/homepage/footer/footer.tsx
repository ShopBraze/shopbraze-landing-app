import WebsiteLogo from "assets/website-logo/desktop-logo.svg"
import Image from "next/image"
import FacebookIcon from "assets/icons/footer-section/facebook-icon.svg"
import InstagramIcon from "assets/icons/footer-section/instagram-icon.svg"
import TwitterIcon from "assets/icons/footer-section/twitter-icon.svg"
import SocialLinkscon from "assets/icons/footer-section/social-icon.svg"
import { ScrollToElement } from "utils/scroll-to-element"

const SocialMediaLinksData = [
  {
    url: "",
    icon: FacebookIcon
  },
  {
    url: "",
    icon: InstagramIcon
  },
  {
    url: "",
    icon: TwitterIcon
  },
  {
    url: "",
    icon: SocialLinkscon
  }
]


const Footer = () => {
  return (
    <div className="pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
      <div className="space-y-3 md:space-y-4 text-center md:text-left">
        <div className="pt-4 flex flex-col gap-y-1 justify-center items-center md:items-start">
          <Image src={WebsiteLogo} alt="shopbraze.png" className="h-[50px] md:h-auto" />
          <p className="text-sm md:text-lg font-bold text-primary-700">SHOP BRAZE</p>
        </div>
        <p className="text-sm md:text-base text-gray-500 font-medium">Making the world a better cloth through our <br className="hidden md:block" /> shopbraze and make a cheerful</p>
        <div className="flex gap-6 items-center justify-center md:justify-normal">
          {
            SocialMediaLinksData?.map((item, index) => {
              return (
                <Image src={item.icon} alt="social.svg" className="cursor-pointer" />
              )
            })
          }
        </div>
      </div>

      <div className="flex-1 flex md:justify-evenly">
        <div className="space-y-4 flex-1">
          {
            ["Testimonials", "Pricing", "Offers"].map((item, index) => {
              return (
                <p className="text-sm md:text-base font-medium cursor-pointer hover:text-primary-400 text-gray-500" key={index} onClick={() => { ScrollToElement(item?.toLowerCase()) }}>{item}</p>
              )
            })
          }
        </div>
        <div className="space-y-4 flex-1">
          {
            ["Shipping", "Conversion", "Marketing", "Website", "Whatsapp"].map((item, index) => {
              return (
                <p className="text-sm md:text-base font-medium cursor-pointer hover:text-primary-400 text-gray-500" key={index} >{item}</p>
              )
            })
          }
        </div>
        <div className="space-y-4 flex-1">
          {
            ["Claim", "Privacy", "Terms"].map((item, index) => {
              return (
                <p className="text-sm md:text-base font-medium cursor-pointer hover:text-primary-400 text-gray-500" key={index}>{item}</p>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Footer