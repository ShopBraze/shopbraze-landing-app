import Button from 'common-components/button/button'

type BookAFreeDemoProps = {
  buttonText?: string,
  className?: string
}

const BookAFreeDemo = ({ buttonText = "Book a Free Demo", className }: BookAFreeDemoProps) => {
  const handleBookClick = () => {
    window.open('https://calendly.com/shopbraze/30min')
  }
  return (
    <Button
      className={`bg-[#017356] py-3 px-[18px] flex justify-center items-center text-[#fff] font-semibold leading-[22px] rounded-xl shadow-[0_-4px_0_0_#62A883_inset] ${className}`}
      onClick={handleBookClick}
    >
      {buttonText}
    </Button>
  )
}

export default BookAFreeDemo