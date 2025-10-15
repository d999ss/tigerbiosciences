/**
 * Content data for Tiger BioSciences website
 */

import { images, imageAlt } from './images';

export const services = [
  {
    id: "tissue-engineering",
    category: "Service 01",
    badge: "Engineering",
    title: "Tissue Engineering",
    description:
      "Advanced tissue engineering solutions combining biomaterials science with clinical precision for regenerative applications.",
    image: images.biotech.tissueEngineering,
    imageAlt: imageAlt.biotech.tissueEngineering,
    features: [
      "Custom tissue matrix development",
      "Biocompatibility testing & validation",
      "Scaffold design optimization",
      "Clinical application consulting"
    ],
  },
  {
    id: "clinical-rd",
    category: "Service 02",
    badge: "Research",
    title: "Clinical R&D",
    description:
      "We enhance biologic performance through precise cellular integration and data-driven research and development.",
    image: images.biotech.clinicalLab,
    imageAlt: imageAlt.biotech.clinicalLab,
    features: [
      "Preclinical study design",
      "Clinical trial support",
      "Data analytics & modeling",
      "Regulatory submission support"
    ],
  },
  {
    id: "regenerative-medicine",
    category: "Service 03",
    badge: "Innovation",
    title: "Regenerative Medicine",
    description:
      "Pioneering regenerative medicine technologies that transform patient care through tissue-based innovations.",
    image: images.biotech.regenerativeMedicine,
    imageAlt: imageAlt.biotech.regenerativeMedicine,
    features: [
      "Cell therapy development",
      "Growth factor optimization",
      "Patient-specific solutions",
      "Clinical outcome tracking"
    ],
  },
  {
    id: "biomaterials-devices",
    category: "Service 04",
    badge: "Manufacturing",
    title: "Biomaterials & Devices",
    description:
      "From biomaterials to device manufacturing, our full-stack model ensures quality and regulatory compliance.",
    image: images.biotech.manufacturing,
    imageAlt: imageAlt.biotech.manufacturing,
    features: [
      "Material characterization",
      "Device prototyping",
      "Manufacturing scale-up",
      "ISO/FDA compliance support"
    ],
  },
];

export const testimonials = [
  {
    quote: "Tiger's tissue engineering solutions have transformed how we approach complex orthopedic cases. The consistency and clinical performance are unmatched in the field.",
    author: "Dr. Sarah Mitchell, MD",
    role: "Chief of Orthopedic Surgery",
    organization: "Riverside Medical Center",
  },
  {
    quote: "Working with Tiger BioSciences accelerated our research timeline by over 18 months. Their expertise in cell processing and regulatory pathways was invaluable.",
    author: "Michael Chen, Ph.D.",
    role: "Director of Regenerative Medicine Research",
    organization: "Stanford Bioengineering Institute",
  },
  {
    quote: "Tiger's manufacturing capabilities and quality systems gave us the confidence to scale our cellular therapeutic from lab bench to commercial production.",
    author: "Lisa Park",
    role: "Vice President of Operations",
    organization: "NovaTher Therapeutics",
  }
];

export const carouselSlides = [
  {
    type: "content" as const,
    title: "Regenerative Biologics",
    description:
      "We develop matrix and cell-based biologics engineered to restore tissue and accelerate healing. Our systems are designed for consistency, precision, and clinical performance.",
  },
  {
    type: "content" as const,
    title: "Cellular Engineering",
    description:
      "We enhance biologic performance through precise cellular integration and data-driven R&D. Our approach combines tissue science with engineering discipline.",
  },
  {
    type: "image" as const,
    imageUrl: images.biotech.researchLab,
    imageAlt: imageAlt.biotech.researchLab,
  },
  {
    type: "content" as const,
    title: "Data-Driven R&D",
    description:
      "Our research is powered by advanced analytics and clinical data. We turn biological insights into engineered solutions that help clinicians achieve better outcomes.",
  },
  {
    type: "content" as const,
    title: "Integrated Medical Systems",
    description:
      "From biomaterials to device manufacturing, our full-stack model ensures quality and scalability. We design systems that meet regulatory standards and clinical demands.",
  },
];
