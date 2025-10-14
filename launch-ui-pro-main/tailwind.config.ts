import type { Config } from "tailwindcss";

const config = {
  darkMode: ["selector"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card) / 0.2)",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground) / 0.6)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / 0.15)",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
        },
        light: {
          DEFAULT: "hsl(var(--light))",
          foreground: "hsl(var(--light-foreground))",
        },
        border: "hsl(var(--border) / 0.1)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        "2xl": "calc(var(--radius) + 4px)",
        xl: "calc(var(--radius) + 2px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        code: ["var(--font-mono)"],
        regular: ["var(--font-body)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
            filter: "blur(.5rem)",
          },
          "50%": {
            filter: "blur(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        "appear-zoom": {
          "0%": {
            opacity: "0",
            transform: "scale(.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "pulse-hover": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(-1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        hover: {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          "50%": {
            transform: "translateY(-1rem) translateX(1rem)",
          },
          "100%": {
            transform: "translateY(0) translateX(0)",
          },
        },
        "hover-reverse": {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          "50%": {
            transform: "translateY(1rem) translateX(1rem)",
          },
          "100%": {
            transform: "translateY(0) translateX(0)",
          },
        },
        "pulse-fade": {
          "0%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.3",
          },
          "100%": {
            opacity: "1",
          },
        },
        wiggle: {
          "0%, 16.67%, 33.33%, 50%": {
            transform: "rotate(-15deg)",
          },
          "8.33%, 25%, 41.67%": {
            transform: "rotate(15deg)",
          },
          "50%, 100%": {
            transform: "rotate(0deg)",
          },
        },
        impulse: {
          "20%": {
            left: "0",
            transform: "scale(0.5)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
            left: "50%",
            transform: "scale(3)",
          },
          "80%": {
            opacity: "0",
            left: "100%",
            transform: "scale(0.5)",
          },
        },
        orbit: {
          "0": {
            strokeDashoffset: "500",
            opacity: "0",
          },
          "10%, 20%": {
            opacity: "1",
          },
          "35%": {
            opacity: "0",
          },
          "40%": {
            opacity: "0",
            strokeDashoffset: "-250",
          },
        },
        "appear-slide": {
          "0%": {
            opacity: "0",
            transform: "translateY(3rem) scale(.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee var(--duration) infinite linear",
        appear: "appear 0.6s forwards ease-out",
        "appear-zoom": "appear-zoom 0.6s forwards ease-out",
        "appear-zoom-fast": "appear-zoom 0.3s forwards ease-out",
        "pulse-hover": "pulse-hover 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        hover: "hover 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "hover-reverse":
          "hover-reverse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-fade": "pulse-fade 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        impulse: "impulse 2s ease-in-out infinite",
        "appear-slide":
          "appear-slide 0.5s forwards cubic-bezier(.4,.18,.52,1.6)",
        orbit: "orbit 2s linear infinite",
      },
      spacing: {
        container: "1280px",
        "container-lg": "1536px",
      },
      boxShadow: {
        md: "0 4px 6px -1px var(--shadow), 0 2px 4px -2px var(--shadow)",
        xl: "0 20px 25px -5px var(--shadow), 0 8px 10px -6px var(--shadow)",
        "2xl": "0 25px 50px -12px var(--shadow)",
        "glow-sm": "0 0 16px 0 hsla(var(--foreground) / 0.08) inset",
        "glow-md": "0 0 32px 0 hsla(var(--foreground) / 0.08) inset",
        "glow-lg": "0 0 64px 0 hsla(var(--foreground) / 0.06) inset",
        mockup: "-12px 16px 48px var(--shadow-strong)",
      },
      transitionDelay: {
        1500: "1500ms",
        2000: "2000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
