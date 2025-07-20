"use client"

import { Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "./theme-switcher"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-twinkle"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-twinkle-slow"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-twinkle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 animate-fade-in-up">
              Stay Updated with{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Latest News
              </span>
            </h3>
            <p className="text-gray-400 mb-8 animate-fade-in-up delay-100">
              Get the latest updates, feature releases, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-up delay-200">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Marketing
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering teams worldwide with innovative tools and solutions for the modern workplace.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/50"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 group hover:shadow-lg hover:shadow-gray-500/50"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition-all duration-300 group hover:shadow-lg hover:shadow-red-500/50"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="animate-fade-in-up delay-100">
              <h4 className="text-lg font-semibold mb-6 text-white">Products</h4>
              <ul className="space-y-3">
                {["TeamChat Pro", "ProjectFlow", "DocuMaster", "Analytics Hub", "SecureVault"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="animate-fade-in-up delay-200">
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {["About Us", "Careers", "Press", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="animate-fade-in-up delay-300">
              <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {["Help Center", "Documentation", "API Reference", "Community", "Status"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0 animate-fade-in-up">
              <p className="text-gray-400 text-sm">
                © 2024 Marketing. Made with <Heart className="w-4 h-4 text-red-500 inline animate-pulse" /> by our team.
              </p>
            </div>
            <div className="flex items-center space-x-6 animate-fade-in-up delay-100">
              <ThemeSwitcher />
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/50"
              >
                <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
