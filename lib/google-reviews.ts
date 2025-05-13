interface GoogleReview {
  author_name: string
  rating: number
  text: string
  time: number
  profile_photo_url?: string
}

export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  try {
    const response = await fetch("/api/google-reviews")

    if (!response.ok) {
      throw new Error("Failed to fetch reviews")
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching Google reviews:", error)
    throw error
  }
}
