import { useEffect, useState } from "react"


const useBookAFreeDemo = () => {

  const [currentStep, setCurrentStep] = useState(0)
  const handleCurrentStep = (step: number) => {
    setCurrentStep(step)
  }

  const handleBookClick = () => {
    window.open('https://calendly.com/shopbraze/30min')
  }


  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    product_category: '',
    number_of_orders: '',
    marketPlace: '',
  })



  return {
    currentStep,
    handleCurrentStep,
    handleBookClick,
    formData,
    setFormData,
    setCurrentStep,
  }
}

export default useBookAFreeDemo