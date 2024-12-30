import Image from "next/image"
import JalipaImage from "assets/images/testimonials/jalipa.png"
import LabelDaniloImage from "assets/images/testimonials/label-danilo.png"
import LeTrendzImage from "assets/images/testimonials/le-trendz.png"

const Testimonial = () => {

  const TestimonialData = [
    {
      id: 1,
      companyLogo: LeTrendzImage,
      companyName: "letrendz",
      text: "Our biggest challenge was tracking remittance and profitability through data. Shopbraze s advanced dashboard gave us real-time insights into our P&L and financial health, which helped us make smarter decisions. The platform has completely transformed the way we operate, streamlining everything from order tracking to financial analysis. Thanks to Shopbraze, we ve seen a measurable improvement in our profits and operational efficiency"
    },
    {
      id: 2,
      companyLogo: LabelDaniloImage,
      companyName: "Label Danilo",
      text: "I faced major issues with fraud and claim rejections on marketplaces, which held back my growth. Shopbraze s platform provided the tools to manage digital marketing campaigns through Facebook and Google Ads effectively. Their insights into RTO rates and marketplace claims processes helped reduce losses and optimize our order management. Today, I’m operating more efficiently and have seen a substantial boost in marketing effectiveness and sales"
    },
    {
      id: 3,
      companyLogo: JalipaImage,
      companyName: "Jalipa",
      text: "After multiple failed attempts with other platforms, we finally found the solution we needed in Shopbraze. Their website optimization tools and marketing strategies helped us drive traffic and increase order volume. The platform s analytics provided clear insights into customer behavior, allowing us to adjust and improve our campaigns. The result has been higher conversion rates and strong customer retention, making Shopbraze indispensable to our growth"
    }
  ]

  return (
    <div className="space-y-4 md:space-y-6" id="testimonials">
      <div className="space-y-2 md:space-y-4">
        <p className="text-lg md:text-xl md:leading-[35px] font-bold text-gray-1000">Testimonials </p>
        <p className="text-sm md:text-xl font-semibold text-gray-700">
          Review from our partners and customer of shopbraze
        </p>
      </div>
      <div className="p-1.5 overflow-x-auto scrollbar-hide">
        <div className="flex gap-x-4 md:gap-x-6">
          {
            TestimonialData?.map((item) => {
              return (
                <div
                  className="min-w-[260px] md:min-w-[412px] p-4 shadow-[0px_4px_13.6px_0px_rgba(0,0,0,0.25)] space-y-2 rounded-lg inline-block"
                  key={item?.id}
                >
                  <div className="flex flex-col items-center gap-y-1">
                    <Image
                      src={item?.companyLogo}
                      alt={`${item?.companyName}.png`}
                      height={20}
                      width={80}
                      className="w-[200px] h-[45px] md:w-[300px] md:h-[70px] object-contain"
                    />
                    <p className="text-gray-800 text-base md:text-lg font-semibold">{item.companyName}</p>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 font-medium">{item?.text}</p>
                </div>
              );
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Testimonial