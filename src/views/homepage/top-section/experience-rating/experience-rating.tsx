
import StarFilledIcon from "assets/icons/star-filled-orange.svg"
import Image from "next/image"

const ExperienceRating = () => {
  return (
    <div className="p-2 md:p-4 space-y-2.5 rounded-xl bg-[#fff]">
      <p className="text-sm md:text-lg font-bold text-gray-600">4.9 /5</p>
      <p className="text-[10px] md:text-sm font-semibold text-gray-500">Experience level <br />at ShopBraze</p>
      <div className="flex items-center gap-1">
        {
          [...Array(5)]?.map((_, index) => {
            return <Image src={StarFilledIcon} alt="star.svg" />
          })
        }
      </div>
    </div>
  )
}

export default ExperienceRating