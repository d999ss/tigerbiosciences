import * as React from "react"

type FigmaLogoProps = React.SVGProps<SVGSVGElement>

export default function FigmaLogo({ className, ...props }: FigmaLogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM4 20a4 4 0 0 1 4-4h4v4a4 4 0 1 1-8 0zM12 0H8a4 4 0 0 0 0 8h4V0zM8 8a4 4 0 0 0 0 8h4V8H8z" />
    </svg>
  )
}
