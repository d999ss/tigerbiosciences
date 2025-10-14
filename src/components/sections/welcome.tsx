import { Card, CardContent } from "@/components/ui/card"

export function Welcome() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-tiger text-3xl md:text-4xl font-bold text-tiger-red mb-8">
            Welcome to<br className="md:hidden" /> Tiger BioSciences
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Tiger BioSciences is a global leader in medical technology, dedicated to delivering 
              cutting-edge solutions for clinicians worldwide. Specializing in cellular, acellular, 
              and matrix-like products (CAMPS), we are advancing wound care, soft tissue reconstruction, 
              and aesthetics.
            </p>
            <p>
              Our distinct advantage lies in our fully integrated approach—we oversee every stage of 
              our products, from donor screening and tissue collection to research and development, 
              manufacturing, and distribution. This comprehensive model ensures unparalleled quality, 
              accountability, and confidence for both clinicians and patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
