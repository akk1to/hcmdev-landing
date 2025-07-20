"use client"

import { Star, Users, Download, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "TeamChat Pro",
      description: "Real-time messaging platform for modern teams",
      price: "$29",
      period: "/month",
      rating: 4.9,
      users: "50K+",
      downloads: "100K+",
      features: ["Unlimited messages", "File sharing", "Video calls", "Team channels"],
      icon: "💬",
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      id: 2,
      name: "ProjectFlow",
      description: "AI-powered project management suite",
      price: "$49",
      period: "/month",
      rating: 4.8,
      users: "25K+",
      downloads: "75K+",
      features: ["AI task automation", "Gantt charts", "Time tracking", "Team analytics"],
      icon: "🚀",
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      id: 3,
      name: "DocuMaster",
      description: "Smart document management system",
      price: "$19",
      period: "/month",
      rating: 4.7,
      users: "30K+",
      downloads: "60K+",
      features: ["Smart search", "Version control", "Collaboration", "Cloud sync"],
      icon: "📄",
      gradient: "from-green-500 to-emerald-500",
      popular: false,
    },
    {
      id: 4,
      name: "TeamSync",
      description: "Employee engagement and productivity platform",
      price: "$39",
      period: "/month",
      rating: 4.6,
      users: "15K+",
      downloads: "40K+",
      features: ["Performance tracking", "Goal setting", "Feedback system", "Reports"],
      icon: "👥",
      gradient: "from-orange-500 to-red-500",
      popular: false,
    },
    {
      id: 5,
      name: "Analytics Hub",
      description: "Business intelligence and analytics suite",
      price: "$79",
      period: "/month",
      rating: 4.9,
      users: "20K+",
      downloads: "50K+",
      features: ["Real-time dashboards", "Custom reports", "Data visualization", "API access"],
      icon: "📊",
      gradient: "from-indigo-500 to-purple-500",
      popular: false,
    },
    {
      id: 6,
      name: "SecureVault",
      description: "Enterprise security and compliance management",
      price: "$99",
      period: "/month",
      rating: 4.8,
      users: "10K+",
      downloads: "25K+",
      features: ["End-to-end encryption", "Compliance monitoring", "Access control", "Audit logs"],
      icon: "🔒",
      gradient: "from-gray-600 to-gray-800",
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Powerful tools designed to streamline your workflow and boost productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group animate-fade-in-up border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-purple-900/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center space-x-1 group-hover:shadow-orange-500/50 transition-all duration-300">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>Popular</span>
                  </div>
                </div>
              )}

              {/* Product icon */}
              <div className="mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                  style={{
                    filter: "drop-shadow(0 0 0 transparent)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "drop-shadow(0 0 0 transparent)"
                  }}
                >
                  {product.icon}
                </div>
              </div>

              {/* Product info */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{product.description}</p>

                {/* Rating and stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current animate-twinkle group-hover:drop-shadow-lg group-hover:drop-shadow-yellow-400/50"
                            : "text-gray-300"
                        } transition-all duration-300`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">{product.rating}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{product.users}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{product.downloads}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mr-2 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing and CTA */}
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{product.period}</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
