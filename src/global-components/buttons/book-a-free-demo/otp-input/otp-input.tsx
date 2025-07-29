import Modal from 'common-components/modal/modal'
import Button from 'common-components/button/button'
import Image from 'next/image'
import ModalCloseIcon from 'assets/icons/modal-close-icon.svg'
import { useState } from 'react'
import OtpInput from 'react-otp-input'

type OtpInputProps = {
  handleCurrentStep: (step: number) => void
  mobileNumber: string
}

const OtpInputContainer = ({ handleCurrentStep, mobileNumber }: OtpInputProps) => {
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleVerifyOtp = () => {
    setIsLoading(true)
    fetch(`https://dashboard-api-dev.shopbraze.in/api/sellers-enquiry/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        otp: otp,
        phone: mobileNumber,
      }),
    }).then((res) => {
      if (res.ok) {
        handleCurrentStep(3)
      }
    })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Modal
      isOpen={true}
    >
      <div className="p-3 md:p-5 relative w-[90vw] md:w-[400px]">
        <Button className='absolute top-2 right-2' onClick={() => { handleCurrentStep(1) }}>
          <Image src={ModalCloseIcon} alt="modal-close-icon" width={24} height={24} />
        </Button>

        <div className="space-y-2">
          <p className="text-xs md:text-sm text-gray-700 text-center">OTP has been sent to your <span className="text-success-500">Whatsapp</span></p>
          <div className="flex justify-center items-center h-[100px]">
            <OtpInput
              inputType='number'
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className='w-3'> </span>}
              renderInput={(props: any) => <input {...props} />}
              shouldAutoFocus
              inputStyle={`!w-10 !h-10 border-b border-gray-700 outline-0`}
            />
          </div>
          <div className="flex justify-center items-center w-full">
            <Button
              onClick={handleVerifyOtp}
              className='bg-[#000] w-full flex justify-center items-center text-[#fff] px-4 py-2 rounded-lg'
              isLoading={isLoading}
              disabled={isLoading}
            >
              Verify OTP
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default OtpInputContainer