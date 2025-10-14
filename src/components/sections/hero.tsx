import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/01/TigerBackground.png')",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h4 className="font-tiger text-tiger-red text-xl md:text-2xl mb-4">
              Tiger BioSciences
            </h4>
          </div>
          <h1 className="font-tiger text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            The first<br />
            <span className="ml-8">&nbsp;&nbsp;&nbsp;&nbsp;of its kind.</span>
          </h1>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/assets/images/08/hero_wave_v6.svg"
          alt=""
          width={1920}
          height={200}
          className="w-full h-auto hidden md:block"
        />
        <Image
          src="/assets/images/08/mobile_logo_wave_v6.svg"
          alt=""
          width={768}
          height={100}
          className="w-full h-auto block md:hidden"
        />
      </div>
    </section>
  )
}
