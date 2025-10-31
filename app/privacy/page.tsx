import CTASection from "@/components/cta-section"

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-600 to-primary-700">
        <div className="container-custom relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm mt-4 opacity-90">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-6 text-neutral-700">
              Focus Construction ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="mb-4 text-neutral-700">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-neutral-700 space-y-2">
              <li>Request a quote or consultation</li>
              <li>Contact us through our website forms</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Interact with our customer service</li>
            </ul>
            <p className="mb-6 text-neutral-700">
              This information may include your name, email address, phone number, mailing address, project details, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
            <p className="mb-4 text-neutral-700">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-neutral-700 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages you visit and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Date and time of your visit</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="mb-4 text-neutral-700">We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-6 text-neutral-700 space-y-2">
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries, requests, and quotes</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To process transactions and send related information</li>
              <li>To monitor and analyze usage patterns and trends</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
            <p className="mb-4 text-neutral-700">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-neutral-700 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as website hosting, data analysis, and email delivery.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
              <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your explicit consent.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="mb-6 text-neutral-700">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-6 text-neutral-700">
              We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing behavior. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
            <p className="mb-6 text-neutral-700">
              Our website may contain links to third-party websites that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services.
            </p>

            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="mb-4 text-neutral-700">Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 mb-6 text-neutral-700 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="mb-6 text-neutral-700">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>

            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="mb-6 text-neutral-700">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-6 text-neutral-700">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4 text-neutral-700">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg mb-6">
              <p className="text-neutral-700 mb-2"><strong>Focus Construction</strong></p>
              <p className="text-neutral-700 mb-2">Phone: <a href="tel:2482282222" className="text-primary-600 hover:text-primary-700">(248) 228-2222</a></p>
              <p className="text-neutral-700 mb-2">Email: <a href="mailto:FocusConstructionMI@gmail.com" className="text-primary-600 hover:text-primary-700">FocusConstructionMI@gmail.com</a></p>
              <p className="text-neutral-700">Location: Southeast Michigan, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have Questions About Our Privacy Policy?"
        description="We're here to help. Contact us if you have any questions or concerns about how we handle your information."
        buttonText="Contact Us"
        buttonLink="/quote"
      />
    </>
  )
}

