import React from 'react'
import Button from 'common-components/button/button'
import Image from 'next/image'
import ModalCloseIcon from 'assets/icons/modal-close-icon.svg'
import CheckIcon from 'assets/icons/success-check.svg'
import OtpInput from 'react-otp-input'
import useBookFreeDemoForm from './use-book-free-demo-form'
import { useRouter } from 'next/navigation'

const BookFreeDemoForm = () => {
  const router = useRouter()

  const {
    currentStep,
    isLoading,
    otp,
    setOtp,
    formErrors,
    formData,
    setFormData,
    marketplaceOptions,
    handleMarketplaceChange,
    handleSubmit,
    handleVerifyOtp,
    handleCurrentStep,
    isFormValid,
  } = useBookFreeDemoForm()

  // Step 1: Basic Details Form
  if (currentStep === 1) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 py-3">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-1.5 p-3 md:p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className='text-2xl font-semibold leading-8 text-[#000]'>Book a Free Demo</h2>
              </div>
              <p className='text-sm font-normal text-gray-600 max-w-[400px] md:max-w-none leading-5'>
                To understand how ShopBraze can help you setup and grow your D2C online business, profitably!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-3 md:p-6 space-y-3 md:space-y-5">
              <div className="space-y-1.5">
                <p className="text-sm font-medium">Name <span className="text-red-300">*</span></p>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-200 rounded-md px-3 py-1.5 md:py-2 outline-none focus:border-[#017356]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <p className="text-sm">Mobile Number <span className="text-success-500">(Whatsapp)</span> <span className="text-red-300">*</span></p>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  className={`w-full border border-gray-200 rounded-md px-3 py-1.5 md:py-2 outline-none focus:border-[#017356] ${formErrors?.mobileNumber ? 'border-red-300' : ''}`}
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                />
                {formErrors?.mobileNumber && <p className="text-xs text-red-300">{formErrors?.mobileNumber}</p>}
              </div>

              <div className="space-y-1.5">
                <p className="text-sm">Alternative Mobile Number</p>
                <input
                  type="tel"
                  maxLength={10}
                  className={`w-full border border-gray-200 rounded-md px-3 py-1.5 md:py-2 outline-none focus:border-[#017356] ${formErrors?.alternativeMobileNumber ? 'border-red-300' : ''}`}
                  value={formData.alternativeMobileNumber}
                  onChange={(e) => setFormData({ ...formData, alternativeMobileNumber: e.target.value })}
                />
                {formErrors?.alternativeMobileNumber && <p className="text-xs text-red-300">{formErrors?.alternativeMobileNumber}</p>}
              </div>

              <div className="space-y-1.5">
                <p className="text-sm">Email <span className="text-red-300">*</span></p>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-200 rounded-md px-3 py-1.5 md:py-2 outline-none focus:border-[#017356]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-3 py-3">
                <p className="text-sm">Current Marketplace</p>
                <div className="space-y-2">
                  {marketplaceOptions?.map((option) => (
                    <label key={option?.value} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.marketPlace?.includes(option?.value) || false}
                        onChange={() => handleMarketplaceChange(option?.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">{option?.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="text-sm">Website</p>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-md px-3 py-1.5 md:py-2 outline-none focus:border-[#017356]"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <p className="text-sm">City <span className="text-red-300">*</span></p>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-200 rounded-md px-3 py-1.5 md:py-2 outline-none focus:border-[#017356]"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <p className="text-sm">State <span className="text-red-300">*</span></p>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-200 rounded-md px-3 py-1.5 md:py-2 outline-none focus:border-[#017356]"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <p className="text-sm">Annual Turnover</p>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-md px-3 py-1.5 md:py-2 outline-none focus:border-[#017356]"
                  value={formData.annualTurnover}
                  onChange={(e) => setFormData({ ...formData, annualTurnover: e.target.value })}
                />
              </div>

              {/* Get Started Button - Inside form */}
              <div className="pt-4">
                <Button
                  type='submit'
                  variant='primary'
                  className='w-full py-2.5 md:py-3 px-4 md:px-6 flex justify-center items-center text-sm md:text-base text-[#fff] font-semibold leading-6 rounded-lg'
                  isLoading={isLoading}
                  disabled={isLoading || !isFormValid()}
                >
                  Get Started
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Remove the old button container since button is now inside form */}
      </div>
    )
  }

  // Step 2: OTP Input
  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm md:max-w-md bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">Verify OTP</h2>
              <p className="text-xs md:text-sm text-gray-600 mt-2">OTP has been sent to your <span className="text-success-500">Whatsapp</span></p>
            </div>

            <div className="flex justify-center items-center h-[80px] md:h-[100px]">
              <OtpInput
                inputType='number'
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className='w-2 md:w-3'> </span>}
                renderInput={(props: any) => <input {...props} />}
                shouldAutoFocus
                inputStyle={`!w-8 !h-8 md:!w-12 md:!h-12 border-b-2 border-gray-700 outline-0 text-center text-base md:text-lg font-semibold`}
              />
            </div>

            <div>
              <Button
                onClick={handleVerifyOtp}
                className='bg-[#017356] w-full flex justify-center items-center text-[#fff] px-4 py-2.5 md:py-3 rounded-lg hover:bg-[#015a45] text-sm md:text-base font-semibold'
                isLoading={isLoading}
                disabled={isLoading}
              >
                Verify OTP
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Step 3: Success
  if (currentStep === 3) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm md:max-w-md bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col items-center gap-y-4 md:gap-y-6 justify-center text-center">
            <Image src={CheckIcon} alt="check-icon" width={60} height={60} className='w-12 h-12 md:w-16 md:h-16' />
            <div className="space-y-2">
              <h2 className='text-lg md:text-2xl font-semibold leading-6 md:leading-8 text-[#1f1e1e]'>Details Submitted</h2>
              <p className='text-xs md:text-sm font-normal text-gray-600 max-w-[400px] leading-4 md:leading-5'>
                Your details have been submitted successfully. We will get back to you soon. Thank you for your patience.
              </p>
            </div>

            <Button
              onClick={() => router.push('/')}
              variant='primary'
              className=' px-4 md:px-6 py-2.5 md:py-3 text-white font-semibold rounded-lg hover:bg-[#015a45] text-sm md:text-base'
            >
              Go To Homepage
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default BookFreeDemoForm