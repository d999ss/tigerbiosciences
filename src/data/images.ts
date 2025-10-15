/**
 * Image paths for Tiger BioSciences
 * All images located in /public/assets/images/
 */

export const images = {
  biotech: {
    heroLab: "/assets/images/biotech/hero-lab.jpg",
    researchLab: "/assets/images/biotech/research-lab.jpg",
    cellularWork: "/assets/images/biotech/cellular-work.jpg",
    clinicalLab: "/assets/images/biotech/clinical-lab.jpg",
    dataAnalysis: "/assets/images/biotech/data-analysis.jpg",
    teamCollaboration: "/assets/images/biotech/team-collaboration.jpg",
    microscope: "/assets/images/biotech/microscope.jpg",
    tissueEngineering: "/assets/images/biotech/tissue-engineering.jpg",
    regenerativeMedicine: "/assets/images/biotech/regenerative-medicine.jpg",
    manufacturing: "/assets/images/biotech/manufacturing.jpg",
  },
  existing: {
    tigerBackground: "/assets/images/01/TigerBackground.png",
    tigerLogo: "/assets/images/01/tiger_logo-v2.png",
    tigerHorizontal: "/assets/images/01/tiger_horizontal-v2.png",
  }
} as const;

export const imageAlt = {
  biotech: {
    heroLab: "Advanced biotechnology laboratory research facility",
    researchLab: "Biotech researcher examining tissue samples",
    cellularWork: "Cell culture and tissue engineering laboratory",
    clinicalLab: "Clinical research and development environment",
    dataAnalysis: "Data analysis and research visualization",
    teamCollaboration: "Tiger BioSciences research team collaboration",
    microscope: "Advanced microscopy for cellular analysis",
    tissueEngineering: "Tissue engineering and biomaterial development",
    regenerativeMedicine: "Regenerative medicine cell therapy research",
    manufacturing: "Biotech manufacturing and quality control facility",
  }
} as const;
