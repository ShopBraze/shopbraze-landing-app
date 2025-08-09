import Image from 'next/image'
import ModalCloseIcon from 'assets/icons/modal-close-icon.svg'
import useBasicDetails from './use-basic-details'
import Button from 'common-components/button/button'
import Modal from 'common-components/modal/modal'
import SingleSelect from 'global-components/single-select/single-select'



type BasicDetailsProps = {
  formData: any,
  setFormData: any
  handleCurrentStep: (step: number) => void
}

const BasicDetails = ({ formData, setFormData, handleCurrentStep }: BasicDetailsProps) => {
  const { formErrors, handleSubmit, isLoading, productCategoryOptions, marketplaceOptions, number_of_orders_options, isFormValid } = useBasicDetails({ formData, setFormData, handleCurrentStep })
  return (
    <Modal
      isOpen={true}
    >
      <form onSubmit={handleSubmit} className='rounded-lg w-[95vw] md:w-[540px]'>
        <div className=" md:space-y-[2px] p-3 md:px-5 md:py-4 border-b border-gray-200">
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

        <div className="p-3 md:p-5 pb-10 space-y-4 max-h-[55vh] md:max-h-[65vh] overflow-y-auto scrollbar-hide">
          <div className="space-y-1.5">
            <p className="text-[13px] md:text-sm font-medium">Name <span className="text-red-300">*</span></p>
            <input
              type="text"
              required
              className="w-full text-sm border border-gray-200 rounded-md px-2 py-1.5 outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <p className="text-[13px] md:text-sm ">Mobile Number <span className="text-success-500">(Whatsapp)</span> <span className="text-red-300">*</span></p>
            <input
              type="tel"
              required
              maxLength={10}
              className={`w-full text-sm border border-gray-200 rounded-md px-2 py-1.5 outline-none ${formErrors?.mobileNumber ? 'border-red-300' : ''}`}
              value={formData.mobileNumber}
              onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
            />
            {formErrors?.mobileNumber && <p className="text-xs text-red-300">{formErrors?.mobileNumber}</p>}
          </div>
          <div className="space-y-1.5">
            <p className="text-[13px] md:text-sm ">Email <span className="text-red-300">*</span></p>
            <input
              type="email"
              required
              className="w-full text-sm border border-gray-200 rounded-md px-2 py-1.5 outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-3">
            <SingleSelect
              options={productCategoryOptions}
              value={formData.product_category}
              onChange={(value) => setFormData({ ...formData, product_category: value })}
              label="What are the category of products you sell?"
              required
            />
          </div>
          <div className="space-y-3">
            <SingleSelect
              position='top'
              options={marketplaceOptions}
              value={formData.marketPlace}
              onChange={(value) => setFormData({ ...formData, marketPlace: value })}
              label="Where do you sell your products online?"
              required
            />
          </div>
          <div className="space-y-3">
            <SingleSelect
              position='top'
              options={number_of_orders_options}
              value={formData.number_of_orders}
              onChange={(value) => setFormData({ ...formData, number_of_orders: value })}
              label="How many online orders do you currently do per month?"
              required
            />
          </div>
        </div>
        <div className="py-4 border-t border-gray-200 px-3 md:px-5">
          <Button
            type='submit'
            className='bg-[#000] w-full py-2.5 md:py-3 px-[18px] flex justify-center items-center text-sm md:text-base text-[#fff] font-semibold leading-[22px] rounded-lg'
            isLoading={isLoading}
            disabled={isLoading || !isFormValid()}
            variant='primary'
          >
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default BasicDetails