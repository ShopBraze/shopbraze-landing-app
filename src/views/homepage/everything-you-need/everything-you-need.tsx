
import useEveryThingYouNeed from './use-everything-you-need'
import ShippingBox from 'assets/icons/everything-you-need/shipping-box.svg'
import CustomerPurchaseOneImage from 'assets/icons/everything-you-need/customer-purchase-1.svg'
import CustomerPurchaseTwoImage from 'assets/icons/everything-you-need/customer-purchase-2.svg'
import DesktopHeroImage from "assets/images/desktop-hero-image.webp"
import Image from 'next/image'

const EverythingYouNeed = () => {
  const { activeTab, handleTabChange } = useEveryThingYouNeed()

  return (
    <div className='max-w-[1440px] mx-auto px-4 md:px-[120px] py-10 md:py-[90px]'>
      <div className="text-center space-y-3">
        <p className="text-[#0B4627] text-2xl md:text-[48px] font-semibold md:leading-[56px]">Everything you need at one Place</p>
        <p className="text-sm md:text-lg text-[#0B4627] md:leading-7">The all in platform to create, grow and manage your online store.</p>
      </div>

      <div className="pt-5 md:pt-10 flex flex-col  items-center gap-y-10 md:gap-y-[70px]">
        <div className="w-fit p-1 bg-[#F7FAF8] border border-[#EFF4F1] rounded-[14px] flex gap-1">
          {
            ["Website", "Marketing", "Shipping"].map((tab, index) => (
              <div
                className={`w-fit p-1 cursor-pointer ${activeTab === tab?.toLowerCase() ? 'bg-[#DDF2E7] border border-[#EFF4F1]' : ''}  rounded-[14px] flex gap-1`}
                key={index}
                onClick={() => handleTabChange(tab?.toLowerCase() as "shipping" | "marketing" | "website")}
              >
                <div className="p-1.5 md:p-3 flex justify-center items-center rounded-[10px] w-24 md:w-[112px]">
                  <p className="text-[#0B4627] font-medium ">{tab}</p>
                </div>
              </div>
            ))
          }
        </div>

        <div className='h-full md:h-[403px] max-w-[1000px] border border-[#E1E4EA] rounded-[20px] overflow-hidden'>
          {
            activeTab === "shipping" && (
              <div className='w-full h-full flex flex-col md:flex-row'>
                <div className="flex-1 flex justify-center items-center bg-[#FBF2D4]">
                  <Image src={ShippingBox} alt="Shipping Box" />
                </div>
                <div className="flex-1 bg-[#F5F4F4] py-4 md:py-0 px-4 md:px-10 flex justify-center items-center">
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-2xl md:text-[36px] font-medium md:leading-[47px]">Shipping</p>
                    <p className="text-[#000] text-sm md:text-lg font-medium md:leading-[30px]">We offer fast and reliable shipping with multiple options: Standard (5-7 days), Express (2-3 days), and Overnight (next-day delivery). Enjoy free shipping on orders above ₹1,000, with real-time tracking available for all shipments</p>
                  </div>
                </div>
              </div>
            )
          }

          {
            activeTab === "marketing" && (
              <div className='w-full h-full flex flex-col md:flex-row'>
                <div className="flex-1 flex flex-col justify-center items-center bg-[#F6EDFF] gap-5">
                  <Image src={CustomerPurchaseOneImage} alt="Customer Purchase One" />
                  {/* <Image src={CustomerPurchaseTwoImage} alt="Customer Purchase Two" /> */}
                </div>
                <div className="flex-1 bg-[#F5F4F4] px-4 md:px-10 flex justify-center items-center">
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-2xl md:text-[36px] font-medium md:leading-[47px]">Marketing</p>
                    <p className="text-[#000] text-sm md:text-lg font-medium md:leading-[30px]">ShopBraze is an e-commerce marketing solution designed to boost your online store's visibility, drive targeted traffic, and maximize sales. From personalized campaigns to data-driven insights.</p>
                  </div>
                </div>
              </div>
            )
          }

          {
            activeTab === "website" && (
              <div className='w-full h-full flex flex-col md:flex-row'>
                <div className="flex-1 px-6 flex justify-center items-center bg-[#E4B9BA]">
                  <Image src={DesktopHeroImage} alt="Shipping Box" />
                </div>
                <div className="flex-1 bg-[#F5F4F4] px-4 md:px-10 flex justify-center items-center">
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-2xl md:text-[36px] font-medium md:leading-[47px]">Website</p>
                    <p className="text-[#000] text-sm md:text-lg font-medium md:leading-[30px]">Your ultimate e-commerce marketing partner! Boost sales, attract customers, and grow your online store with our personalized strategies and data-driven solutions.</p>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default EverythingYouNeed