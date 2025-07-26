
import Image from "next/image"
import ShopbrazeLogo from "assets/website-logo/shopbraze-logo.svg"
import { NavbarPaths } from "constants/navbar"
import BookAFreeDemo from "global-components/buttons/book-a-free-demo/book-a-free-demo";
import { ScrollToElement } from "utils/scroll-to-element";


const DesktopNavbar = () => {
  // const { activeDiv } = useNavbar()

  return (
    <div className="px-20 py-5 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src={ShopbrazeLogo} alt="shopbraze_logo.svg" height={80} width={100} className="h-[47px] w-[43px]" />
        <p className="text-[#017356] text-2xl font-semibold leading-[29px]">ShopBraze</p>
      </div>

      <div className="flex gap-3 items-center">
        {
          NavbarPaths.map((item) => {
            return (
              <div className="px-2 py-1.5 flex justify-center items-center" key={item.id} onClick={() => { ScrollToElement(item?.name?.toLowerCase()) }}>
                <p className="text-[#0B4627] text-[17px] font-medium -tracking-[0.17px]">{item.name}</p>
              </div>
            )
          })
        }
      </div>
      <BookAFreeDemo className="shadow-[0_6.52px_21.32px_0_rgba(0,0,0,0.35)]" />
    </div>
  )
}

export default DesktopNavbar


