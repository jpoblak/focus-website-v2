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
            <CategoryCard
              title="Kitchens"
              imageSrc="/images/kitchens/Kitchen Light with Double Height Counter Stainless.jpg"
              href="#kitchen-projects"
              imageAlt="A beautifully remodeled kitchen with stainless steel appliances, representing the kitchen projects category."
            />
            <CategoryCard
              title="Bathrooms"
              imageSrc="/images/bathrooms/Bathroom Light Shower and Tub.jpg"
              href="#bathroom-projects"
              imageAlt="A luxurious modern bathroom with a freestanding tub, representing the bathroom projects category."
            />
            <CategoryCard
              title="Closets"
              imageSrc="/images/closets/Closet Dark Wood, Light walls.jpg"
              href="#closet-projects"
              imageAlt="A custom walk-in closet with dark wood organizers, representing the closet projects category."
            />
            <CategoryCard
              title="Basements"
              imageSrc="/images/basements/Basement darker vaulted ceilings.png"
              href="#basement-projects"
              imageAlt="A renovated basement with dark vaulted ceilings, representing the basement projects category."
            />
            <CategoryCard
              title="Commercial"
              imageSrc="/images/commercial/commerical building metal stud.jpg"
              href="#commercial-projects"
              imageAlt="The metal stud framing of a commercial space under renovation, representing the commercial projects category."
            />
            <CategoryCard
              title="Other Projects"
              imageSrc="/images/general/Backyard Deck.jpg"
              href="#other-projects"
              imageAlt="A new deck under construction, representing the other projects category."
            />
          </div>
        </div>
      </section>

      {/* Kitchen Projects */}
      <section id="kitchen-projects" className="section scroll-mt-24">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Kitchen Renovations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Open Concept Kitchen"
              location="Ann Arbor, MI"
              imageSrc="/images/kitchens/Kitchen : Living Room.jpg"
              description="Open-concept kitchen remodel featuring granite counters, natural wood cabinetry, and a spacious island with built-in cooktop and seating."
              imageAlt="Luxury kitchen remodel with granite island, custom wood cabinetry, gas cooktop, hardwood floors, and open layout connecting to living and dining rooms"
            />
            <ProjectCard
              title="Clean Modern Kitchen"
              location="Plymouth, MI"
              imageSrc="/images/kitchens/Kitchen Light with Double Height Counter Stainless.jpg"
              description="Kitchen remodel featuring white cabinetry, granite countertops, stainless steel appliances, and a clean subway tile backsplash."
              imageAlt="Kitchen remodel with white cabinets, granite countertops, stainless steel appliances, and subway tile backsplash."
            />
            <ProjectCard
              title="Cherry Wood Kitchen"
              location="Royal Oak, MI"
              imageSrc="/images/kitchens/Kitchen Brown Cabinets with Light Accents.jpg"
              description="Cherry wood kitchen remodel with granite countertops, large-format tile flooring, and a white subway tile backsplash."
              imageAlt="Cherry wood cabinet kitchen remodel with granite countertops, ceramic tile flooring, subway tile backsplash, and recessed lighting."
            />
            <ProjectCard
              title="Luxury White Kitchen"
              location="Novi, MI"
              imageSrc="/images/kitchens/Kitchen White with Wood Slat Ceiling.jpg"
              description="Custom kitchen remodel with white cabinets, natural wood finishes, contrasting island, and premium built-in appliances."
              imageAlt="Custom kitchen remodel with white cabinets, natural wood finishes, contrasting island, and premium built-in appliances."
            />
            <ProjectCard
              title="Modern Gray Kitchen"
              location="Utica, MI"
              imageSrc="/images/kitchens/Willis Kitchen Face On Edited V2.jpg"
              description="Kitchen remodel featuring gray shaker cabinets, stainless appliances, dark subway tile, and wood look tile with new countertops for a clean modern finish."
              imageAlt="Gray cabinet kitchen remodel with updated counters and tile backsplash"
            />
            <ProjectCard
              title="Classic Monochrome Kitchen"
              location="West Bloomfield, MI"
              imageSrc="/images/kitchens/Kitchen White Cabinets w Black Counter.jpg"
              description="Kitchen remodel with white shaker cabinets, black stone countertops, subway tile backsplash, and stainless steel appliances"
              imageAlt="Kitchen remodel featuring white shaker cabinetry, black granite-style countertops, stainless appliances, and subway tile backsplash"
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
              title="Luxury Master Bathroom"
              location="Birmingham, MI"
              imageSrc="/images/bathrooms/Bathroom Light Shower and Tub.jpg"
              description="Full master bathroom remodel with double vanity, jacuzzi soaking tub, custom tile shower with glass enclosure, and modern light fixtures."
              imageAlt="Bright, spa-like luxury master bathroom remodel with a jacuzzi tub, custom tile shower, and dual sink vanity."
            />
            <ProjectCard
              title="Master Bathroom Refresh"
              location="Northville, MI"
              imageSrc="/images/bathrooms/Cotswold Bathroom After 2 cropped.jpg"
              description="Bathroom remodel converting tub to a walk-in shower, complete with full-height gray tile, sliding glass door, and updated vanity."
              imageAlt="Bathroom remodel with tub converted to walk-in shower, large gray tile surround, grab bars, and frameless sliding glass doors."
            />
            <ProjectCard
              title="Contemporary Master Bathroom"
              location="Ferndale, MI"
              imageSrc="/images/bathrooms/Bathroom Neutral w: Tub.jpg"
              description="Luxury bathroom remodel with glass shower, integrated soaking tub, dual-sink vanity, and custom finishes designed for a spa-like experience."
              imageAlt="A stylish powder room featuring a neutral color palette, a pedestal sink, and a combination shower and tub."
            />
            <ProjectCard
              title="Modern White Bathroom"
              location="Farmington Hills, MI"
              imageSrc="/images/bathrooms/Monroe Bathroom.jpg"
              description="Bathroom remodel featuring marble look tile, frameless glass shower, hex mosaic floor, and a freestanding tub for a bright modern design."
              imageAlt="Monroe, MI bathroom remodel with marble look tile and custom glass shower."
            />
            <ProjectCard
              title="Luxury Double Vanity Bathroom"
              location="Grosse Pointe, MI"
              imageSrc="/images/bathrooms/Bathroom White Double Vanity.jpg"
              description="Bathroom remodel featuring marble walls, floating vanity with quartz top, matte black fixtures, and dual mirrors with integrated lighting."
              imageAlt="Bathroom remodel featuring marble walls, floating vanity with quartz top, matte black fixtures, and dual mirrors with integrated lighting."
            />
            <ProjectCard
              title="Modern Walk-In Shower"
              location="Dearborn, MI"
              imageSrc="/images/bathrooms/Hubbell Bathroom Opening After.jpg"
              description="Tub-to-shower remodel designed for efficient use of space, with large-format marble-look tile, modern fixtures, and a compact white vanity."
              imageAlt="Tub-to-shower conversion bathroom remodelwith accessible walk-in shower, safety grab bar, sliding glass panels, and marble-look tile walls"
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
              title="Organized Walk-In Closet"
              location="Troy, MI"
              imageSrc="/images/closets/Closet Neutral.jpg"
              description="Custom walk-in closet with built-in shelving, integrated drawers, hanging storage, and boutique-style organization"
              imageAlt="Walk-in closet with built-in shelves, drawers, hanging sections, and organized layout next to ensuite bathroom"
            />
            <ProjectCard
              title="Reach-in Closet Makeover"
              location="Rochester, MI"
              imageSrc="/images/closets/Closet White Simple w Laminater Floors.jpg"
              description="Luxury walk-in closet with custom cabinetry, integrated drawer stack, LED wardrobe lighting, and clean vertical organization."
              imageAlt="Luxury custom closet with full-height drawers, vertical shelving, LED hanging bar lighting, and upscale built-in storage features."
            />
            <ProjectCard
              title="Modern Walk-In Closet"
              location="Canton, MI"
              imageSrc="/images/closets/Closet Dark Wood, Light walls.jpg"
              description="Custom walk-in closet system featuring integrated LED lighting, multiple hanging areas, built-in drawers, and floating wood shelving."
              imageAlt="Modern walk-in closet system with LED lighting, wood and matte finishes, custom drawers, hanging space, and built-in shelf organization"
            />
            <ProjectCard
              title="Closet Storage System"
              location="Chesterfield, MI"
              imageSrc="/images/closets/Closet White w Brown Laminate Floors.jpg"
              description="Walk-in closet with custom-built shelving towers, painted white millwork, and continuous hanging sections ideal for full wardrobe storage."
              imageAlt="Luxury custom closet with wraparound hanging bars, built-in shelves, hardwood floors, and open layout designed for premium walk-in closet storage."
            />
            <ProjectCard
              title="Simple Carpeted Closet"
              location="Plymouth, MI"
              imageSrc="/images/closets/Closet White w Carpet Floors near bathroom.jpg"
              description="Custom closet solution with wall-mounted shelving, open compartments, and practical hanging space for streamlined clothing storage."
              imageAlt="Affordable custom closet with white shelving units, metal hanging rods, and neutral finishes for organized clothing and accessories."
            />
            <ProjectCard
              title="Luxury Closet System"
              location="Birmingham, MI"
              imageSrc="/images/closets/Closet Dark Lighting.jpg"
              description="Custom walk-in closet with open shelf design, integrated drawer unit, exposed metal framework, and clean minimalist layout."
              imageAlt="Custom closet shelving system with open wood shelves, black support bars, built-in drawers, and modern walk-in closet layout."
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
              title="Basement Entertainment Space"
              location="West Bloomfield, MI"
              imageSrc="/images/basements/Basement darker vaulted ceilings.png"
              description="High-end basement remodel with a full-service bar, media and gaming zones, custom cabinetry, and recessed LED tray lighting."
              imageAlt="Finished basement with bar, pool table, lounge seating, custom cabinetry, and recessed lighting in an open concept layout."
            />
            <ProjectCard
              title="Basement Office & Lounge"
              location="Livonia, MI"
              imageSrc="/images/basements/Basement Egress Window Carpet.jpg"
              description="Finished basement remodel featuring a built-in home office, cozy lounge area, recessed lighting, and daylight egress windows."
              imageAlt="Finished basement with integrated home office, black leather couch, storage console, and natural light from egress windows."
            />
            <ProjectCard
              title="Finished Basement Lounge"
              location="Ann Arbor, MI"
              imageSrc="/images/basements/Basement White LVP.png"
              description="Stylish basement renovation featuring light wall colors, recessed LED lighting, cozy seating, and modern staircase access."
              imageAlt="Open basement design with modern flooring, light walls, recessed lights, and flexible lounge seating arrangement."
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
              title="Office Cabinet Installation"
              location="Milford, MI"
              imageSrc="/images/general/Cabinets Milford.jpg"
              description="Built-in cabinetry for break room with upper and lower storage, clean-lined millwork, and modern hardware tailored for high-traffic use."
              imageAlt="Commercial break room cabinetry with brown shaker doors and white solid surface countertops."
            />
            <ProjectCard
              title="Office Space Remodel"
              location="Troy, MI"
              imageSrc="/images/commercial/Troy office.jpg"
              description="Custom commercial interior build-out featuring high ceilings, efficient lighting, collaborative desk layout, and upgraded tech infrastructure."
              imageAlt="Modern commercial office build-out with rows of collaborative desks, suspended lights, textured accent wall, and ceiling-mounted monitors."
            />
            <ProjectCard
              title="Restaurant Buildout"
              location="Detroit, MI"
              imageSrc="/images/commercial/Restaurant Buildout.png"
              description="Complete restaurant renovation featuring a commercial kitchen, custom bar, polished concrete floors, and industrial lighting throughout an open-concept layout."
              imageAlt="Full restaurant buildout with commercial kitchen, open bar counter, exposed ductwork ceiling, and modern industrial interior finishes."
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
              imageSrc="/images/general/Backyard Deck.jpg"
              description="Spacious covered patio with steel pergola extension and a built-in grill area, designed for high-end backyard entertaining and relaxation."
              imageAlt="Covered backyard patio with modern pergola, built-in grill, and large natural stone pavers designed for outdoor gatherings."
            />
            <ProjectCard
              title="Luxury Home Theater"
              location="Birmingham, MI"
              imageSrc="/images/general/Home Theater WB.jpg"
              description="Custom home theater installation with acoustic wall panels, recessed lighting, premium recliners, and a wall-mounted projector screen."
              imageAlt="Basement media room remodel with theater seating, sound-dampening walls, custom lighting, and large projection screen."
            />
            <ProjectCard
              title="Modern Backyard Deck"
              location="Garden City, MI"
              imageSrc="/images/general/Remodeled deck.jpg"
              description="Spacious wood deck designed for outdoor entertaining, featuring wide wraparound steps, low-maintenance lumber, and seamless yard access."
              imageAlt="Backyard deck built with pressure-treated wood, horizontal platform steps, and functional layout for outdoor space expansion."
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
function CategoryCard({ title, imageSrc, href, imageAlt }: { title: string; imageSrc: string; href: string; imageAlt: string }) {
  return (
    <a
      href={href}
      className="group block bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="relative h-64">
        <Image
          src={imageSrc || "/placeholder.svg?height=400&width=600"}
          alt={imageAlt}
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
  imageAlt,
}: {
  title: string
  location: string
  imageSrc: string
  description: string
  imageAlt: string
}) {
  // Check if this is one of the specific closet images that needs object-contain
  const isSpecialClosetImage =
    imageSrc === "/images/closets/Closet Neutral.jpg" || imageSrc === "/images/closets/Closet White Simple w Laminater Floors.jpg"

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-64">
        <Image
          src={imageSrc || "/placeholder.svg?height=400&width=600"}
          alt={imageAlt}
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
