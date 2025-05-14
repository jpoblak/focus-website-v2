import Link from "next/link"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  showReviewButton?: boolean
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  showReviewButton = false,
}: CTASectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600"></div>

      {/* Animated circuit pattern */}
      <div className="absolute inset-0 animated-circuit"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">{title}</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-4">
          <Link
            href={buttonLink}
            className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full text-lg text-center transition-all duration-300 hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-0.5 border border-white/30"
          >
            {buttonText}
          </Link>

          {/* {showReviewButton && ( // Keep the prop for now, but comment out the button rendering
            <a
              href="https://g.page/r/CYnLPbfGqJVsEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/30 hover:shadow-lg transform hover:-translate-y-0.5 border border-white/30"
            >
              Leave a Review
            </a>
          )} */}
        </div>
      </div>
    </section>
  )
}
