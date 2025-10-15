export type ProductCategory = "Wound Care Solutions" | "Tissue Processing" | "Aesthetic Solutions" | "International";

export interface ProductMeta {
  slug: string;
  title: string;
  category: ProductCategory;
  description: string;
  heroImage: string;
  externalUrl?: string;
  internalUrl?: string; // existing company/division page
  comingSoon?: boolean;
}

export const products: Record<string, ProductMeta> = {
  // Wound Care Solutions
  "tiger-wound-care": {
    slug: "tiger-wound-care",
    title: "Tiger Wound Care",
    category: "Wound Care Solutions",
    description: "Advanced CAMP Solutions for Complex Wounds",
    heroImage: "/assets/images/08/tiger_wound_care_box_left.png",
    externalUrl: "https://tigerwoundcare.com/",
  },
  "extremity-care": {
    slug: "extremity-care",
    title: "Extremity Care",
    category: "Wound Care Solutions",
    description: "Specialized extremity wound care",
    heroImage: "/assets/images/08/extremitycare_box_right.png",
    externalUrl: "https://extremitycare.com",
  },
  "encore-surgical-dressings": {
    slug: "encore-surgical-dressings",
    title: "Encore Surgical Dressings",
    category: "Wound Care Solutions",
    description: "Premium surgical dressing solutions",
    heroImage: "/assets/images/09/encore_boxed_left.png",
    internalUrl: "/our-divisions/encore-surgical-dressings/",
    comingSoon: true,
  },

  // Tissue Processing
  regentx: {
    slug: "regentx",
    title: "RegenTX",
    category: "Tissue Processing",
    description: "Tissue Science Redefined",
    heroImage: "/assets/images/08/regenTX_box_left.png",
    internalUrl: "/our-companies/regentx/",
  },
  "regentx-labs": {
    slug: "regentx-labs",
    title: "RegenTX Labs",
    category: "Tissue Processing",
    description: "Advanced tissue research and development",
    heroImage: "/assets/images/08/regenTX_Labs_box_right.png",
    internalUrl: "/our-divisions/regentx-labs/",
  },
  "birth-tissue-recovery": {
    slug: "birth-tissue-recovery",
    title: "Birth Tissue Recovery",
    category: "Tissue Processing",
    description: "Birth tissue processing and recovery",
    heroImage: "/assets/images/08/btr_logo_boxed_left.png",
    internalUrl: "/our-companies/biocare/",
  },
  biocare: {
    slug: "biocare",
    title: "bioCARE",
    category: "Tissue Processing",
    description: "Comprehensive tissue care solutions",
    heroImage: "/assets/images/08/bioCare_box_right.png",
    internalUrl: "/our-companies/biocare/",
  },

  // Aesthetic Solutions
  "tiger-aesthetics": {
    slug: "tiger-aesthetics",
    title: "Tiger Aesthetics",
    category: "Aesthetic Solutions",
    description: "Shaping the Future of Aesthetics",
    heroImage: "/assets/images/06/TigerAestheticsCircleColor.jpg",
    internalUrl: "/our-companies/tiger-aesthetics/",
  },
  sientra: {
    slug: "sientra",
    title: "Sientra",
    category: "Aesthetic Solutions",
    description: "Premium aesthetic solutions",
    heroImage: "/assets/images/08/sientra_box_left.png",
    internalUrl: "/our-companies/sientra/",
    externalUrl: "https://sientra.com",
  },
  biocreations: {
    slug: "biocreations",
    title: "BioCreations Medical",
    category: "Aesthetic Solutions",
    description: "Innovative aesthetic technologies",
    heroImage: "/assets/images/08/biocreations_boxed_right.png",
    internalUrl: "/our-companies/biocreations/",
  },
  "revelle-aesthetics": {
    slug: "revelle-aesthetics",
    title: "Revelle Aesthetics",
    category: "Aesthetic Solutions",
    description: "Advanced aesthetic treatments",
    heroImage: "/assets/images/08/revelle_boxed_left.png",
    internalUrl: "/our-companies/revelle-aesthetics/",
  },
  suneva: {
    slug: "suneva",
    title: "Suneva",
    category: "Aesthetic Solutions",
    description: "Cutting-edge aesthetic products",
    heroImage: "/assets/images/08/suneva_box_right.png",
    internalUrl: "/our-companies/suneva/",
  },
};

export function getProduct(slug: string): ProductMeta | undefined {
  return products[slug];
}

export function getAllProductSlugs(): string[] {
  return Object.keys(products);
}