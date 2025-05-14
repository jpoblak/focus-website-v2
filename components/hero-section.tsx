"use client";

import Link from "next/link"
import { useRef, useEffect, useState } from "react";

interface HeroSectionProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  videoBackground?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  videoBackground = true,
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoCanPlay, setVideoCanPlay] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Video autoplay prevented:", error);
          setVideoCanPlay(false);
        });
      }
    }
  }, []);

  const staticPosterImage = "/Focus%20Construction%20Stock%20Photos/Already%20Used/Kitchen%20%3A%20Living%20Room.jpg";

  return (
    <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center">
      {/* Video/GIF Background */}
      {videoBackground ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {videoCanPlay ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster={staticPosterImage}
            >
              <source src="https://2gqmufsrrfwdui82.public.blob.vercel-storage.com/Multiple%20room%20sweep-1djuu4G2xMNwAHepLFNB5FPlQwYOtM.mp4" type="video/mp4" />
              {/* Fallback image if video doesn't load or <video> tag not supported */}
              <img
                src={staticPosterImage}
                alt="Construction background"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </video>
          ) : (
            <img
              src={staticPosterImage}
              alt="Construction background - Video autoplay disabled"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Animated hexagon pattern overlay */}
          <div className="absolute inset-0 animated-hexagons"></div>
        </div>
      ) : (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${staticPosterImage})` }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Animated hexagon pattern overlay */}
          <div className="absolute inset-0 animated-hexagons"></div>
        </>
      )}

      <div className="container-custom relative z-10 text-white text-center py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 fade-in">{title}</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-10 fade-in opacity-90">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in">
          <Link
            href={buttonLink}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5"
          >
            {buttonText}
          </Link>
          <Link
            href="/portfolio"
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}
