import Image from "next/image"
import Link from "next/link"
import CTASection from "@/components/cta-section"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Comprehensive home improvement and repair services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center mb-12">
              At Focus Construction, we offer a wide range of home improvement and repair services. Our team of skilled
              professionals is dedicated to delivering high-quality workmanship and exceptional customer service for
              projects of all sizes.
            </p>
          </div>

          {/* Kitchen Service */}
          <div id="kitchens" className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-mt-24">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Kitchen Remodeling</h2>
              <p className="mb-4">
                Transform your kitchen into a beautiful, functional space that meets your needs and reflects your style.
                Our kitchen remodeling services include:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Custom cabinet design and installation</li>
                <li>Premium countertop selection and installation</li>
                <li>Backsplash design and installation</li>
                <li>Flooring replacement</li>
                <li>Lighting upgrades</li>
                <li>Appliance installation</li>
                <li>Plumbing and electrical work</li>
                <li>Island additions and modifications</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn-primary">
                  Get a Quote
                </Link>
                <Link
                  href="/portfolio#kitchen-projects"
                  className="btn-primary"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image src="/images/kitchens/Kitchen White with Wood Slat Ceiling.jpg" alt="Kitchen Remodeling" fill className="object-cover" />
            </div>
          </div>

          {/* Bathroom Service */}
          <div id="bathrooms" className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-mt-24">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/bathrooms/Bathroom White Double Vanity.jpg" alt="Bathroom Remodeling" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Bathroom Remodeling</h2>
              <p className="mb-4">
                Create a spa-like retreat in your home with our bathroom remodeling services. We can transform your
                outdated bathroom into a modern, luxurious space. Our services include:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Custom vanity design and installation</li>
                <li>Shower and tub replacement</li>
                <li>Tile work for floors, walls, and showers</li>
                <li>Fixture upgrades</li>
                <li>Lighting improvements</li>
                <li>Plumbing updates</li>
                <li>Accessibility modifications</li>
                <li>Storage solutions</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn-primary">
                  Get a Quote
                </Link>
                <Link
                  href="/portfolio#bathroom-projects"
                  className="btn-primary"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>

          {/* Closets Service */}
          <div id="closets" className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-mt-24">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Custom Closets</h2>
              <p className="mb-4">
                Maximize your storage space with custom closet solutions designed to fit your specific needs and style.
                Our closet services include:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Walk-in closet design and installation</li>
                <li>Reach-in closet organization</li>
                <li>Custom shelving and drawer systems</li>
                <li>Specialty storage solutions</li>
                <li>Mudroom and entryway organization</li>
                <li>Pantry design and installation</li>
                <li>Laundry room organization</li>
                <li>Garage storage systems</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn-primary">
                  Get a Quote
                </Link>
                <Link
                  href="/portfolio#closet-projects"
                  className="btn-primary"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image src="/images/closets/Closet White with wood floors.jpg" alt="Custom Closets" fill className="object-cover" />
            </div>
          </div>

          {/* Basements Service */}
          <div id="basements" className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-mt-24">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/basements/Basement mid-remodel.png" alt="Basement Renovations" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Basement Renovations</h2>
              <p className="mb-4">
                Convert your unfinished basement into a functional living space that adds value to your home. Our
                basement renovation services include:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Basement finishing and waterproofing</li>
                <li>Home theater and entertainment spaces</li>
                <li>Basement bars and kitchenettes</li>
                <li>Home offices and workspaces</li>
                <li>Guest suites and additional bedrooms</li>
                <li>Basement bathrooms</li>
                <li>Game rooms and recreational spaces</li>
                <li>Storage solutions and organization</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn-primary">
                  Get a Quote
                </Link>
                <Link
                  href="/portfolio#basement-projects"
                  className="btn-primary"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>

          {/* Commercial Service */}
          <div id="commercial" className="grid md:grid-cols-2 gap-12 items-center mb-20 scroll-mt-24">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Commercial Renovations</h2>
              <p className="mb-4">
                Professional renovation services for businesses of all sizes. Our commercial renovation services
                include:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Retail space design and buildout</li>
                <li>Office renovations and remodels</li>
                <li>Restaurant and food service renovations</li>
                <li>Medical and dental office buildouts</li>
                <li>Salon and spa renovations</li>
                <li>Commercial bathroom renovations</li>
                <li>ADA compliance upgrades</li>
                <li>Commercial kitchen installations</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn-primary">
                  Get a Quote
                </Link>
                <Link
                  href="/portfolio#commercial-projects"
                  className="btn-primary"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image src="/images/commercial.jpg" alt="Commercial Renovations" fill className="object-cover" />
            </div>
          </div>

          {/* Additional Services */}
          <div id="more" className="grid md:grid-cols-2 gap-12 items-center mb-12 scroll-mt-24">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/more-services.jpg" alt="Additional Services" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
              <p className="mb-4">
                Beyond our specialty areas, we offer a wide range of home improvement and repair services:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Flooring installation and replacement</li>
                <li>Interior and exterior painting</li>
                <li>Custom carpentry and trim work</li>
                <li>Deck construction and repair</li>
                <li>Window and door installation</li>
                <li>Drywall repair and installation</li>
                <li>Tile installation</li>
                <li>General home repairs and maintenance</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn-primary">
                  Get a Quote
                </Link>
                <Link
                  href="/portfolio#other-projects"
                  className="btn-primary"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Home?"
        description="Contact us today to discuss your project and get a free, no-obligation quote."
        buttonText="Request a Quote"
        buttonLink="/quote"
      />
    </>
  )
}
