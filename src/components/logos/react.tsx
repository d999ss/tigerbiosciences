import * as React from "react"

type ReactLogoProps = React.SVGProps<SVGSVGElement>

export default function ReactLogo({ className, ...props }: ReactLogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="2" />
      <path d="M12 1a11 11 0 0 0-11 11c0 2.5.8 4.8 2.2 6.7L12 24l8.8-5.3c1.4-1.9 2.2-4.2 2.2-6.7A11 11 0 0 0 12 1zm0 20.5l-6.5-3.9c-1.1-1.5-1.7-3.3-1.7-5.1 0-4.4 3.6-8 8-8s8 3.6 8 8c0 1.8-.6 3.6-1.7 5.1L12 21.5z" />
    </svg>
  )
}
