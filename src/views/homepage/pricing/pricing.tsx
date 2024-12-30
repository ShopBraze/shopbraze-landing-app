import BookAFreeDemo from "global-components/buttons/book-a-free-demo/book-a-free-demo"
import PricingBoxIcon from "assets/icons/pricing-box.svg"
import SuccessCheckIcon from "assets/icons/success-check-icon.svg"
import Image from "next/image"

const IncludedFeatures = ["All analytics features", "Up to 250,000 tracked visits", "Normal support", "Up to 3 team members"]


const Pricing = () => {
  return (
    <div className="space-y-4 md:space-y-6" id="pricing">
      <div className="flex justify-between">
        <p className="text-lg md:text-xl md:leading-[35px] font-bold text-gray-1000">Pricing</p>
        <BookAFreeDemo />
      </div>

      <div className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-center">
        <p className="text-lg md:text-4xl font-bold text-primary-700">No upfront cost,<br className="hidden md:block" />
          <span className="text-base md:text-2xl text-[#000] font-medium">only success based fees</span> </p>
        <div className="flex shadow-[0px_2px_12px_rgba(20,20,43,0.08)">
          <div className="flex-1 lg:flex-auto p-4 md:p-8 md:px-12 border border-[#EFF0F6] rounded-bl-lg rounded-tl-lg">
            <div className="space-y-3 md:space-y-4">
              <div className="flex gap-4">
                <Image src={PricingBoxIcon} alt="price-box.svg" className="" />
                <div>
                  <p className="text-sm md:text-lg font-medium text-gray-600">For individuals</p>
                  <p className="text-lg md:text-2xl font-bold text-gray-1000">Basic</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm md:text-lg font-medium">Show social proof notifications <br /> to increase leads and sales.</p>
              <div className="flex items-baseline">
                <div className="text-indigo-900 text-2xl md:text-4xl font-bold ">
                  $0
                </div>
                <span className="text-gray-500 text-sm md:text-base ml-5 font-medium">/monthly</span>
              </div>
              <div className="pt-2 md:pt-5">
                <BookAFreeDemo buttonText="Get Started" className="w-full" />
              </div>
            </div>
          </div>
          <div className="flex-1 lg:flex-auto p-4 md:p-8 flex flex-col justify-center bg-[#F7F7FC] rounded-tr-lg rounded-br-lg">
            <p className="text-gray-900 text-sm  md:text-lg font-semibold">What’s included</p>
            <div className="pt-3 md:pt-6 space-y-4">
              {
                IncludedFeatures?.map((feature, index) => {
                  return (
                    <div className="flex items-center gap-4" key={index}>
                      <Image src={SuccessCheckIcon} alt="success-tick.svg" className="h-4 w-4 md:h-6 md:w-6" />
                      <p className="text-gray-1000 text-sm  md:text-lg font-medium">{feature}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing