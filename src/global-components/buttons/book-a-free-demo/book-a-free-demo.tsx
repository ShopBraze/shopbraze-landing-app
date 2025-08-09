import Button from 'common-components/button/button'
import useBookAFreeDemo from './use-book-a-free-demo'
import BasicDetails from './basic-details/basic-details'
import DetailsSubmitted from './details-submitted/details-submitted'
import OtpInputContainer from './otp-input/otp-input'
import { sendMixPanelEvent } from 'lib/mixpanelClient'

type BookAFreeDemoProps = {
  buttonText?: string,
  className?: string
}

const BookAFreeDemo = ({ buttonText = "Book a Free Demo", className }: BookAFreeDemoProps) => {
  const { handleBookClick, formData, setFormData, currentStep, handleCurrentStep } = useBookAFreeDemo()

  return (
    <>
      <Button
        className={`bg-[#017356] py-3 px-[18px] flex justify-center items-center text-[#fff] font-semibold leading-[22px] rounded-xl shadow-[0_-4px_0_0_#62A883_inset] ${className}`}
        onClick={() => {
          sendMixPanelEvent("Book a Free Demo Button Clicked")
          handleCurrentStep(1)
        }}
      >
        {buttonText}
      </Button>

      {currentStep === 1 && <BasicDetails formData={formData} setFormData={setFormData} handleCurrentStep={handleCurrentStep} />}
      {currentStep === 2 && <OtpInputContainer mobileNumber={formData?.mobileNumber} handleCurrentStep={handleCurrentStep} />}
      {currentStep === 3 && <DetailsSubmitted handleCurrentStep={handleCurrentStep} />}
    </>
  )
}

export default BookAFreeDemo