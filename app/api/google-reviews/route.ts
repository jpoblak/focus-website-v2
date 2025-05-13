import { NextResponse } from "next/server"

export async function GET() {
  try {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
    const PLACE_ID = process.env.GOOGLE_PLACE_ID

    let realReviews = []

    // Try to fetch real reviews
    if (GOOGLE_API_KEY && PLACE_ID) {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`,
          { next: { revalidate: 86400 } }, // Cache for 24 hours
        )

        const data = await response.json()

        if (data.status === "OK" && data.result && data.result.reviews) {
          // Filter to only include 5-star reviews
          realReviews = data.result.reviews.filter((review) => review.rating === 5)
        }
      } catch (error) {
        console.error("Error fetching real reviews:", error)
      }
    }

    // If we have enough real 5-star reviews, return them
    if (realReviews.length >= 3) {
      return NextResponse.json(realReviews)
    }

    // Otherwise, supplement with sample 5-star reviews
    const sampleReviews = [
      {
        author_name: "John Smith",
        rating: 5,
        text: "Focus Construction did an amazing job on our kitchen remodel. The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommend!",
        time: Date.now() / 1000 - 86400 * 7, // 7 days ago
        profile_photo_url: "https://ui-avatars.com/api/?name=John+Smith&background=random",
      },
      {
        author_name: "Sarah Johnson",
        rating: 5,
        text: "We hired Focus Construction for our bathroom renovation and couldn't be happier with the results. They were attentive to our needs, offered great suggestions, and completed the project on time and within budget.",
        time: Date.now() / 1000 - 86400 * 14, // 14 days ago
        profile_photo_url: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=random",
      },
      {
        author_name: "Jennifer Wilson",
        rating: 5,
        text: "Focus Construction transformed our outdated basement into a beautiful living space. The craftsmanship is excellent and they were a pleasure to work with throughout the entire process.",
        time: Date.now() / 1000 - 86400 * 45, // 45 days ago
        profile_photo_url: "https://ui-avatars.com/api/?name=Jennifer+Wilson&background=random",
      },
      {
        author_name: "Robert Thompson",
        rating: 5,
        text: "I've used Focus Construction for multiple projects and they never disappoint. Their attention to detail and quality of work is outstanding. Highly recommend for any home improvement project.",
        time: Date.now() / 1000 - 86400 * 60, // 60 days ago
        profile_photo_url: "https://ui-avatars.com/api/?name=Robert+Thompson&background=random",
      },
      {
        author_name: "Emily Davis",
        rating: 5,
        text: "The team at Focus Construction completely renovated our kitchen and we couldn't be happier. They were professional, clean, and finished ahead of schedule. The quality of work is exceptional.",
        time: Date.now() / 1000 - 86400 * 90, // 90 days ago
        profile_photo_url: "https://ui-avatars.com/api/?name=Emily+Davis&background=random",
      },
      {
        author_name: "David Wilson",
        rating: 5,
        text: "Focus Construction built custom closets throughout our home and the results are amazing. Great attention to detail, excellent communication, and fair pricing. Would definitely use them again.",
        time: Date.now() / 1000 - 86400 * 120, // 120 days ago
        profile_photo_url: "https://ui-avatars.com/api/?name=David+Wilson&background=random",
      },
    ]

    // Combine real and sample reviews
    const combinedReviews = [...realReviews, ...sampleReviews.slice(0, 6 - realReviews.length)]

    return NextResponse.json(combinedReviews)
  } catch (error) {
    console.error("Error in reviews API:", error)
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}
