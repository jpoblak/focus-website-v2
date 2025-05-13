"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2 bg-white/80 backdrop-blur-md border-b border-neutral-200/50" : "py-3"}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center relative z-10">
            <div className="relative h-8 w-auto">
              <Image
                src="/images/logo-horizontal.png"
                alt="Focus Construction Logo"
                width={140}
                height={33}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - always visible text */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  scrolled ? "text-neutral-800 hover:bg-neutral-100/80" : "text-white hover:bg-white/20 shadow-text"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="ml-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium text-sm px-4 py-1 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
            >
              Request a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-10 p-1 rounded-full ${
              scrolled ? "text-neutral-800" : "text-white shadow-text"
            } ${isMenuOpen ? "bg-white/10" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-0 z-0 bg-white/90 backdrop-blur-lg pt-16 pb-4 px-4 shadow-lg animate-fade-in-down">
            <nav className="flex flex-col space-y-1">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "About" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-neutral-800 hover:bg-neutral-100 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/quote"
                className="mt-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium px-4 py-2 rounded-lg text-center transition-all duration-300 hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
