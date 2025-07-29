import Image from 'next/image'
import ModalCloseIcon from 'assets/icons/modal-close-icon.svg'
import useBasicDetails from './use-basic-details'
import Button from 'common-components/button/button'
import Modal from 'common-components/modal/modal'



type BasicDetailsProps = {
  formData: any,
  setFormData: any
  handleCurrentStep: (step: number) => void
}

const BasicDetails = ({ formData, setFormData, handleCurrentStep }: BasicDetailsProps) => {
  const { formErrors, handleSubmit, isLoading, marketplaceOptions, handleMarketplaceChange } = useBasicDetails({ formData, setFormData, handleCurrentStep })
  return (
    <Modal
      isOpen={true}
    >
      <form onSubmit={handleSubmit} className='rounded-lg w-[90vw] md:w-[540px]'>
        <div className="space-y-1.5 p-3 md:px-5 md:py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className='text-lg md:text-[24px] font-semibold leading-[28px] md:leading-[32px] text-[#000]'>Book a Free Demo</h2>
            <Button className='bg-transparent border-none p-0' onClick={() => { handleCurrentStep(0) }}>
              <Image src={ModalCloseIcon} alt="modal-close-icon" width={24} height={24} />
            </Button>
          </div>
          <p className='text-[11px] md:text-xs font-normal text-gray-600 max-w-[400px] leading-[18px] md:leading-5'>
            To understand how ShopBraze can help you setup and grow your D2C online business, profitably!
          </p>
        </div>

        <div className="p-3 md:p-5 space-y-4 max-h-[55vh] md:max-h-[65vh] overflow-y-auto scrollbar-hide">
          <div className="space-y-1.5">
            <p className="text-xs md:text-sm font-medium">Name <span className="text-red-300">*</span></p>
            <input
              type="text"
              required
              className="w-full border border-gray-200 rounded-md px-2 py-1.5 outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <p className="text-xs md:text-sm ">Mobile Number <span className="text-success-500">(Whatsapp)</span> <span className="text-red-300">*</span></p>
            <input
              type="tel"
              required
              maxLength={10}
              className={`w-full border border-gray-200 rounded-md px-2 py-1.5 outline-none ${formErrors?.mobileNumber ? 'border-red-300' : ''}`}
              value={formData.mobileNumber}
              onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
            />
            {formErrors?.mobileNumber && <p className="text-xs text-red-300">{formErrors?.mobileNumber}</p>}
          </div>
          <div className="space-y-1.5">
            <p className="text-xs md:text-sm">Alternative Mobile Number</p>
            <input
              type="tel"
              maxLength={10}
              className={`w-full border border-gray-200 rounded-md px-2 py-1.5 outline-none ${formErrors?.alternativeMobileNumber ? 'border-red-300' : ''}`}
              value={formData.alternativeMobileNumber}
              onChange={(e) => setFormData({ ...formData, alternativeMobileNumber: e.target.value })}
            />
            {formErrors?.alternativeMobileNumber && <p className="text-xs text-red-300">{formErrors?.alternativeMobileNumber}</p>}
          </div>
          <div className="space-y-1.5">
            <p className="text-xs md:text-sm ">Email <span className="text-red-300">*</span></p>
            <input
              type="email"
              required
              className="w-full border border-gray-200 rounded-md px-2 py-1.5 outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-3 py-3">
            <p className="text-xs md:text-sm">Curent Marketplace</p>
            <div className="space-y-2">
              {marketplaceOptions?.map((option) => (
                <label key={option?.value} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.marketPlace?.includes(option?.value) || false}
                    onChange={() => handleMarketplaceChange(option?.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-xs md:text-sm text-gray-700">{option?.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-1.5">
            <p className="text-xs md:text-sm ">Website</p>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-md px-2 py-1.5 outline-none"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <p className="text-xs md:text-sm ">City <span className="text-red-300">*</span></p>
            <input
              type="text"
              required
              className="w-full border border-gray-200 rounded-md px-2 py-1.5 outline-none"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <p className="text-xs md:text-sm ">State <span className="text-red-300">*</span></p>
            <input
              type="text"
              required
              className="w-full border border-gray-200 rounded-md px-2 py-1.5 outline-none"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <p className="text-xs md:text-sm ">Annual Turnover</p>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-md px-2 py-1.5 outline-none"
              value={formData.annualTurnover}
              onChange={(e) => setFormData({ ...formData, annualTurnover: e.target.value })}
            />
          </div>
        </div>
        <div className="py-4 border-t border-gray-200 px-3 md:px-5">
          <Button
            type='submit'
            className='bg-[#000]  w-full py-2.5 md:py-3 px-[18px] flex justify-center items-center text-sm md:text-base text-[#fff] font-semibold leading-[22px] rounded-lg'
            isLoading={isLoading} disabled={isLoading}
          >
            Get Started
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default BasicDetails