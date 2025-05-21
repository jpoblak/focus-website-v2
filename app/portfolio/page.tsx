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
              imageSrc="/images/kitchens/Kitchen : Living Room.jpg"
              description="Open-concept kitchen with custom white cabinetry, quartz countertops, and modern appliances."
            />
            <ProjectCard
              title="Farmhouse Kitchen"
              location="Plymouth, MI"
              imageSrc="/images/kitchens/Kitchen Light with Double Height Counter Stainless.jpg"
              description="Rustic farmhouse kitchen with shaker cabinets, butcher block island, and farmhouse sink."
            />
            <ProjectCard
              title="Contemporary Open Concept"
              location="Royal Oak, MI"
              imageSrc="/images/kitchens/Kitchen Brown Cabinets with Light Accents.jpg"
              description="Modern kitchen with brown cabinetry, waterfall island, and integrated appliances."
            />
            <ProjectCard
              title="Luxury White Kitchen"
              location="Novi, MI"
              imageSrc="/images/kitchens/Kitchen White with Wood Slat Ceiling.jpg"
              description="White kitchen with wood slat ceiling, custom cabinetry, and premium finishes."
            />
            <ProjectCard
              title="Modern Contrast Kitchen"
              location="Bloomfield Hills, MI"
              imageSrc="/images/kitchens/Kitchen White Fancy Cabients w Dark Counter and BAcksplash .jpg"
              description="White cabinetry with dark countertops and statement backsplash."
            />
            <ProjectCard
              title="Classic Monochrome Kitchen"
              location="West Bloomfield, MI"
              imageSrc="/images/kitchens/Kitchen White Cabinets w Black Counter.jpg"
              description="Timeless design with white cabinetry and black countertops."
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
              imageSrc="/images/bathrooms/Bathroom Light Shower and Tub.jpg"
              description="Spa-inspired master bath with freestanding tub and walk-in shower."
            />
            <ProjectCard
              title="Guest Bathroom Refresh"
              location="Northville, MI"
              imageSrc="/images/bathrooms/Cotswold Bathroom After 2 cropped.jpg"
              description="Modern guest bathroom with custom tile work and designer fixtures."
            />
            <ProjectCard
              title="Powder Room Makeover"
              location="Ferndale, MI"
              imageSrc="/images/bathrooms/Bathroom Neutral w: Tub.jpg"
              description="Elegant powder room with custom vanity and statement wallpaper."
            />
            <ProjectCard
              title="Modern Bathroom Design"
              location="Farmington Hills, MI"
              imageSrc="/images/bathrooms/Bathroom Light Tub and Vanity.jpg"
              description="Contemporary bathroom with freestanding tub and custom vanity."
            />
            <ProjectCard
              title="Luxury Double Vanity Bath"
              location="Grosse Pointe, MI"
              imageSrc="/images/bathrooms/Bathroom White Double Vanity.jpg"
              description="Spacious bathroom with double vanity and custom tile work."
            />
            <ProjectCard
              title="Modern Shower Bath"
              location="Dearborn, MI"
              imageSrc="/images/bathrooms/Hubbell Bathroom Opening After.jpg"
              description="Contemporary bathroom with custom shower and accent tiles."
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
              imageSrc="/images/closets/Closet Neutral.jpg"
              description="Custom walk-in closet with built-in drawers and shoe storage."
            />
            <ProjectCard
              title="Reach-in Closet Makeover"
              location="Rochester, MI"
              imageSrc="/images/closets/Closet White Simple w Laminater Floors.jpg"
              description="Efficient reach-in closet with custom shelving and laminate flooring."
            />
            <ProjectCard
              title="Mudroom Storage"
              location="Canton, MI"
              imageSrc="/images/closets/Closet Dark Wood, Light walls.jpg"
              description="Functional mudroom with custom lockers and bench seating."
            />
            <ProjectCard
              title="Elegant Closet Design"
              location="Northville, MI"
              imageSrc="/images/closets/Closet White w Brown Laminate Floors.jpg"
              description="White cabinetry with brown laminate flooring and custom shelving."
            />
            <ProjectCard
              title="Modern Carpeted Closet"
              location="Plymouth, MI"
              imageSrc="/images/closets/Closet White w Carpet Floors near bathroom.jpg"
              description="Contemporary closet with white cabinetry and plush carpeting."
            />
            <ProjectCard
              title="Luxury Closet Design"
              location="Birmingham, MI"
              imageSrc="/images/closets/Closet Dark Lighting.jpg"
              description="Premium closet with sophisticated lighting and custom cabinetry."
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
              imageSrc="/images/basements/Basement darker vaulted ceilings.png"
              description="Luxury basement with home theater and custom wet bar."
            />
            <ProjectCard
              title="Basement Den w/ Office"
              location="Livonia, MI"
              imageSrc="/images/basements/Basement Egress Window Carpet.jpg"
              description="Multi-functional basement with home office and den space."
            />
            <ProjectCard
              title="Basement Apartment"
              location="Ann Arbor, MI"
              imageSrc="/images/basements/Basement White LVP.png"
              description="Complete basement apartment with kitchenette and living space."
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
              title="Nail Salon Renovation"
              location="Royal Oak, MI"
              imageSrc="/images/commercial/Nail Salon.png"
              description="Professional nail salon with custom workstations and modern fixtures."
            />
            <ProjectCard
              title="Office Space Remodel"
              location="Troy, MI"
              imageSrc="/images/commercial/Troy office.jpg"
              description="Contemporary office with open workspace and conference room."
            />
            <ProjectCard
              title="Restaurant Buildout"
              location="Detroit, MI"
              imageSrc="/images/commercial/Restaurant Buildout.png"
              description="Complete restaurant buildout with commercial kitchen and bar."
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
              description="Custom covered deck with built-in seating and fire pit area."
            />
            <ProjectCard
              title="Home Theater"
              location="Birmingham, MI"
              imageSrc="/images/general/Home Theater WB.jpg"
              description="Luxury home theater with custom seating and premium equipment."
            />
            <ProjectCard
              title="Dock Resurfacing"
              location="Harrison Township, MI"
              imageSrc="/images/general/Dock-After.jpg"
              description="Professional dock resurfacing with pre-stained wood and custom railings."
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
  // Check if this is one of the specific closet images that needs object-contain
  const isSpecialClosetImage = imageSrc === "/images/closets/Closet Neutral.jpg" || 
                             imageSrc === "/images/closets/Closet White Simple w Laminater Floors.jpg";
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-64">
        <Image 
          src={imageSrc || "/placeholder.svg?height=400&width=600"} 
          alt={title} 
          fill 
          className={isSpecialClosetImage ? "object-contain" : "object-cover"} 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-neutral-900">{title}</h3>
        <p className="text-sm text-secondary-600 mb-3">{location}</p>
        <p className="text-neutral-700">{description}</p>
      </div>
    </div>
  )
}
