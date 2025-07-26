import MarketingStrategyIcon from "assets/icons/marketing-strategy.svg"
import PricingStrategyIcon from "assets/icons/pricing-strategy.svg"
import RtoManagementIcon from "assets/icons/rto-management.svg"
import Image from "next/image"

const ProfitabilityMatters = () => {
  return (
    <div className="bg-[#F7FAF8]" id="features">

      <div className='max-w-[1440px] mx-auto px-4 md:px-[120px] py-10 md:py-[90px] '>
        <div className="space-y-3 text-center">
          <p className="text-[#0B4627] text-2xl md:text-[48px] font-semibold md:leading-[56px]">Your <span className='bg-[linear-gradient(90deg,_#0B4627_0%,_#1FC16B_92.31%)] bg-clip-text text-transparent'>Profitability</span> is what matters to us</p>
          <p className="text-sm md:text-lg text-[#0B4627] md:leading-7">That’s why we go beyond tools — offering strategic support in marketing, pricing, and RTO <br /> control to grow your bottom line.</p>
        </div>
        <div className="mt-10 md:mt-[70px] flex flex-col gap-y-5 md:flex-row md:gap-20 justify-around">
          <div className="space-y-4 md:space-y-6 border border-gray-200 rounded-lg bg-[#fff] p-3 md:p-5">
            <Image src={MarketingStrategyIcon} alt="MarketingStrategyIcon" className="h-8 w-8 md:h-10 md:w-10" />
            <div className="space-y-3">
              <p className="text-[#0B4627] font-semibold text-lg md:text-[22px]">Marketing Strategy That Converts</p>
              <p className="text-[#0B4627] text-[13px] md:text-sm">We craft ad funnels that convert — from creatives to campaign optimization across Meta and Google.</p>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6 border border-gray-200 rounded-lg bg-[#fff] p-3 md:p-5">
            <Image src={PricingStrategyIcon} alt="PricingStrategyIcon" className="h-8 w-8 md:h-10 md:w-10" />
            <div className="space-y-3">
              <p className="text-[#0B4627] font-semibold text-lg md:text-[22px]">Pricing Strategy That Maximizes Revenue</p>
              <p className="text-[#0B4627] text-[13px] md:text-sm">We help you find the sweet spot between conversions and margins using tested price points and market data.</p>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6 border border-gray-200 rounded-lg bg-[#fff] p-3 md:p-5">
            <Image src={RtoManagementIcon} alt="RtoManagementIcon" className="h-8 w-8 md:h-10 md:w-10" />
            <div className="space-y-3">
              <p className="text-[#0B4627] font-semibold text-lg md:text-[22px]">RTO Management That Saves You Money</p>
              <p className="text-[#0B4627] text-[13px] md:text-sm">Predict risky orders, verify addresses, and reduce returns with automated COD checks and NDR handling.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfitabilityMatters