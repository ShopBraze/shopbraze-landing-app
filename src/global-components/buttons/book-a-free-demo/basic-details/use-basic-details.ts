import { useEffect, useState } from "react"

type BasicDetailsProps = {
  formData: any,
  setFormData: any
  handleCurrentStep: (step: number) => void
}

const useBasicDetails = ({ formData, setFormData, handleCurrentStep }: BasicDetailsProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [formErrors, setFormErrors] = useState({
    mobileNumber: '',
    alternativeMobileNumber: '',
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
        handleCurrentStep(2);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false)
    }
  }
  return {
    formErrors,
    setFormErrors,
    handleSubmit,
    isLoading,
    marketplaceOptions,
    handleMarketplaceChange,
  }
}

export default useBasicDetails