import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const divisions = [
  {
    title: "Tiger BioSciences – RegenTX Division",
    subtitle: "Tissue Science Redefined",
    description: "RegenTX leads in tissue processing and CAMP-based innovation. Rigorous protocols and advanced biotech ensure exceptional tissue quality and consistency. Scientifically driven methods and deep domain expertise set new benchmarks in the field. Focused research and precision manufacturing enable impactful clinical applications.",
    logo: "/assets/images/06/tiger_regentx.png",
    companies: [
      { name: "RegenTX", logo: "/assets/images/08/regenTX_box_left.png", href: "/our-companies/regentx/" },
      { name: "RegenTX Labs", logo: "/assets/images/08/regenTX_Labs_box_right.png", href: "/our-companies/regentx-labs/" },
      { name: "Birth Tissue Recovery", logo: "/assets/images/08/btr_logo_boxed_left.png", href: "/our-companies/biocare/" },
      { name: "BioCare", logo: "/assets/images/08/bioCare_box_right.png", href: "/our-companies/biocare/" },
    ]
  },
  {
    title: "Tiger Wound Care",
    subtitle: "Advanced CAMP Solutions for Complex Wounds",
    description: "Tiger Wound Care provides Cellular, Acellular, and Matrix-like Products (CAMPs) tailored for chronic and hard-to-treat wounds. Innovative research and development drive technologies suitable for all care settings. Clinically validated products support professionals in improving patient outcomes. A focus on scientific precision ensures consistent performance and reliability.",
    logo: "/assets/images/06/tiger_wound_care_logo.png",
    companies: [
      { name: "Tiger Wound Care", logo: "/assets/images/08/tiger_wound_care_box_left.png", href: "https://tigerwoundcare.com/" },
      { name: "Extremity Care", logo: "/assets/images/08/extremitycare_box_right.png", href: "https://extremitycare.com" },
      { name: "Encore Surgical Supplies", logo: "/assets/images/09/encore_boxed_left.png", href: "/our-companies/encore-surgical-dressings/" },
    ]
  },
  {
    title: "Tiger Aesthetics",
    subtitle: "Shaping the Future of Aesthetics",
    description: "Tiger Aesthetics delivers cutting-edge solutions across reconstructive, cosmetic, and regenerative domains. Each product is designed to meet personalized needs and maximize clinical results. Advanced CAMP technologies open new possibilities in aesthetic practice. The portfolio is built to support elevated outcomes and patient satisfaction.",
    logo: "/assets/images/06/TigerAestheticsCircleColor.jpg",
    companies: [
      { name: "Sientra", logo: "/assets/images/08/sientra_box_left.png", href: "/our-companies/sientra/" },
      { name: "BioCreations Medical", logo: "/assets/images/08/biocreations_boxed_right.png", href: "/our-companies/biocreations/" },
      { name: "Revelle Aesthetics Inc", logo: "/assets/images/08/revelle_boxed_left.png", href: "/our-companies/revelle-aesthetics/" },
      { name: "Suneva", logo: "/assets/images/08/suneva_box_right.png", href: "/our-companies/suneva/" },
    ]
  },
  {
    title: "Tiger BioSciences International",
    subtitle: "Global Access to Advanced Cell & Tissue Technologies",
    description: "Tiger BioSciences International enables worldwide distribution of cutting-edge cell and tissue products. Based in Germany, with a focus on regulatory excellence and international partnerships. Built to deliver CAMP innovations across borders and care systems.",
    logo: "/assets/images/06/tiger_international_logo.png",
    companies: [
      { name: "Lizard Health", logo: "/assets/images/08/lizard_box_left.png", href: "/our-companies/lizard-health-technology/" },
      { name: "Airway Medix S.A.", logo: "/assets/images/08/airway_medix_boxed_right.png", href: "/our-companies/airway-medix/" },
    ]
  },
  {
    title: "Tiger Production & Services",
    subtitle: "Medical Device Engineering for Tiger Innovation",
    description: "Tiger Production & Services handles engineering projects for medical devices. In-house expertise covers concept, prototyping, validation, and manufacturing. Built for precision, quality, and regulatory compliance in device development.",
    logo: "/assets/images/06/tiger_production_services.jpg",
    companies: []
  }
]

export function Divisions() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-tiger text-3xl md:text-4xl font-bold text-tiger-red mb-4">
            Our Divisions
          </h2>
        </div>

        <div className="space-y-16">
          {divisions.map((division, index) => (
            <div key={division.title} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="font-tiger text-tiger-red text-xl">
                      {division.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-gray-700">
                      {division.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {division.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="text-center">
                  <Image
                    src={division.logo}
                    alt={division.title}
                    width={200}
                    height={200}
                    className="mx-auto mb-6"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {divisions.flatMap(division => division.companies).map((company) => (
              <Card key={company.name} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={150}
                    height={100}
                    className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                  />
                  <h4 className="font-semibold text-sm text-gray-700">
                    {company.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
