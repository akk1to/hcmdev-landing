import type React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import Link, { type LinkProps } from "next/link"
import { Icon } from "basehub/react-icon"

export const $button = cva(
  "gap-1 font-normal shrink-0 rounded-2xl ring-[--control] focus-visible:ring-2 outline-hidden outline-0 transition-all duration-500 ease-out transform hover:scale-110 active:scale-95 relative overflow-hidden group",
  {
    variants: {
      intent: {
        primary:
          "bg-gradient-to-r from-[--accent-500] via-[--accent-600] to-[--accent-700] hover:from-[--accent-600] hover:via-[--accent-700] hover:to-[--accent-800] text-[--text-on-accent-primary] border-[--accent-600] shadow-lg hover:shadow-2xl hover:shadow-[--accent-500]/25 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out",
        secondary:
          "bg-[--surface-secondary] text-[--text-primary] border-[--border] border dark:bg-[--dark-surface-secondary] dark:text-[--dark-text-primary] dark:border-[--dark-border] hover:bg-[--surface-tertiary] dark:hover:bg-[--dark-surface-tertiary] backdrop-blur-md shadow-md hover:shadow-xl hover:shadow-gray-500/10 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        tertiary:
          "bg-gradient-to-r from-[--text-primary] to-gray-800 dark:from-[--dark-text-primary] dark:to-gray-200 text-[--surface-primary] dark:text-[--dark-surface-primary] border border-[--dark-border] dark:border-[--border] hover:from-gray-700 hover:to-gray-900 dark:hover:from-gray-100 dark:hover:to-white shadow-md hover:shadow-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
      },
      disabled: {
        true: "opacity-30 hover:scale-100 hover:shadow-none cursor-not-allowed before:hidden",
      },
      onlyButton: {
        true: "rounded-xl",
      },
      iconSide: {
        left: "flex-row-reverse pl-3",
        right: "flex-row pr-3",
      },
      unstyled: {
        true: "px-0 py-0 bg-transparent border-none hover:bg-transparent hover:border-none dark:hover:bg-transparent dark:hover:border-none dark:bg-transparent dark:border-none hover:scale-100 hover:shadow-none before:hidden",
      },
      size: {
        md: "inline-flex items-center justify-center px-3.5 text-sm h-8 md:px-5",
        lg: "inline-flex items-center justify-center h-9 px-5 text-sm md:text-base md:h-10",
      },
    },
  },
)

type ButtonProps<C extends keyof React.JSX.IntrinsicElements> = VariantProps<typeof $button> &
  React.JSX.IntrinsicElements[C] & {
    icon?: React.ReactNode
    unstyled?: boolean
  }

export const Button = ({
  children,
  intent = "primary",
  disabled = false,
  onlyButton = false,
  icon,
  iconSide = "left",
  unstyled,
  className,
  size = "md",
  ref,
  ...props
}: ButtonProps<"button">) => {
  return (
    <button
      ref={ref}
      className={$button(
        !unstyled
          ? {
              intent,
              disabled,
              onlyButton,
              iconSide: icon ? iconSide : undefined,
              unstyled,
              className,
              size,
            }
          : { className },
      )}
      disabled={disabled}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-1 group-hover:animate-pulse">
        {children}
        {icon ? (
          <span className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            {typeof icon === "string" ? <Icon content={icon} /> : icon}
          </span>
        ) : null}
      </span>
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300 ease-out"></span>
    </button>
  )
}

export const ButtonLink = ({
  children,
  intent = "primary",
  disabled = false,
  onlyButton = false,
  icon,
  iconSide = "left",
  unstyled,
  className,
  size = "md",
  ref,
  ...props
}: ButtonProps<"a"> & LinkProps) => {
  return (
    <Link
      ref={ref}
      className={$button(
        !unstyled
          ? {
              intent,
              disabled,
              onlyButton,
              iconSide: icon ? iconSide : undefined,
              className,
              unstyled,
              size,
            }
          : { className },
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-1 group-hover:animate-pulse">
        {children}
        {icon ? (
          <span className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">{icon}</span>
        ) : null}
      </span>
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300 ease-out"></span>
    </Link>
  )
}
