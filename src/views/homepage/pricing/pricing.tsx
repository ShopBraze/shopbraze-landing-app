import BookAFreeDemo from "global-components/buttons/book-a-free-demo/book-a-free-demo"

const Pricing = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-[90px] px-[120px]" id="pricing">
      <div className="w-full flex flex-col gap-y-6 items-center">
        <p className="text-[#0B4627] text-[48px] font-semibold leading-[56px]">Pricing</p>
        <p className="text-lg text-[#0B4627] leading-7">Start using ShopBraze with no Upfront cost, and all the features included.</p>
      </div>

      <div className="w-full mt-[70px]">
        <div className="mx-auto w-[374px] px-7 py-6 bg-[#F7F7F7] rounded-[20px] space-y-6">
          <div>
            <p className="text-[#000] text-lg font-medium leading-[26px]">ShopBraze</p>
            <p className="mt-3 text-[#000] text-[40px] font-medium leading-[52px]">Free</p>
            <p className="mt-1 text-[#000000] font-medium">Free, forever</p>
          </div>
          <BookAFreeDemo buttonText="Get Started for free" className="w-full" />
          <div className="space-y-5">
            <p className="font-medium leading-[22px]">What’s more included:</p>
            {
              ['All Analytics features', 'Up to 250,000 tracked visits', 'Normal Support', 'Up to 3 team members'].map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <div className="w-[22px] h-[22px] bg-[#017356] rounded-full" />
                  <p className="font-medium leading-[22px] text-[#0E121B]">{item}</p>
                </div>
              ))
            }
          </div>
          <div className="w-full h-[1px] bg-[#CACFD8]" />

          <p className="text-[#0B4627] font-semibold leading-[22px]">We charge 3% + GST on every successfully delivered order from your store</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing