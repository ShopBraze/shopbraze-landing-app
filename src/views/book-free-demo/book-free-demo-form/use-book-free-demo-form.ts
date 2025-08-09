import { useState, useEffect } from 'react'

type FormData = {
  name: string
  mobileNumber: string
  alternativeMobileNumber: string
  email: string
  website: string
  marketPlace: string[]
  city: string
  state: string
  annualTurnover: string
}

const useBookFreeDemoForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [otp, setOtp] = useState('')
  const [formErrors, setFormErrors] = useState({
    mobileNumber: '',
    alternativeMobileNumber: '',
  })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobileNumber: '',
    alternativeMobileNumber: '',
    email: '',
    website: '',
    marketPlace: [],
    city: '',
    state: '',
    annualTurnover: '',
  })

  // Marketplace options
  const marketplaceOptions = [
    { value: 'amazon', label: 'Amazon' },
    { value: 'flipkart', label: 'Flipkart' },
    { value: 'meesho', label: 'Meesho' },
    { value: 'others', label: 'Others' }
  ]

  // Handle marketplace selection
  const handleMarketplaceChange = (value: string) => {
    const currentMarketplaces = formData.marketPlace || []
    const newMarketplaces = currentMarketplaces.includes(value)
      ? currentMarketplaces.filter((item: string) => item !== value)
      : [...currentMarketplaces, value]

    setFormData({
      ...formData,
      marketPlace: newMarketplaces
    })
  }

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

  useEffect(() => {
    const mobile = formData.alternativeMobileNumber.trim();

    if (!mobile) return;
    else if (!/^[1-9]\d{9}$/.test(mobile)) {
      setFormErrors((prev) => ({
        ...prev,
        alternativeMobileNumber: 'Enter a valid mobile number',
      }));
    } else {
      setFormErrors((prev: any) => {
        const { alternativeMobileNumber, ...rest } = prev;
        return rest;
      });
    }
  }, [formData.alternativeMobileNumber]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      const response = await fetch(`https://dashboard-api-dev.shopbraze.in/api/sellers-enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          mobileNumber: formData.mobileNumber,
          alternativeMobileNumber: formData.alternativeMobileNumber,
          email: formData.email,
          website: formData.website,
          city: formData.city,
          state: formData.state,
          annualTurnover: formData.annualTurnover,
          marketPlace: formData.marketPlace,
        }),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setCurrentStep(2);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOtp = () => {
    setIsLoading(true)
    fetch(`https://dashboard-api-dev.shopbraze.in/api/sellers-enquiry/verify-otp`, {
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
      }
    })
      .catch((err) => {
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
      formData.city.trim() !== '' &&
      formData.state.trim() !== '' &&
      !formErrors.mobileNumber &&
      !formErrors.alternativeMobileNumber
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
    marketplaceOptions,
    handleMarketplaceChange,
    handleSubmit,
    handleVerifyOtp,
    handleCurrentStep,
    isFormValid,
  }
}

export default useBookFreeDemoForm
