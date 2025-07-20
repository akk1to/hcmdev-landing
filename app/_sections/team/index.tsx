"use client"

import { Github, Linkedin, Twitter } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300&text=Sarah",
      bio: "10+ years in tech leadership, former VP at Google",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300&text=Michael",
      bio: "Full-stack architect with expertise in scalable systems",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "/placeholder.svg?height=300&width=300&text=Emily",
      bio: "Award-winning UX designer, previously at Apple",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300&text=David",
      bio: "Open source contributor, React and Node.js expert",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      image: "/placeholder.svg?height=300&width=300&text=Lisa",
      bio: "Product strategy expert with MBA from Stanford",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Alex Thompson",
      role: "Marketing Director",
      image: "/placeholder.svg?height=300&width=300&text=Alex",
      bio: "Growth hacker with proven track record in B2B SaaS",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-green-500/10 to-yellow-500/10 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Amazing Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Passionate professionals dedicated to building the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group animate-fade-in-up border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-purple-900/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 p-1 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse group-hover:shadow-lg group-hover:shadow-green-500/50"></div>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>

              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.twitter}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 group-hover:scale-110"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.social.github}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-800 hover:text-white hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-300 group-hover:scale-110"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
