import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-horizontal.png"
                alt="Focus Construction"
                width={180}
                height={43}
                className="object-contain"
              />
            </div>
            <p className="text-neutral-300 mb-4">
              Your expert partner for commercial and residential remodeling. We specialize in transforming spaces like kitchens, bathrooms, offices, and more.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/FocusConstructionMI/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-primary-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/focusconstructionmi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-primary-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={20} className="mr-2 mt-1 text-primary-400" />
                <a href="tel:2482282222" className="hover:text-primary-400 transition-colors">
                  (248) 228-2222
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 text-primary-400" />
                <a href="mailto:FocusConstructionMI@gmail.com" className="hover:text-primary-400 transition-colors">
                  FocusConstructionMI@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-primary-400" />
                <span>Southeast Michigan, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {currentYear} Focus Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
