import HeroSection from "@/components/hero-section"
import ServiceCard from "@/components/service-card"
import GoogleReviews from "@/components/google-reviews"
import CTASection from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <HeroSection
        title="YOUR HOME IMPROVEMENT & REPAIR SPECIALIST"
        subtitle="A general construction and repair business that specializes in interior remodels for kitchens, bathrooms, and more."
        buttonText="Request a Free Quote"
        buttonLink="/quote"
        videoBackground={true}
      />

      {/* About Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-neutral-50/80"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 animated-grid"></div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-100 text-primary-600 font-medium text-sm">
                About Us
              </div>
              <h2 className="text-3xl font-bold mb-4">About Focus Construction</h2>
              <p className="mb-4">
                Focus Construction is your trusted partner for all home improvement and repair needs. With years of
                experience in the industry, we've built a reputation for quality craftsmanship, attention to detail, and
                exceptional customer service.
              </p>
              <p className="mb-4">
                We specialize in transforming interior spaces, particularly kitchens and bathrooms, into beautiful,
                functional areas that enhance your home's value and your quality of life.
              </p>
              <p>
                Our team of skilled professionals is dedicated to bringing your vision to life, on time and within
                budget. We handle projects of all sizes, from minor repairs to complete room renovations.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center mt-4 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Learn More About Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image src="/images/about-image.jpg" alt="Focus Construction Team" fill className="object-cover" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-500/10 rounded-xl -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary-500/10 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-100 text-primary-600 font-medium text-sm">
              Our Services
            </div>
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="max-w-2xl mx-auto text-neutral-700">
              We offer a wide range of home improvement and repair services, specializing in interior remodels that
              transform your living spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Kitchens"
              description="Upgrade your kitchen with custom cabinetry, premium countertops, and a layout that blends beauty with function."
              imageSrc="/images/kitchen.jpg"
              link="/services#kitchens"
            />
            <ServiceCard
              title="Bathrooms"
              description="Transform your bathroom into a spa-like retreat with sleek vanities, modern fixtures, and luxurious tile work."
              imageSrc="/images/bathroom.jpg"
              link="/services#bathrooms"
            />
            <ServiceCard
              title="Closets"
              description="Maximize your storage space with custom closet solutions designed to fit your specific needs and style."
              imageSrc="/images/closets.jpg"
              link="/services#closets"
            />
            <ServiceCard
              title="Basements"
              description="Convert your unfinished basement into a functional living space, from entertainment rooms to home offices."
              imageSrc="/images/basements.jpg"
              link="/services#basements"
            />
            <ServiceCard
              title="Commercial"
              description="Professional renovation services for retail spaces, offices, restaurants, and other commercial properties."
              imageSrc="/images/commercial.jpg"
              link="/services#commercial"
            />
            <ServiceCard
              title="And More"
              description="From flooring and painting to general repairs and custom carpentry, we handle all your home improvement needs."
              imageSrc="/images/more-services.jpg"
              link="/services#more"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100/80 to-white/80 backdrop-blur-sm"></div>

        {/* Animated dots pattern */}
        <div className="absolute inset-0 animated-dots"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary-100 text-primary-600 font-medium text-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-neutral-700 mb-2">
              See what our satisfied customers have to say about our work. We're proud to share our 5-star reviews.
            </p>
            <p className="text-sm text-neutral-500 mb-8">Reviews from our Google Business page</p>
          </div>

          <GoogleReviews />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Contact us today to schedule a consultation and get a free quote for your home improvement or repair project."
        buttonText="Request a Free Quote"
        buttonLink="/quote"
        showReviewButton={true}
      />
    </>
  )
}
