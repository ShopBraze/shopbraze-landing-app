import PricingBoxIcon from "assets/icons/pricing-box.svg"
import SuccessCheckIcon from "assets/icons/success-check-icon.svg"
import Button from "common-components/button/button"
import Image from "next/image"

const SubscribeUs = () => {
  return (
    <div className="pt-4 md:pt-8">
      <div className="px-2 md:px-8 lg:px-12 xl:px-24 space-y-5 md:space-y-8">
        <p className="text-center text-base md:text-xl text-gray-500">Want to receive a monthly email in your inbox with awesome free updates, <br className="hidden md:block" /> resources and more? Please submit your email below.</p>
        <div className="space-y-1.5 md:space-y-3">
          <div className="p-2 md:p-4 shadow-[0px_13.503px_42.198px_0px_rgba(13,10,44,0.06)] border border-[#EFF0F6] rounded-full flex justify-between">
            <input type="text" placeholder="Enter your email" className="px-2 w-full outline-none text-gray-700 text-sm md:text-2xl" />
            <Button variant="primary" className="!rounded-full text-sm md:text-base">Subscribe</Button>
          </div>
          <div className="pl-4 md:pl-8 flex items-center gap-4">
            <Image src={SuccessCheckIcon} alt="success-tick.svg" className="h-4 w-4 md:h-6 md:w-6" />
            <p className="text-sm md:text-lg text-gray-500">It's <span className="text-primary-700">100% free</span> and we will never send more than one email per month</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default SubscribeUs