interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="modern-card p-6 md:p-8 hover-lift">
      <svg className="h-8 w-8 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-neutral-700 mb-4 italic">{quote}</p>
      <div>
        <p className="font-bold text-neutral-900">{author}</p>
        {role && <p className="text-neutral-500 text-sm">{role}</p>}
      </div>
    </div>
  )
}
