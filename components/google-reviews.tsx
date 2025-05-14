"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { fetchGoogleReviews } from "@/lib/google-reviews"
import Image from "next/image"

interface Review {
  author_name: string
  rating: number
  text: string
  time: number
  profile_photo_url?: string
}

const ITEMS_PER_PAGE = 3;

// Helper function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(0);

  const formatAuthorName = (name: string): string => {
    if (!name || typeof name !== 'string') {
      return "Valued Client";
    }
    const parts = name.trim().split(/\s+/);
    if (parts.length > 1) {
      const firstName = parts.slice(0, -1).join(" ");
      const lastNameInitial = parts[parts.length - 1].charAt(0);
      return `${firstName} ${lastNameInitial}.`;
    }
    return name;
  };

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true)
        const data = await fetchGoogleReviews()
        const fiveStarReviews = data.filter((review: Review) => review.rating === 5)
        setReviews(shuffleArray(fiveStarReviews))
        setLoading(false)
      } catch (err) {
        console.error("Error fetching Google reviews:", err)
        setError("Unable to load reviews at this time.")
        setLoading(false)
      }
    }
    getReviews()
  }, [])

  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (reviews.length <= ITEMS_PER_PAGE) {
      return;
    }
    const timer = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 30000);

    return () => clearInterval(timer);
  }, [reviews, totalPages]);

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} className="text-primary-500 fill-primary-500" />
    ))
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

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

  const paginatedReviews = reviews.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div>
      {reviews.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center items-center mb-6 space-x-4">
          <button
            onClick={handlePrevPage}
            className="p-2 rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={24} className="text-primary-600" />
          </button>
          <button
            onClick={handleNextPage}
            className="p-2 rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next reviews"
          >
            <ChevronRight size={24} className="text-primary-600" />
          </button>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.length > 0 ? (
          paginatedReviews.map((review, index) => (
            <div
              key={`${review.time}-${index}`}
              className="glass rounded-xl p-6 md:p-8 hover-lift border border-white/20 backdrop-blur-sm hover:shadow-lg hover:shadow-primary-500/10 animated-waves flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-4 relative z-10">
                  <div className="flex items-center mb-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-primary-500/30">
                      <Image
                        src={review.profile_photo_url || "/placeholder-user.jpg"}
                        alt={formatAuthorName(review.author_name)}
                        width={48}
                        height={48}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{formatAuthorName(review.author_name)}</p>
                      <div className="flex">{renderStars()}</div>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4 italic relative z-10 h-24 overflow-y-auto">
                  "{review.text}"
                </p>
              </div>
              <p className="text-neutral-500 text-sm relative z-10 mt-auto">
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
      <div className="col-span-full text-center pt-12">
        <a
          href="https://g.page/r/CVw9muFTxk8iEAI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          Leave a Review
        </a>
      </div>
    </div>
  )
}
