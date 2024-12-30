import Button from 'common-components/button/button'

type BookAFreeDemoProps = {
  buttonText?: string,
  className?: string
}

const BookAFreeDemo = ({ buttonText = "Book a Free Demo", className }: BookAFreeDemoProps) => {
  return (
    <Button variant="primary" className={`font-semibold text-xs md:text-sm text-[#fff] !rounded-full ${className}`}>{buttonText}</Button>
  )
}

export default BookAFreeDemo