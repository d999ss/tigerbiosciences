"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

interface TeamProps {
  title?: string;
  description?: string;
  members?: TeamMemberProps[];
  className?: string;
}

export function TeamEnhanced({
  title = "Leadership Team",
  description = "Meet the visionary leaders driving innovation in regenerative medicine",
  members = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/assets/images/leadership/sarah-johnson.jpg",
      bio: "20+ years in medical technology and regenerative medicine"
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Scientific Officer",
      image: "/assets/images/leadership/michael-chen.jpg",
      bio: "Leading researcher in tissue engineering and CAMP technologies"
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Operating Officer",
      image: "/assets/images/leadership/emily-rodriguez.jpg",
      bio: "Expert in global operations and regulatory affairs"
    },
    {
      name: "Dr. James Wilson",
      role: "Chief Medical Officer",
      image: "/assets/images/leadership/james-wilson.jpg",
      bio: "Board-certified surgeon with focus on regenerative applications"
    },
    {
      name: "Lisa Park",
      role: "Chief Technology Officer",
      image: "/assets/images/leadership/lisa-park.jpg",
      bio: "Innovation leader in medical device technology"
    },
    {
      name: "David Thompson",
      role: "Chief Financial Officer",
      image: "/assets/images/leadership/david-thompson.jpg",
      bio: "Financial strategist with healthcare industry expertise"
    },
  ],
  className,
}: TeamProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-balance sm:text-5xl">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[840px] text-center font-medium text-balance sm:text-xl mt-4">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-tiger-red font-medium mb-2">
                {member.role}
              </p>
              {member.bio && (
                <p className="text-sm text-muted-foreground">
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
