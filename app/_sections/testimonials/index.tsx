"use client"

import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      avatar: "/placeholder.svg?height=60&width=60&text=SJ",
      content:
        "This platform has revolutionized how our team collaborates. The AI-powered insights have helped us increase productivity by 40%.",
      rating: 5,
      company: "TechCorp",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager at StartupXYZ",
      avatar: "/placeholder.svg?height=60&width=60&text=MC",
      content:
        "The intuitive interface and powerful features make project management a breeze. Our team adoption was seamless.",
      rating: 5,
      company: "StartupXYZ",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CTO at InnovateLab",
      avatar: "/placeholder.svg?height=60&width=60&text=ER",
      content:
        "Outstanding customer support and continuous feature updates. This tool has become essential for our daily operations.",
      rating: 5,
      company: "InnovateLab",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Team Lead at DevStudio",
      avatar: "/placeholder.svg?height=60&width=60&text=DK",
      content:
        "The analytics dashboard provides incredible insights into our workflow. We've optimized our processes significantly.",
      rating: 5,
      company: "DevStudio",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Operations Director at ScaleUp",
      avatar: "/placeholder.svg?height=60&width=60&text=LW",
      content: "Seamless integration with our existing tools and excellent performance. The ROI has been remarkable.",
      rating: 5,
      company: "ScaleUp",
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Founder at CreativeAgency",
      avatar: "/placeholder.svg?height=60&width=60&text=AT",
      content: "The collaboration features have transformed how our remote team works together. Highly recommended!",
      rating: 5,
      company: "CreativeAgency",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Join thousands of satisfied customers who have transformed their workflow with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group animate-fade-in-up border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-purple-900/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-purple-500 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300" />
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current animate-twinkle group-hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 p-0.5 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
