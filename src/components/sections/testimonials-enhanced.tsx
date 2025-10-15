"use client";

import { Section } from "@/components/ui/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  name: string;
  role: string;
  text: string;
  image: string;
  company?: string;
}

interface TestimonialsProps {
  items?: TestimonialProps[];
  className?: string;
}

export function TestimonialsEnhanced({
  items = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      company: "MedTech Innovations",
      text: "Tiger BioSciences has revolutionized our approach to regenerative medicine. Their comprehensive CAMP solutions have significantly improved patient outcomes in our wound care programs.",
      image: "/assets/images/avatars/doctor-1.jpg",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Director of Research",
      company: "Advanced Tissue Center",
      text: "The quality and consistency of Tiger BioSciences' tissue processing is unmatched. Their integrated approach from donor screening to distribution ensures the highest standards.",
      image: "/assets/images/avatars/doctor-2.jpg",
    },
  ],
  className,
}: TestimonialsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-balance mb-4 sm:text-4xl">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what medical professionals and researchers say about our regenerative medicine solutions
          </p>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.name} className="flex flex-col gap-6">
              <p className="text-muted-foreground leading-relaxed text-lg italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="size-12">
                  <AvatarImage src={item.image} />
                  <AvatarFallback className="bg-tiger-red text-white">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">{item.name}</div>
                  <div className="text-muted-foreground text-sm">
                    {item.role}
                  </div>
                  {item.company && (
                    <div className="text-tiger-red text-sm font-medium">
                      {item.company}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
