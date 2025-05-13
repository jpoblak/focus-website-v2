import Image from "next/image"

export default function ImageGuide() {
  const images = [
    {
      path: "/images/hero-bg.jpg",
      description: "Hero Background - Homepage main background image (1920x1080px)",
      location: "Used on homepage hero section",
    },
    {
      path: "/images/about-image.jpg",
      description: "About Image - Team or company image (800x600px)",
      location: "Used on homepage about section and about page",
    },
    {
      path: "/images/kitchen.jpg",
      description: "Kitchen Service Image - Kitchen renovation example (800x600px)",
      location: "Used on homepage services section and services page",
    },
    {
      path: "/images/bathroom.jpg",
      description: "Bathroom Service Image - Bathroom renovation example (800x600px)",
      location: "Used on homepage services section and services page",
    },
    {
      path: "/images/closets.jpg",
      description: "Closets Service Image - Custom closet example (800x600px)",
      location: "Used on homepage services section and services page",
    },
    {
      path: "/images/basements.jpg",
      description: "Basements Service Image - Basement renovation example (800x600px)",
      location: "Used on homepage services section and services page",
    },
    {
      path: "/images/commercial.jpg",
      description: "Commercial Service Image - Commercial renovation example (800x600px)",
      location: "Used on homepage services section and services page",
    },
    {
      path: "/images/more-services.jpg",
      description: "Additional Services Image - Other services example (800x600px)",
      location: "Used on homepage services section and services page",
    },
    {
      path: "/images/about-hero.jpg",
      description: "About Hero Image - About page hero background (1920x1080px)",
      location: "Used on about page hero section",
    },
    {
      path: "/images/services-hero.jpg",
      description: "Services Hero Image - Services page hero background (1920x1080px)",
      location: "Used on services page hero section",
    },
    {
      path: "/images/portfolio-hero.jpg",
      description: "Portfolio Hero Image - Portfolio page hero background (1920x1080px)",
      location: "Used on portfolio page hero section",
    },
    {
      path: "/images/quote-hero.jpg",
      description: "Quote Hero Image - Quote page hero background (1920x1080px)",
      location: "Used on quote page hero section",
    },
    {
      path: "/images/our-story.jpg",
      description: "Our Story Image - Company history image (800x600px)",
      location: "Used on about page",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Image Guide</h1>
      <p className="mb-8">
        This guide shows all the images used on the website with their descriptions and locations. To replace an image,
        upload a new image with the same name and dimensions to the corresponding path.
      </p>

      <div className="grid gap-8">
        {images.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-md">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative h-64">
                <Image src={image.path || "/placeholder.svg"} alt={image.description} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{image.path}</h2>
                <p className="text-neutral-700 mb-4">{image.description}</p>
                <div className="bg-neutral-100 p-3 rounded-md">
                  <h3 className="font-medium mb-1">Location:</h3>
                  <p className="text-neutral-600">{image.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
