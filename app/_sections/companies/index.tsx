"use client"

import { Star, Zap, Shield, Globe, Rocket, Heart } from "lucide-react"

export function CompaniesSection() {
  const companies = [
    { name: "TechCorp", icon: Zap, color: "text-blue-500" },
    { name: "GlobalSoft", icon: Globe, color: "text-green-500" },
    { name: "SecureNet", icon: Shield, color: "text-purple-500" },
    { name: "StarTech", icon: Star, color: "text-yellow-500" },
    { name: "RocketLab", icon: Rocket, color: "text-red-500" },
    { name: "HeartFlow", icon: Heart, color: "text-pink-500" },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-pulse-slow delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500/10 rounded-full animate-pulse-slow delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up">
            Trusted by leading companies worldwide
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => {
            const IconComponent = company.icon
            return (
              <div
                key={company.name}
                className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-all duration-300 animate-fade-in-up group hover:shadow-2xl hover:shadow-blue-500/20 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-300 ${company.color} group-hover:shadow-lg group-hover:shadow-current/30`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {company.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
