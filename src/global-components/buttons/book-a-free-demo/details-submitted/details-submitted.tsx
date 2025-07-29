import Modal from 'common-components/modal/modal'
import Image from 'next/image'
import ModalCloseIcon from 'assets/icons/modal-close-icon.svg'
import Button from 'common-components/button/button'
import CheckIcon from 'assets/icons/success-check.svg'

type DetailsSubmittedProps = {
  handleCurrentStep: (step: number) => void
}

const DetailsSubmitted = ({ handleCurrentStep }: DetailsSubmittedProps) => {
  return (
    <Modal
      isOpen={true}
    >
      <div className="p-4 md:p-5 relative w-[90vw] md:w-[440px]">
        <Button className='absolute top-2 right-2' onClick={() => { handleCurrentStep(0) }}>
          <Image src={ModalCloseIcon} alt="modal-close-icon" width={24} height={24} />
        </Button>
        <div className="flex flex-col items-center gap-y-4 md:gap-y-6 justify-center">
          <Image src={CheckIcon} alt="check-icon" width={60} height={60} className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]' />
          <div className="space-y-2 text-center">
            <h2 className='text-lg md:text-[24px] font-semibold leading-[28px] md:leading-[32px] text-[#1f1e1e]'>Details Submitted</h2>
            <p className='text-[11px] md:text-xs font-normal text-gray-600 max-w-[400px] leading-[18px] md:leading-5 text-center'>
              You details have been submitted successfully. We will get back to you soon. Thank you for your patience.
            </p>
          </div>

        </div>
      </div>
    </Modal>

  )
}

export default DetailsSubmitted