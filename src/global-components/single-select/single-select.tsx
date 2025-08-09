import React, { useState, useRef, useEffect } from 'react'

interface Option {
  value: string
  label: string
}

interface SingleSelectProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  required?: boolean
  className?: string
  disabled?: boolean
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select',
  label,
  required = false,
  className = '',
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue)
    setIsOpen(false)
  }

  const selectedOption = options?.find(option => option?.value === value)

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <p className="text-xs font-medium md:text-sm md:font-normal">
          {label} {required && <span className="text-red-300">*</span>}
        </p>
      )}

      <div className="relative" ref={selectRef}>
        <button
          type="button"
          onClick={toggleDropdown}
          disabled={disabled}
          className={`w-full text-sm border border-gray-200 rounded-md px-3 py-1.5 md:py-2 outline-none focus:border-[#017356] focus:ring-2 focus:ring-[#017356]/20 transition-all duration-200 hover:border-gray-300 cursor-pointer bg-white text-left flex items-center justify-between 
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-[#fff] border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#017356] transition-colors duration-150"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleSelect
