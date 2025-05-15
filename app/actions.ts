"use server"

export async function sendQuoteRequest(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const address = formData.get("address") as string
    const city = formData.get("city") as string
    const state = formData.get("state") as string
    const zipCode = formData.get("zipCode") as string
    const projectType = formData.get("projectType") as string
    const message = formData.get("message") as string
    const hearAbout = formData.get("hearAbout") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !address || !projectType || !message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Get the recipient email from environment variable or use default
    const emailTo = process.env.EMAIL_TO || "FocusConstructionMI@gmail.com"

    // Construct email content
    const emailContent = `
      <h1>New Quote Request</h1>
      <h2>Contact Information</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      
      <h2>Address</h2>
      <p>${address || "Not provided"}</p>
      <p>${city || ""} ${state || ""} ${zipCode || ""}</p>
      
      <h2>Project Details</h2>
      <p><strong>Project Type:</strong> ${projectType}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      
      <p><strong>How they heard about us:</strong> ${hearAbout || "Not specified"}</p>
    `

    // Check if Resend API key is available
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      // If we have a Resend API key, use it to send the email
      try {
        const { Resend } = await import("resend")
        const resend = new Resend(resendApiKey)

        await resend.emails.send({
          from: "Focus Construction <no-reply@focus-mi.com>",
          to: emailTo,
          subject: `New Quote Request: ${projectType} from ${firstName} ${lastName}`,
          html: emailContent,
          replyTo: email,
        })

        // Also send a confirmation email to the customer
        await resend.emails.send({
          from: "Focus Construction <no-reply@focus-mi.com>",
          to: email,
          subject: "We've Received Your Quote Request",
          html: `
            <h1>Thank You for Contacting Focus Construction</h1>
            <p>Dear ${firstName},</p>
            <p>We've received your request for a quote regarding your ${projectType} project. Our team will review your information and get back to you as soon as possible.</p>
            <p>If you have any immediate questions, please don't hesitate to call us at (248) 228-2222.</p>
            <p>Best regards,</p>
            <p>The Focus Construction Team</p>
          `,
        })
      } catch (error) {
        console.error("Error sending email with Resend:", error)
        // Fall back to logging if email sending fails
        console.log("Quote request received:", {
          to: emailTo,
          from: "Focus Construction <no-reply@focus-mi.com>",
          subject: `New Quote Request: ${projectType} from ${firstName} ${lastName}`,
          html: emailContent,
        })
      }
    } else {
      // If no Resend API key, just log the email content
      console.log("Quote request received:", {
        to: emailTo,
        from: "Focus Construction <no-reply@focus-mi.com>",
        subject: `New Quote Request: ${projectType} from ${firstName} ${lastName}`,
        html: emailContent,
      })
    }

    return {
      success: true,
      message: "Your quote request has been submitted successfully! We'll be in touch soon.",
    }
  } catch (error) {
    console.error("Error sending quote request:", error)
    return {
      success: false,
      message: "An error occurred while submitting your request. Please try again later.",
    }
  }
}
