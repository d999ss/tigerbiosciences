"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "13+",
    label: "Portfolio Companies",
    description: "Comprehensive ecosystem of specialized medical technology companies"
  },
  {
    number: "25+",
    label: "FDA Approvals",
    description: "Regulatory clearances across our portfolio ensuring quality and safety"
  },
  {
    number: "30+",
    label: "Countries Served",
    description: "Global reach with products distributed worldwide"
  },
  {
    number: "150+",
    label: "Years Combined Experience",
    description: "Executive leadership driving innovation in medical technology"
  }
];

export function StatsEnhanced() {
  return (
    <Section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-tiger text-headline text-tiger-red mb-4">
            By the Numbers
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Our impact in regenerative medicine and medical technology innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-tiger-red mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
