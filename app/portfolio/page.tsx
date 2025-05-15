import Image from "next/image"
import Link from "next/link"
import CTASection from "@/components/cta-section"

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/portfolio-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Explore our past projects and see the quality of our craftsmanship
          </p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="max-w-2xl mx-auto text-neutral-700">Click on a category to view our completed projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CategoryCard title="Kitchens" imageSrc="/images/kitchens/Kitchen Light with Double Height Counter Stainless.jpg" href="#kitchen-projects" />
            <CategoryCard title="Bathrooms" imageSrc="/images/bathrooms/Bathroom Light Shower and Tub.jpg" href="#bathroom-projects" />
            <CategoryCard title="Closets" imageSrc="/images/closets/Closet Dark Wood, Light walls.jpg" href="#closet-projects" />
            <CategoryCard title="Basements" imageSrc="/images/basements/Basement darker vaulted ceilings.png" href="#basement-projects" />
            <CategoryCard title="Commercial" imageSrc="/images/commercial/commerical building metal stud.jpg" href="#commercial-projects" />
            <CategoryCard title="Other Projects" imageSrc="/images/BH Deck Mid Construction.jpg" href="#other-projects" />
          </div>
        </div>
      </section>

      {/* Kitchen Projects */}
      <section id="kitchen-projects" className="section scroll-mt-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Kitchen Renovations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Modern Kitchen Remodel"
              location="Ann Arbor, MI"
              imageSrc="/images/kitchen-project-1.jpg"
              description="Complete kitchen renovation with custom cabinetry, quartz countertops, and new appliances."
            />
            <ProjectCard
              title="Farmhouse Kitchen"
              location="Plymouth, MI"
              imageSrc="/images/kitchen-project-2.jpg"
              description="Rustic farmhouse kitchen with shaker cabinets, butcher block island, and subway tile backsplash."
            />
            <ProjectCard
              title="Contemporary Open Concept"
              location="Royal Oak, MI"
              imageSrc="/images/kitchen-project-3.jpg"
              description="Open concept kitchen with waterfall island, minimalist cabinetry, and integrated appliances."
            />
            <ProjectCard
              title="New Kitchen Design 1"
              location="City, MI"
              imageSrc="/images/kitchens/Kitchen White with Wood Slat Ceiling.jpg"
              description="Placeholder description for a beautiful new kitchen featuring a wood slat ceiling."
            />
            <ProjectCard
              title="New Kitchen Design 2"
              location="City, MI"
              imageSrc="/images/kitchens/Kitchen White Fancy Cabients w Dark Counter and BAcksplash .jpg"
              description="Placeholder description for a fancy kitchen with white cabinets and dark accents."
            />
            <ProjectCard
              title="New Kitchen Design 3"
              location="City, MI"
              imageSrc="/images/kitchens/Kitchen White Cabinets w Black Counter.jpg"
              description="Placeholder description for a classic kitchen with white cabinets and black counters."
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/quote" className="btn-primary">
              Start Your Kitchen Project
            </Link>
          </div>
        </div>
      </section>

      {/* Bathroom Projects */}
      <section id="bathroom-projects" className="section bg-neutral-50 scroll-mt-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Bathroom Transformations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Luxury Master Bath"
              location="Birmingham, MI"
              imageSrc="/images/bathroom-project-1.jpg"
              description="Spa-like master bathroom with freestanding tub, walk-in shower, and double vanity."
            />
            <ProjectCard
              title="Guest Bathroom Refresh"
              location="Novi, MI"
              imageSrc="/images/bathroom-project-2.jpg"
              description="Complete guest bathroom renovation with modern fixtures and custom tile work."
            />
            <ProjectCard
              title="Powder Room Makeover"
              location="Ferndale, MI"
              imageSrc="/images/bathroom-project-3.jpg"
              description="Small powder room with big impact featuring custom vanity and statement wallpaper."
            />
            <ProjectCard
              title="New Bathroom Design 1"
              location="City, MI"
              imageSrc="/images/bathrooms/Bathroom White Small White.jpg"
              description="Placeholder description for a compact and elegant white bathroom design."
            />
            <ProjectCard
              title="New Bathroom Design 2"
              location="City, MI"
              imageSrc="/images/bathrooms/Bathroom White Double Vanity.jpg"
              description="Placeholder description for a spacious white bathroom with a double vanity."
            />
            <ProjectCard
              title="New Bathroom Design 3"
              location="City, MI"
              imageSrc="/images/bathrooms/Bathroom Shower Tile With Accent Strip.jpg"
              description="Placeholder description for a modern bathroom shower with accent tiles."
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/quote" className="btn-primary">
              Start Your Bathroom Project
            </Link>
          </div>
        </div>
      </section>

      {/* Closet Projects */}
      <section id="closet-projects" className="section scroll-mt-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Custom Closet Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Walk-in Closet System"
              location="Troy, MI"
              imageSrc="/images/closet-project-1.jpg"
              description="Custom walk-in closet with built-in drawers, shoe racks, and hanging storage."
            />
            <ProjectCard
              title="Reach-in Closet Makeover"
              location="Rochester, MI"
              imageSrc="/images/closet-project-2.jpg"
              description="Maximized storage in a reach-in closet with custom shelving and organization solutions."
            />
            <ProjectCard
              title="Mudroom Storage"
              location="Canton, MI"
              imageSrc="/images/closet-project-3.jpg"
              description="Functional mudroom with custom lockers, bench seating, and shoe storage."
            />
            <ProjectCard
              title="New Closet Design 1"
              location="City, MI"
              imageSrc="/images/closets/Closet White with wood floors.jpg"
              description="Placeholder description for a white closet with elegant wood flooring."
            />
            <ProjectCard
              title="New Closet Design 2"
              location="City, MI"
              imageSrc="/images/closets/Closet White w Carpet Floors near bathroom.jpg"
              description="Placeholder description for a white carpeted closet, possibly near a bathroom."
            />
            <ProjectCard
              title="New Closet Design 3"
              location="City, MI"
              imageSrc="/images/closets/Closet Dark Lighting.jpg"
              description="Placeholder description for a closet with sophisticated dark lighting."
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/quote" className="btn-primary">
              Start Your Closet Project
            </Link>
          </div>
        </div>
      </section>

      {/* Basement Projects */}
      <section id="basement-projects" className="section bg-neutral-50 scroll-mt-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Basement Renovations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Entertainment Basement"
              location="West Bloomfield, MI"
              imageSrc="/images/basement-project-1.jpg"
              description="Finished basement with home theater, wet bar, and game area for family entertainment."
            />
            <ProjectCard
              title="Basement Home Office"
              location="Livonia, MI"
              imageSrc="/images/basement-project-2.jpg"
              description="Converted basement space into a functional home office with built-in storage."
            />
            <ProjectCard
              title="Basement Apartment"
              location="Ann Arbor, MI"
              imageSrc="/images/basement-project-3.jpg"
              description="Complete basement apartment with kitchenette, bathroom, and living space."
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/quote" className="btn-primary">
              Start Your Basement Project
            </Link>
          </div>
        </div>
      </section>

      {/* Commercial Projects */}
      <section id="commercial-projects" className="section scroll-mt-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Commercial Renovations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Retail Store Renovation"
              location="Royal Oak, MI"
              imageSrc="/images/commercial-project-1.jpg"
              description="Complete retail space renovation with custom displays and updated lighting."
            />
            <ProjectCard
              title="Office Space Remodel"
              location="Southfield, MI"
              imageSrc="/images/commercial-project-2.jpg"
              description="Modern office renovation with open workspace, conference room, and break area."
            />
            <ProjectCard
              title="Restaurant Buildout"
              location="Detroit, MI"
              imageSrc="/images/commercial/Restaurant Buildout.png"
              description="Custom restaurant buildout including kitchen, dining area, and bar."
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/quote" className="btn-primary">
              Start Your Commercial Project
            </Link>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section id="other-projects" className="section bg-neutral-50 scroll-mt-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Additional Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Covered Deck Construction"
              location="Shelby Township, MI"
              imageSrc="/images/BH Deck Mid Construction.jpg"
              description="Custom concrete deck, built-in seating for fire pit, and metal pergola."
            />
            <ProjectCard
              title="Home Addition"
              location="Birmingham, MI"
              imageSrc="/images/other-project-2.jpg"
              description="Two-story home addition with master suite and expanded living space."
            />
            <ProjectCard
              title="Whole Home Renovation"
              location="Grosse Pointe, MI"
              imageSrc="/images/other-project-3.jpg"
              description="Complete home renovation including kitchen, bathrooms, and living spaces."
            />
          </div>
          <div className="mt-8 text-center">
            <Link href="/quote" className="btn-primary">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Contact us today to schedule a consultation and bring your vision to life."
        buttonText="Request a Quote"
        buttonLink="/quote"
      />
    </>
  )
}

// Category Card Component - Removed project count
function CategoryCard({ title, imageSrc, href }: { title: string; imageSrc: string; href: string }) {
  return (
    <a
      href={href}
      className="group block bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="relative h-64">
        <Image
          src={imageSrc || "/placeholder.svg?height=400&width=600"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </div>
    </a>
  )
}

// Project Card Component
function ProjectCard({
  title,
  location,
  imageSrc,
  description,
}: { title: string; location: string; imageSrc: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-64">
        <Image src={imageSrc || "/placeholder.svg?height=400&width=600"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-neutral-900">{title}</h3>
        <p className="text-sm text-secondary-600 mb-3">{location}</p>
        <p className="text-neutral-700">{description}</p>
      </div>
    </div>
  )
}
