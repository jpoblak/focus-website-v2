import Image from "next/image"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  link: string
  imageAlt: string
}

export default function ServiceCard({ title, description, imageSrc, link, imageAlt }: ServiceCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10 border border-neutral-200/50">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity z-10"></div>

      <div className="relative h-72 image-hover-zoom">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-h-0 group-hover:max-h-20 overflow-hidden">
          {description}
        </p>
        <Link
          href={link}
          className="inline-flex items-center px-4 py-2 rounded-md bg-neutral-800/60 text-white font-semibold hover:bg-neutral-700/75 backdrop-blur-md transition-all duration-300 shadow-md hover:shadow-lg text-sm"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5"
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
    </div>
  )
}
