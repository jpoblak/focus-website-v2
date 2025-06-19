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
              imageSrc="/images/BH Deck Mid Construction.jpg"
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
              title="Traditional Contrast Kitchen"
              location="Bloomfield Hills, MI"
              imageSrc="/images/kitchens/Kitchen White Fancy Cabients w Dark Counter and BAcksplash .jpg"
              description="Traditional kitchen remodel with cream-colored raised panel cabinets, dark granite countertops, custom tile backsplash, and hardwood flooring."
              imageAlt="Kitchen remodel with raised panel cabinets, granite countertops, decorative tile backsplash, and stainless steel appliances."
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
              imageSrc="/images/bathrooms/Bathroom Light Tub and Vanity.jpg"
              description="Bathroom remodel featuring white shaker cabinets, gray quartz countertop, frameless glass shower, and a freestanding soaking tub with wood-look tile flooring."
              imageAlt="Bathroom remodel with white vanity, quartz countertop, walk-in glass shower, freestanding tub, and light wood-look tile floor."
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
              description="Efficient reach-in closet with custom shelving and laminate flooring."
              imageAlt="A clean and simple reach-in closet with white shelving and rods, against a backdrop of laminate flooring."
            />
            <ProjectCard
              title="Mudroom Storage"
              location="Canton, MI"
              imageSrc="/images/closets/Closet Dark Wood, Light walls.jpg"
              description="Functional mudroom with custom lockers and bench seating."
              imageAlt="A functional mudroom storage solution with dark wood lockers, hooks for coats, and a built-in bench."
            />
            <ProjectCard
              title="Elegant Closet Design"
              location="Chesterfield, MI"
              imageSrc="/images/closets/Closet White w Brown Laminate Floors.jpg"
              description="White cabinetry with brown laminate flooring and custom shelving."
              imageAlt="An elegant closet with white custom cabinetry and shelving, contrasted with warm brown laminate floors."
            />
            <ProjectCard
              title="Modern Carpeted Closet"
              location="Plymouth, MI"
              imageSrc="/images/closets/Closet White w Carpet Floors near bathroom.jpg"
              description="Contemporary closet with white cabinetry and plush carpeting."
              imageAlt="A modern walk-in closet with white cabinets, ample hanging space, and soft grey carpeting."
            />
            <ProjectCard
              title="Luxury Closet Design"
              location="Birmingham, MI"
              imageSrc="/images/closets/Closet Dark Lighting.jpg"
              description="Premium closet with sophisticated lighting and custom cabinetry."
              imageAlt="A luxury closet with dramatic, dark cabinetry and integrated lighting to showcase clothing and accessories."
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
              imageAlt="A finished basement designed for entertainment with a large screen, comfortable seating, and dark vaulted ceilings."
            />
            <ProjectCard
              title="Basement Den w/ Office"
              location="Livonia, MI"
              imageSrc="/images/basements/Basement Egress Window Carpet.jpg"
              description="Multi-functional basement with home office and den space."
              imageAlt="A bright basement living space with an egress window, carpeted floor, and set up as a den and office area."
            />
            <ProjectCard
              title="Basement Apartment"
              location="Ann Arbor, MI"
              imageSrc="/images/basements/Basement White LVP.png"
              description="Complete basement apartment with kitchenette and living space."
              imageAlt="A finished basement apartment with light-colored luxury vinyl plank flooring, a small kitchenette, and living area."
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
              imageAlt="A newly renovated nail salon with modern pedicure chairs, manicure stations, and bright lighting."
            />
            <ProjectCard
              title="Office Space Remodel"
              location="Troy, MI"
              imageSrc="/images/commercial/Troy office.jpg"
              description="Contemporary office with open workspace and conference room."
              imageAlt="A modern, open-plan office space with workstations, glass-walled conference rooms, and collaborative areas."
            />
            <ProjectCard
              title="Restaurant Buildout"
              location="Detroit, MI"
              imageSrc="/images/commercial/Restaurant Buildout.png"
              description="Complete restaurant buildout with commercial kitchen and bar."
              imageAlt="The interior of a restaurant under construction, showing the bar area and dining space being built out."
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
              imageAlt="A large wooden deck under construction, showing the framework and initial decking."
            />
            <ProjectCard
              title="Home Theater"
              location="Birmingham, MI"
              imageSrc="/images/general/Home Theater WB.jpg"
              description="Luxury home theater with custom seating and premium equipment."
              imageAlt="A dedicated home theater room with plush tiered seating, a large projection screen, and acoustic wall panels."
            />
            <ProjectCard
              title="Dock Resurfacing"
              location="Harrison Township, MI"
              imageSrc="/images/general/Dock-After.jpg"
              description="Professional dock resurfacing with pre-stained wood and custom railings."
              imageAlt="A newly resurfaced wooden boat dock with fresh stain and secure railings, extending over the water."
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
