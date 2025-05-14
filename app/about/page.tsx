import Image from "next/image"
import CTASection from "@/components/cta-section"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Learn more about Focus Construction and our commitment to quality craftsmanship
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                Focus Construction was founded with a simple mission: to provide high-quality home improvement and
                repair services with integrity, reliability, and exceptional craftsmanship.
              </p>
              <p className="mb-4">
                What began as a small operation has grown into a trusted name in the Michigan construction industry.
                Throughout our growth, we've maintained our commitment to personalized service and attention to detail
                that sets us apart.
              </p>
              <p>
                Today, we specialize in interior remodels, particularly kitchens and bathrooms, as well as a wide range
                of home improvement and repair services. Our team of skilled professionals brings years of experience
                and dedication to every project, ensuring results that exceed our clients' expectations.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/our-story.jpg" alt="Focus Construction Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto">These core principles guide everything we do at Focus Construction</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Quality</h3>
              <p className="text-neutral-700 text-center">
                We never compromise on quality. From materials to workmanship, we ensure everything meets our high
                standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Communication</h3>
              <p className="text-neutral-700 text-center">
                We believe in clear, honest communication throughout every project, keeping you informed every step of
                the way.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Timeliness</h3>
              <p className="text-neutral-700 text-center">
                We respect your time and work efficiently to complete projects on schedule without sacrificing quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Innovation</h3>
              <p className="text-neutral-700 text-center">
                We stay current with the latest trends, techniques, and materials to bring innovative solutions to your
                projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Value</h3>
              <p className="text-neutral-700 text-center">
                We provide competitive pricing without compromising on quality, ensuring you receive excellent value for
                your investment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Customer Satisfaction</h3>
              <p className="text-neutral-700 text-center">
                Your satisfaction is our ultimate goal. We work closely with you to ensure your vision becomes reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="max-w-2xl mx-auto">
              We follow a structured approach to ensure every project runs smoothly from start to finish
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary-500 transform md:-translate-x-1/2"></div>

              {/* Step 1 */}
              <div className="relative mb-12 md:pl-0">
                <div className="flex md:flex-row items-start md:items-center">
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full mr-4 md:mr-0 md:order-2 shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1 md:text-right md:pr-8 md:order-1">
                    <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                    <p className="text-neutral-700">
                      We meet with you to discuss your project goals, budget, and timeline. This helps us understand
                      your vision and requirements.
                    </p>
                  </div>
                  <div className="flex-1 md:pl-8 hidden md:block md:order-3"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-12 md:pr-0">
                <div className="flex md:flex-row items-start md:items-center">
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full mr-4 md:mr-0 md:order-2 shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:order-3">
                    <h3 className="text-xl font-bold mb-2">Design & Planning</h3>
                    <p className="text-neutral-700 mb-4">
                      We develop a detailed plan for your project, including designs, material selections, and a
                      comprehensive estimate.
                    </p>
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl md:order-1">
                      <Image src="/images/general/blueprint-964630_1280.jpg" alt="Design and Planning Blueprint" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="flex-1 md:pr-8 hidden md:block md:order-1"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-12 md:pl-0">
                <div className="flex md:flex-row items-start md:items-center">
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full mr-4 md:mr-0 md:order-2 shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1 md:text-right md:pr-8 md:order-1">
                    <h3 className="text-xl font-bold mb-2">Proposal & Contract</h3>
                    <p className="text-neutral-700">
                      We provide a detailed proposal outlining scope, materials, timeline, and costs. Once approved, we
                      finalize the contract.
                    </p>
                  </div>
                  <div className="flex-1 md:pl-8 hidden md:block md:order-3"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative mb-12 md:pr-0">
                <div className="flex md:flex-row items-start md:items-center">
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full mr-4 md:mr-0 md:order-2 shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1 md:pl-8 md:order-3">
                    <h3 className="text-xl font-bold mb-2">Project Execution</h3>
                    <p className="text-neutral-700">
                      Our skilled team executes the project according to plan, with regular updates and open
                      communication throughout.
                    </p>
                  </div>
                  <div className="flex-1 md:pr-8 hidden md:block md:order-1"></div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative md:pl-0">
                <div className="flex md:flex-row items-start md:items-center">
                  <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full mr-4 md:mr-0 md:order-2 shrink-0">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="flex-1 md:text-right md:pr-8 md:order-1">
                    <h3 className="text-xl font-bold mb-2">Final Walkthrough & Follow-up</h3>
                    <p className="text-neutral-700">
                      We conduct a final inspection with you to ensure everything meets your expectations, followed by
                      ongoing support.
                    </p>
                  </div>
                  <div className="flex-1 md:pl-8 hidden md:block md:order-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work With Us?"
        description="Contact us today to schedule a consultation and start your home improvement journey."
        buttonText="Request a Quote"
        buttonLink="/quote"
      />
    </>
  )
}
