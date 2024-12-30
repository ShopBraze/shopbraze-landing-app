import BookAFreeDemo from "global-components/buttons/book-a-free-demo/book-a-free-demo"
import MarketStrategyIcon from "assets/icons/market-strategy.svg"
import PricingStrategyIcon from "assets/icons/pricing-strategy.svg"
import RtoManagementIcon from "assets/icons/rto-management.svg"
import Image from "next/image"

const ProfitabilityMatters = () => {
  const FacilityProvided = [
    {
      id: 1,
      name: "Market Strategy",
      icon: MarketStrategyIcon
    },
    {
      id: 2,
      name: "Pricing Strategy",
      icon: PricingStrategyIcon
    },
    {
      id: 3,
      name: "RTO Management",
      icon: RtoManagementIcon
    }
  ]
  return (
    <div className="p-4 md:p-8 bg-gray-100 rounded-lg">
      <div className="flex flex-col gap-y-5 md:flex-row md:justify-between">
        <div className="space-y-3 md:space-y-6">
          <p className="text-lg md:text-3xl font-extrabold md:leading-[45px]">Your <span className="text-primary-700">Profitability </span><br className="hidden md:block" />
            is what matters to us <br className="hidden md:block" />
            most</p>
          <p className="text-gray-600 text-sm md:text-xl font-medium">All actions geared towards making you profitable</p>
          <BookAFreeDemo />
        </div>
        <div className="space-y-3 md:space-y-6">
          {
            FacilityProvided?.map((item) => {
              return (
                <div className="flex justify-center items-center gap-3 md:gap-7 py-3 px-6 max-w-[275px] bg-[#fff] rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                  <Image src={(item?.icon?.src)} alt={`${item?.name}.svg`} width={28} height={28} className="h-5 w-5 md:h-7 md:w-7" />
                  <p className="text-sm md:text-xl font-semibold text-primary-700 whitespace-nowrap">{item?.name}</p>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default ProfitabilityMatters