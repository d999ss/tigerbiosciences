"use client";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface StatItemProps {
  label?: string;
  value: string | number;
  suffix?: string;
  description?: string;
}

interface StatsProps {
  title?: string;
  description?: string;
  items?: StatItemProps[] | false;
  className?: string;
}

export function StatsEnhanced({
  title = "A proven solution for regenerative medicine",
  description = "Tiger BioSciences has established itself as a leader in regenerative medicine, with a comprehensive portfolio of companies and products serving healthcare providers worldwide.",
  items = [
    {
      label: "over",
      value: 13,
      suffix: "+",
      description: "portfolio companies",
    },
    {
      label: "more than",
      value: 25,
      suffix: "+",
      description: "FDA approvals and clearances",
    },
    {
      label: "serving",
      value: 30,
      suffix: "+",
      description: "countries worldwide",
    },
    {
      label: "over",
      value: 150,
      suffix: "+",
      description: "years of combined executive experience",
    },
  ],
  className,
}: StatsProps) {
  return (
    <Section className={cn("w-full overflow-hidden", className)}>
      <div className="max-w-container mx-auto flex flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col gap-8">
          <h2 className="max-w-[500px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[540px] font-medium text-pretty sm:text-xl">
            {description}
          </p>
        </div>
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-2 gap-4 md:p-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="glass-3 flex flex-col items-start gap-3 rounded-xl p-4 text-left shadow-xl md:px-8 md:py-6 lg:px-12 lg:py-8"
              >
                {item.label && (
                  <div className="text-muted-foreground text-sm font-semibold">
                    {item.label}
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl lg:text-6xl">
                    {item.value}
                  </div>
                  {item.suffix && (
                    <div className="text-brand text-2xl font-semibold">
                      {item.suffix}
                    </div>
                  )}
                </div>
                {item.description && (
                  <div className="text-muted-foreground text-sm font-semibold text-pretty">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
