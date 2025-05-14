"use client"

import { useState } from "react"
import { Phone, X } from "lucide-react"

export default function CallButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const phoneNumber = "(248) 228-2222" // Updated phone number

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isExpanded && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-2 w-56 animate-fade-in-up">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-neutral-800">Call Us</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-neutral-500 hover:text-neutral-700"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-neutral-600 mb-3">We're available Monday-Saturday</p>
          <a
            href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
            className="block w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center py-2 px-4 rounded-md font-medium hover:shadow-md transition-all"
          >
            {phoneNumber}
          </a>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${
          isExpanded ? "bg-neutral-700" : "bg-gradient-to-r from-primary-500 to-secondary-500"
        } p-4 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-white font-medium`}
        aria-label={isExpanded ? "Close call information" : "Open call information and dial"}
      >
        <Phone className="mr-2" size={20} />
        <span>Call Us</span>
      </button>
    </div>
  )
}
