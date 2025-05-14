import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import CallButton from "@/components/call-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Commercial & Residential Remodeling | Focus Construction",
  description:
    "Focus Construction offers expert commercial & residential remodeling. Specializing in kitchens, bathrooms, commercial spaces, and more.",
  generator: 'v0.dev',
  icons: {
    icon: "/images/Favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
          <CallButton />
        </div>
      </body>
    </html>
  )
}
