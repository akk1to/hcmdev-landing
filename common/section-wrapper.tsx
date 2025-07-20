import type React from "react"
import { cva, type VariantProps } from "class-variance-authority"

export const $section = cva("py-14 md:py-[72px] flex flex-col items-center gap-10 relative overflow-hidden", {
  variants: {
    container: {
      default: "container mx-auto px-6",
      full: "",
    },
  },
  defaultVariants: {
    container: "default",
  },
})

type SectionProps = React.AllHTMLAttributes<HTMLDivElement> & VariantProps<typeof $section>

export function Section({ className, container, ...props }: SectionProps) {
  return (
    <section className={$section({ className, container })} {...props}>
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating orbs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-px animate-scan"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500 to-transparent w-px animate-scan-vertical"></div>
        </div>

        {/* Particle effects */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-twinkle"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-twinkle-slow"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-orange-400 rounded-full animate-twinkle"></div>

        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/30 dark:to-purple-950/30 animate-gradient-shift"></div>
      </div>

      {/* Content with entrance animation */}
      <div className="relative z-10 w-full animate-fade-in-up">{props.children}</div>
    </section>
  )
}
