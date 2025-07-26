import BookAFreeDemo from "global-components/buttons/book-a-free-demo/book-a-free-demo"

const Pricing = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-10 md:py-[90px] px-5 md:px-[120px]" id="pricing">
      <div className="w-full flex flex-col gap-y-6 items-center">
        <p className="text-[#0B4627] text-2xl md:text-[48px] font-semibold md:leading-[56px]">Pricing</p>
        <p className="text-sm md:text-lg text-[#0B4627] md:leading-7">Start using ShopBraze with no Upfront cost, and all the features included.</p>
      </div>

      <div className="w-full mt-10 md:mt-[70px]">
        <div className="mx-auto w-full md:w-[374px] px-4 md:px-7 py-4 md:py-6 bg-[#F7F7F7] rounded-[20px] space-y-6">
          <div>
            <p className="text-[#000] text-lg font-medium md:leading-[26px]">ShopBraze</p>
            <p className="mt-3 text-[#000] text-2xl md:text-[40px] font-medium md:leading-[52px]">Free</p>
            <p className="mt-1 text-[#000000] font-medium">Free, forever</p>
          </div>
          <BookAFreeDemo buttonText="Get Started for free" className="w-full" />
          <div className="space-y-4 md:space-y-5">
            <p className="font-medium md:leading-[22px]">What’s more included:</p>
            {
              ['All Analytics features', 'Up to 250,000 tracked visits', 'Normal Support', 'Up to 3 team members'].map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <div className="w-3 h-3 md:w-[22px] md:h-[22px] bg-[#017356] rounded-full" />
                  <p className="text-sm md:text-base font-medium md:leading-[22px] text-[#0E121B]">{item}</p>
                </div>
              ))
            }
          </div>
          <div className="w-full h-[1px] bg-[#CACFD8]" />

          <p className="text-[#0B4627] text-sm md:text-base font-semibold md:leading-[22px]">We charge 3% + GST on every successfully delivered order from your store</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing