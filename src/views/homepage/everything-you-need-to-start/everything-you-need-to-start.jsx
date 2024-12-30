import BookAFreeDemo from "global-components/buttons/book-a-free-demo/book-a-free-demo";
import ShippingImage from "assets/images/shipping-image.png";
import MarketingImage from "assets/images/marketing-image.png";
import WebsiteImage from "assets/images/website.png";
import Image from "next/image";

const EverythingYouNeedToStart = () => {
  const PlatformServicesConstant = [
    {
      id: 1,
      title: "Shipping",
      description:
        "We offer fast and reliable shipping with multiple options: Standard (5-7 days), Express (2-3 days), and Overnight (next-day delivery). Enjoy free shipping on orders above ₹1,000, with real-time tracking available for all shipments.",
      icon: ShippingImage,
    },
    {
      id: 2,
      title: "Marketing",
      description:
        "ShopBraze is an e-commerce marketing solution designed to boost your online store's visibility, drive targeted traffic, and maximize sales. From personalized campaigns to data-driven insights.",
      icon: MarketingImage,
    },
    {
      id: 3,
      title: "Website",
      description:
        "Your ultimate e-commerce marketing partner! Boost sales, attract customers, and grow your online store with our personalized strategies and data-driven solutions.",
      icon: WebsiteImage,
    },
  ];
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="space-y-2 md:space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-base md:text-xl md:leading-[35px] font-bold text-gray-1000 w-[70%]">
            Everything You Need To Start And Succeed
          </p>
          <BookAFreeDemo />
        </div>
        <p className="text-sm md:text-xl font-semibold text-gray-700">
          The All-in-One Platform to Create, Manage, and Grow Your Online Store
        </p>
      </div>

      <div className="p-1.5 overflow-x-auto scrollbar-hide">
        <div className="flex gap-x-4 md:gap-x-6 md:justify-between">
          {PlatformServicesConstant?.map((item) => {
            return (
              <div
                className="min-w-[260px] md:min-w-[412px] p-4 space-y-6 rounded-lg shadow-[0px_4px_13.6px_0px_rgba(0,0,0,0.25)]"
                key={item?.id}
              >
                <div className="w-full flex justify-center">
                  <Image
                    src={item?.icon}
                    alt=""
                    width={137}
                    className="h-[100px] md:h-auto"
                  />
                </div>
                <div className="space-y-4 md:space-y-6 text-center">
                  <p className="text-primary-700 text-base md:text-lg font-semibold">
                    {item?.title}
                  </p>
                  <p className="text-gray-500 font-medium  text-sm md:text-base">
                    {item?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EverythingYouNeedToStart;
