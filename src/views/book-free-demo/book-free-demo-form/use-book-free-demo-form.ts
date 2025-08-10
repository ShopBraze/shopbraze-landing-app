import { fbq } from 'events/fb-pixel'
import { sendMixPanelEvent } from 'lib/mixpanelClient'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

type FormData = {
  name: string
  mobileNumber: string
  email: string
  marketPlace: string
  number_of_orders: string
  product_category: string
}

const useBookFreeDemoForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [otp, setOtp] = useState('')
  const [formErrors, setFormErrors] = useState({
    mobileNumber: '',
  })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobileNumber: '',
    email: '',
    marketPlace: '',
    number_of_orders: '',
    product_category: ''
  })

  // Number of orders options
  const number_of_orders_options = [
    { value: '0', label: '0' },
    { value: '1-20', label: '1-20' },
    { value: '20-100', label: '20-100' },
    { value: '100+', label: '100+' }
  ]

  // Product category options
  const productCategoryOptions = [
    { value: 'Apparel/Clothing', label: 'Apparel/Clothing' },
    { value: 'Home Decor/Furnishing/Kitchen', label: 'Home Decor/Furnishing/Kitchen' },
    { value: 'Fashion accesssories', label: 'Fashion accesssories' },
    { value: 'Health & Fitness', label: 'Health & Fitness' },
    { value: 'FMCG/Consumer Goods', label: 'FMCG/Consumer Goods' },
    { value: 'Beauty & Cosmetics', label: 'Beauty & Cosmetics' },
    { value: 'Others', label: 'Others(e.g., Jewellery, Toys, etc.)' }
  ]

  // Marketplace options
  const marketplaceOptions = [
    { value: 'Amazon/Flipkart/Meesho/Other MarketPlace', label: 'Amazon/Flipkart/Meesho/Other MarketPlace' },
    { value: 'Own Website', label: 'Own Website' },
    { value: 'Both (Marketplace and Own Website)', label: 'Both (Marketplace and Own Website)' },
    { value: 'None', label: 'None' }
  ]

  // Validation effects
  useEffect(() => {
    const mobile = formData.mobileNumber.trim();

    if (!mobile) return;
    else if (!/^[1-9]\d{9}$/.test(mobile)) {
      setFormErrors((prev) => ({
        ...prev,
        mobileNumber: 'Enter a valid mobile number',
      }));
    } else {
      setFormErrors((prev: any) => {
        const { mobileNumber, ...rest } = prev;
        return rest;
      });
    }
  }, [formData.mobileNumber]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      const response = await fetch(`https://dashboard-api-dev.shopbraze.in/api/sellers-enquiry`, {
        // const response = await fetch(`http://localhost:8080/api/sellers-enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          mobileNumber: formData.mobileNumber,
          email: formData.email,
          product_category: formData.product_category,
          number_of_orders: formData.number_of_orders,
          marketPlace: formData.marketPlace,
        }),
      });

      if (response.ok) {
        sendMixPanelEvent("Leads Basic Details Submitted")
        fbq('track', 'CompleteRegistration', {
          content_name: 'Shopbraze Free Demo',
          status: 'success',
          currency: 'INR',
          value: 0
        });
        setCurrentStep(2);

      }
      else {
        toast.error('Failed to submit form')
        sendMixPanelEvent("Leads Basic Details Submission Failed")
      }
    } catch (error) {
      sendMixPanelEvent("Leads Basic Details Submission Failed")
      toast.error('Failed to submit form')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOtp = () => {
    setIsLoading(true)
    fetch(`https://dashboard-api-dev.shopbraze.in/api/sellers-enquiry/verify-otp`, {
      // fetch(`http://localhost:8080/api/sellers-enquiry/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        otp: otp,
        phone: formData.mobileNumber,
      }),
    }).then((res) => {
      if (res.ok) {
        setCurrentStep(3)
        sendMixPanelEvent("Leads OTP Verified")
        fbq('track', 'Lead', {
          lead_type: 'demo_request',
          content_name: 'Shopbraze Free Demo',
          currency: 'INR',
          value: 0
        });
        toast.success('OTP verified successfully')
      } else {
        sendMixPanelEvent("Leads OTP Verification Failed")
        toast.error('Invalid OTP')
      }
    })
      .catch((err) => {
        sendMixPanelEvent("Leads OTP Verification Failed")
        toast.error('Invalid OTP')
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleCurrentStep = (step: number) => {
    setCurrentStep(step)
  }

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.mobileNumber.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.product_category.trim() !== '' &&
      formData.marketPlace.trim() !== '' &&
      formData.number_of_orders.trim() !== '' &&
      !formErrors.mobileNumber
    )
  }


  return {
    currentStep,
    setCurrentStep,
    isLoading,
    otp,
    setOtp,
    formErrors,
    formData,
    setFormData,
    handleSubmit,
    handleVerifyOtp,
    handleCurrentStep,
    isFormValid,
    number_of_orders_options,
    productCategoryOptions,
    marketplaceOptions,
  }
}

export default useBookFreeDemoForm
