"use client"

import { useState } from "react"
import { Phone, X, FileText } from "lucide-react"
import Link from "next/link"

export default function CallButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const phoneNumber = "(248) 228-2222" // Updated phone number

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isExpanded && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-2 w-64 animate-fade-in-up">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-neutral-800">Get in Touch</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-neutral-500 hover:text-neutral-700"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-neutral-600 mb-2">Choose how you'd like to contact us</p>
          <p className="text-xs text-neutral-500 mb-3">We're available Monday-Friday, 9AM-4PM</p>
          <div className="space-y-2">
            <a
              href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
              className="flex items-center justify-center w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center py-2.5 px-4 rounded-md font-medium hover:shadow-md transition-all"
              onClick={() => setIsExpanded(false)}
            >
              <Phone size={18} className="mr-2" />
              {phoneNumber}
            </a>
            <Link
              href="/quote"
              className="flex items-center justify-center w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-center py-2.5 px-4 rounded-md font-medium hover:shadow-md transition-all border border-neutral-300"
              onClick={() => setIsExpanded(false)}
            >
              <FileText size={18} className="mr-2" />
              Request a Quote
            </Link>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${
          isExpanded ? "bg-neutral-700" : "bg-gradient-to-r from-primary-500 to-secondary-500"
        } p-4 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-white font-medium`}
        aria-label={isExpanded ? "Close contact options" : "Open contact options"}
      >
        <Phone className="mr-2" size={20} />
        <span>Contact Us</span>
      </button>
    </div>
  )
}
