import * as React from "react"

type ShadcnUILogoProps = React.SVGProps<SVGSVGElement>

export default function ShadcnUILogo({ className, ...props }: ShadcnUILogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  )
}
