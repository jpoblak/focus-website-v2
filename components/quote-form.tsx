"use client"

import { useState } from "react"
import { sendQuoteRequest } from "@/app/actions"

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormStatus({})

    try {
      const result = await sendQuoteRequest(formData)
      setFormStatus({
        success: result.success,
        message: result.message,
      })
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
          Address *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
          />
        </div>
        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-neutral-700 mb-1">
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-1">
          Project Type *
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
        >
          <option value="">Select a project type</option>
          <option value="Kitchen Remodel">Kitchen Remodel</option>
          <option value="Bathroom Remodel">Bathroom Remodel</option>
          <option value="Custom Closets">Custom Closets</option>
          <option value="Basement Renovation">Basement Renovation</option>
          <option value="Commercial Project">Commercial Project</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Please provide details about your project, including any specific requirements or questions you have."
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
        ></textarea>
      </div>

      <div>
        <label htmlFor="hearAbout" className="block text-sm font-medium text-neutral-700 mb-1">
          How did you hear about us?
        </label>
        <select
          id="hearAbout"
          name="hearAbout"
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
        >
          <option value="">Select an option</option>
          <option value="Google">Google</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend/Family">Friend/Family</option>
          <option value="Previous Customer">Previous Customer</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {formStatus.message && (
        <div
          className={`p-4 rounded-md ${formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
        >
          {formStatus.message}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Quote Request"}
        </button>
      </div>
    </form>
  )
}
