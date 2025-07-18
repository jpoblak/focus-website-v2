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
        title="COMMERCIAL & RESIDENTIAL REMODELING EXPERTS"
        subtitle="Focus Construction specializes in transforming commercial and residential spaces. From kitchens and bathrooms to complete office renovations, we bring your vision to life."
        buttonText="Request a Quote"
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
                Focus Construction is your trusted partner for both commercial and residential remodeling projects. With years of
                experience in the industry, we've built a reputation for quality craftsmanship, attention to detail, and
                exceptional customer service.
              </p>
              <p className="mb-4">
                We specialize in transforming interior spaces – from stylish kitchens and bathrooms in homes to functional and inviting commercial properties like offices and retail locations. Our goal is to create beautiful, practical areas that enhance value and everyday experience.
              </p>
              <p>
                Our team of skilled professionals is dedicated to bringing your vision to life, on time and within
                budget. We handle projects of all sizes, from targeted upgrades to complete renovations for both homes and businesses.
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
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl flex items-center justify-center bg-neutral-100">
                <Image src="/images/logo.png" alt="Focus Construction Logo" width={350} height={350} className="object-contain" />
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
              We offer a comprehensive range of commercial and residential remodeling services, specializing in transforming interior spaces to meet your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Kitchens"
              description="Upgrade your kitchen with custom cabinetry, premium countertops, and a layout that blends beauty with function."
              imageSrc="/images/kitchens/Kitchen Light with Double Height Counter Stainless.jpg"
              link="/services#kitchens"
              imageAlt="A bright, modern kitchen with light-colored cabinets, a two-tiered island, and stainless steel appliances."
            />
            <ServiceCard
              title="Bathrooms"
              description="Transform your bathroom into a spa-like retreat with sleek vanities, modern fixtures, and luxurious tile work."
              imageSrc="/images/bathrooms/Bathroom Light Shower and Tub.jpg"
              link="/services#bathrooms"
              imageAlt="A spacious, well-lit bathroom with a large freestanding tub and a glass-enclosed walk-in shower."
            />
            <ServiceCard
              title="Closets"
              description="Maximize your storage space with custom closet solutions designed to fit your specific needs and style."
              imageSrc="/images/closets/Closet Dark Wood, Light walls.jpg"
              link="/services#closets"
              imageAlt="A custom closet system with dark wood shelving and drawers, set against light-colored walls."
            />
            <ServiceCard
              title="Basements"
              description="Convert your unfinished basement into a functional living space, from entertainment rooms to home offices."
              imageSrc="/images/basements/Basement darker vaulted ceilings.png"
              link="/services#basements"
              imageAlt="A renovated basement featuring dark, vaulted ceilings and comfortable furnishings for entertainment."
            />
            <ServiceCard
              title="Commercial"
              description="Professional renovation services for retail spaces, offices, restaurants, and other commercial properties."
              imageSrc="/images/commercial/commerical building metal stud.jpg"
              link="/services#commercial"
              imageAlt="The interior of a commercial building under construction, showing the metal stud framing for new walls."
            />
            <ServiceCard
              title="And More"
              description="From flooring and painting to general repairs and custom carpentry, we handle all your home improvement needs."
              imageSrc="/images/general/Backyard Deck.jpg"
              link="/services#more"
              imageAlt="The wooden frame of a new deck being built onto the back of a house."
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
            <p className="text-sm text-neutral-500 mb-8">Reviews from our Google Business page & Internal Reviews</p>
          </div>

          <GoogleReviews />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Contact us today to schedule a consultation and get a free quote for your home improvement or repair project."
        buttonText="Request a Quote"
        buttonLink="/quote"
        showReviewButton={true}
      />
    </>
  )
}
