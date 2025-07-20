"use client"

import { ArrowRight, Play, Star, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-twinkle"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-pink-400 rounded-full animate-twinkle-slow"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-700 dark:text-purple-300 text-sm font-medium mb-8 animate-bounce-in hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            New: AI-Powered Analytics Dashboard
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
            Build the{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-text bg-300">
              Future
            </span>{" "}
            of Work
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Empower your team with cutting-edge tools that streamline workflows, boost productivity, and drive
            innovation across your organization.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 animate-fade-in-up delay-300">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">500K+ Users</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Star className="w-5 h-5 text-yellow-500 fill-current animate-twinkle" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Zap className="w-5 h-5 text-green-500" />
              <span className="font-semibold">99.9% Uptime</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-400">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 px-8 py-4 text-lg group bg-transparent"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Image/Video placeholder */}
          <div className="relative max-w-4xl mx-auto animate-fade-in-up delay-500">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-purple-500/20 transition-all duration-500 group">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Watch Product Demo</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce-gentle shadow-lg"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce-gentle delay-200 shadow-lg"></div>
              <div className="absolute -bottom-3 -left-2 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce-gentle delay-300 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
