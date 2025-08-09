import { useEffect, useState } from "react"
import { sendMixPanelEvent } from "lib/mixpanelClient"
import { fbq } from "events/fb-pixel"

type BasicDetailsProps = {
  formData: any,
  setFormData: any
  handleCurrentStep: (step: number) => void
}

const useBasicDetails = ({ formData, setFormData, handleCurrentStep }: BasicDetailsProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [formErrors, setFormErrors] = useState({
    mobileNumber: '',
  })

  // Product category options
  const productCategoryOptions = [
    { value: 'Apparel', label: 'Apparel' },
    { value: 'Home Decor/Furnishing/Kitchen', label: 'Home Decor/Furnishing/Kitchen' },
    { value: 'Fashion accesssories', label: 'Fashion accesssories' },
    { value: 'Health & Fitness', label: 'Health & Fitness' },
    { value: 'FMCG/Consumer Goods', label: 'FMCG/Consumer Goods' },
    { value: 'Beauty & Cosmetics', label: 'Beauty & Cosmetics' },
    { value: 'Others', label: 'Others(e.g., Jewellery, Toys, etc.)' }
  ]

  // Marketplace options
  const marketplaceOptions = [
    { value: 'Amazon/Flipkart/Meesho/Other Marketplace', label: 'Amazon/Flipkart/Meesho/Other Marketplace' },
    { value: 'Own Website', label: 'Own Website' },
    { value: 'Both (MarketPlace and Own Website)', label: 'Both (MarketPlace and Own Website)' },
    { value: 'None', label: 'None' }
  ]

  // Number of orders options
  const number_of_orders_options = [
    { value: '0', label: '0' },
    { value: '1-20', label: '1-20' },
    { value: '20-100', label: '20-100' },
    { value: '100+', label: '100+' }
  ]

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
      const response = await fetch(`http://localhost:8080/api/sellers-enquiry`, {
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
        handleCurrentStep(2);
      } else {
        console.error('Failed to submit form');
        sendMixPanelEvent("Leads Basic Details Submission Failed")
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      sendMixPanelEvent("Leads Basic Details Submission Failed")
    } finally {
      setIsLoading(false)
    }
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
    formErrors,
    setFormErrors,
    handleSubmit,
    isLoading,
    productCategoryOptions,
    marketplaceOptions,
    number_of_orders_options,
    isFormValid,
  }
}

export default useBasicDetails