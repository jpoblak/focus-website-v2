"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { fetchGoogleReviews } from "@/lib/google-reviews"
import Image from "next/image"

interface Review {
  author_name: string
  rating: number
  text: string
  time: number
  profile_photo_url?: string
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true)
        const data = await fetchGoogleReviews()
        // Extra filter to ensure only 5-star reviews are displayed
        const fiveStarReviews = data.filter((review: Review) => review.rating === 5)
        setReviews(fiveStarReviews)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching Google reviews:", err)
        setError("Unable to load reviews at this time.")
        setLoading(false)
      }
    }

    getReviews()
  }, [])

  // Render stars (always 5 stars)
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} className="text-primary-500 fill-primary-500" />
    ))
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-500 border-r-transparent"></div>
        <p className="mt-4">Loading reviews...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-neutral-700">{error}</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div
            key={index}
            className="glass rounded-xl p-6 md:p-8 hover-lift border border-white/20 backdrop-blur-sm hover:shadow-lg hover:shadow-primary-500/10 animated-waves"
          >
            <div className="flex items-center mb-4 relative z-10">
              <div className="flex items-center mb-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-primary-500/30">
                  <Image
                    src={review.profile_photo_url || "/placeholder-user.jpg"}
                    alt={review.author_name}
                    width={48}
                    height={48}
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold text-neutral-900">{review.author_name}</p>
                  <div className="flex">{renderStars()}</div>
                </div>
              </div>
            </div>
            <p className="text-neutral-700 mb-2 italic relative z-10">"{review.text}"</p>
            <p className="text-neutral-500 text-sm relative z-10">
              {new Date(review.time * 1000).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-8">
          <p className="text-neutral-700">No reviews available at this time.</p>
          <a
            href={`https://search.google.com/local/writereview?placeid=${process.env.GOOGLE_PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block mt-4"
          >
            Be Our First Reviewer
          </a>
        </div>
      )}
    </div>
  )
}
