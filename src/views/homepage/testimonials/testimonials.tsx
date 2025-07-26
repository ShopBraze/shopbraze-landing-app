import LetrendzImage from "assets/images/testimonials/le-trendz.png"
import LabelDaniloImage from "assets/images/testimonials/label-danilo.png"
import ShiniraImage from "assets/images/testimonials/shinira.jpg"
import Image from "next/image"

const Testimonials = () => {
  return (
    <div className="bg-[#F7FAF8]">
      <div className='max-w-[1440px] mx-auto px-5 md:px-[120px] py-10 md:py-[90px] '>
        <div className="w-full flex flex-col gap-y-6 items-center">
          <div className="py-2 px-3.5 bg-[#FFF] rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.05),_0_0_0_1px_rgba(0,0,0,0.10)]">
            <p className="text-[#0B4627] text-lg md:text-[22px] font-medium ">OUR WALL OF LOVE</p>
          </div>
          <p className="text-[#0B4627] text-[22px] md:text-[48px] font-medium md:leading-[58px]">What our partners are saying</p>
        </div>

        <div className="pt-10 md:pt-[70px] grid grid-cols-1 md:grid-cols-2 gap-6" id="testimonials">
          <div className="bg-[#fff] py-4 md:py-7 px-4 md:px-8 rounded-3xl">
            <p className="text-[#0E121B] text-sm md:text-lg">Our biggest challenge was tracking remittance and profitability through data. Shopbraze's advanced dashboard gave us real-time insights into our P&L and financial health, which helped us make smarter decisions.
              <br /><br />
              The platform has completely transformed the way we operate, streamlining everything from order tracking to financial analysis. Thanks to Shopbraze, we ve seen a measurable improvement in our profits and operational efficiency</p>
            <div className="w-full h-[1px] bg-[#E7E7E5] my-3 md:my-6" />
            <Image src={LetrendzImage} alt="Letrendz.png" className="w-24 md:w-auto" />
          </div>

          <div className="bg-[#fff] py-4 md:py-7 px-4 md:px-8 rounded-3xl">
            <p className="text-[#0E121B] text-sm md:text-lg">
              I faced major issues with fraud and claim rejections on marketplaces, which held back my growth. Shopbraze's platform provided the tools to manage digital marketing campaigns through Facebook and Google Ads effectively.
              <br /><br />
              Their insights into RTO rates and marketplace claims processes helped reduce losses and optimize our order management. Today, I'm operating more efficiently and have seen a substantial boost in marketing effectiveness and sales
            </p>
            <div className="w-full h-[1px] bg-[#E7E7E5] my-3 md:my-6" />
            <Image src={LabelDaniloImage} alt="Label Danilo.png" className="w-24 md:w-auto" />
          </div>

          <div className="bg-[#fff] py-4 md:py-7 px-4 md:px-8 rounded-3xl md:col-span-2">
            <p className="text-[#0E121B] text-sm md:text-lg">
              After multiple failed attempts with other platforms, we finally found the solution we needed in Shopbraze. Their website optimization tools and marketing strategies helped us drive traffic and increase order volume.
              <br /><br />
              The platform's analytics provided clear insights into customer behavior, allowing us to adjust and improve our campaigns. The result has been higher conversion rates and strong customer retention, making Shopbraze indispensable to our growth
            </p>
            <div className="w-full h-[1px] bg-[#E7E7E5] my-3 md:my-6" />
            <Image src={ShiniraImage} alt="Jalipa.png" className="w-24 md:w-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials