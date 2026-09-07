const FILE = "https://german-uds.de/api/media/file";

export function mediaFile(name: string) {
  return `${FILE}/${name.split("/").map(encodeURIComponent).join("/")}`;
}

export const HERO_IMAGE = mediaFile("Header-6.jpeg");

export const PROGRAM_IMAGES: Record<string, string> = {
  "applied-ai": mediaFile("Applied AI.png"),
  cybersecurity: mediaFile("cyber.png"),
  "advanced-digital-reality": mediaFile("VR.png"),
  "digital-leadership": mediaFile("Visual study prog.png"),
  "quantum-computing": mediaFile("AdobeStock_876124851.jpeg"),
  "digital-transformation": mediaFile("Visual digital transform.png"),
  "digital-technologies": mediaFile("digital tech-1.png"),
  "digital-management": mediaFile("digital managment-3.png"),
  "digital-media": mediaFile("Digital media V2.png"),
  "financial-technology": mediaFile("Fin tech 4.png"),
  "digital-law": mediaFile("Digital law 2.png"),
  "transformation-in-bureaucracy": mediaFile("Transformation_in_Bureaucracy-1.png"),
};

export const CATALOGUE_IMAGES = {
  master: mediaFile("Visual study prog.png"),
  mba: mediaFile("Visual digital transform.png"),
  micro: mediaFile("Applied AI.png"),
  fastTrack: mediaFile("cyber.png"),
};

export const MICRO_IMAGES: Record<string, string> = {
  "ai-ethics": mediaFile("DataEthicsAI.jpg"),
  "ai-business-innovation": mediaFile(
    "asset-v1_LMS+BDAI_aibusinessinnovation+2026_Q3+type@asset+block@Copilot_20260218_155058.png",
  ),
  "advanced-deep-learning": mediaFile("Advanced Deep Learning.png"),
  "applications-of-ai": mediaFile("applicationsAI.png"),
  "deep-learning": mediaFile("DeepLearningML2.png"),
  nlp: mediaFile("Natural_Language_Processing.png"),
  "explainability-ai": mediaFile("Explainability_In_AI_Systems.png"),
  "cyber-fundamentals": mediaFile("CybersecurityFundamentals.png"),
  "systems-network-security": mediaFile("Systems_Network_Security.png"),
  "identity-management": mediaFile("IdentityManagement&Auth.png"),
  "info-sec-management": mediaFile("Information_Security_Management.jpg"),
  "computer-forensics": mediaFile("Computer_Forensics.jpg"),
  "digital-leadership-innovation": mediaFile("Digital_Age_Leadership&Innovation_Management.jpg"),
  "digital-business-models": mediaFile("Digital Business Models & Venture Building.png"),
  "strategic-management": mediaFile("Strategic Management and Entrepreneurial Transformation.png"),
  "design-thinking": mediaFile("Design Thinking.png"),
  "coding-camp-i": mediaFile("Coding_CampI_Python.png"),
  "immersive-technologies": mediaFile(
    "asset-v1-LMS+VRTY_immersivetechnologies+2025_Q4+type@asset+block@Copilot_20250925_142543.png",
  ),
  "virtual-worlds": mediaFile(
    "asset-v1-LMS+VRTY_virtualworlds+2026_Q1+type@asset+block@building_vistual_worlds-2.png",
  ),
  "big-data-cloud": mediaFile("BigDataSSCC-2.png"),
};

export const UNIQUE_IMAGES = {
  worldClass: mediaFile("World Class Learning.png"),
  flexible: mediaFile("Flexible Learning.png"),
  accessibility: mediaFile(
    "composition_representing_the_theme_of_digitalization_and_the_connection_of_electronic_networks_line_i7bpizuloojff370jst6_1.png",
  ),
  sustainability: mediaFile("People Visuals Image (38).png"),
};

export const JOURNEY_IMAGES = {
  classes: "/journey/classes.jpg",
  degree: "/journey/degree.png",
  career: "/journey/resume.png",
};

export const ACCREDITORS = [
  {
    src: "https://german-uds.de/logo/logo-WR.png",
    alt: "Wissenschaftsrat",
    href: "https://www.wissenschaftsrat.de/download/archiv/Konzeptpr%C3%BCfungen.pdf?__blob=publicationFile&v=0",
  },
  {
    src: "https://german-uds.de/logo/logo-Akkreditierungsrat.png",
    alt: "German Accreditation Council",
    href: "https://antrag.akkreditierungsrat.de/akkrstudiengaenge/?hochschule=1e2b21b2-8dad-40a9-bd37-0c74b9116d39&limit=100",
  },
  {
    src: "https://german-uds.de/logo/logo-asiin.png",
    alt: "ASIIN",
    href: "http://www.asiin-ev.de/pages/de/asiin/akkreditierung-studiengaenge/akkreditierte-studiengaenge.php?suchbegriff=German+University+of+Digital+Science",
  },
  {
    src: "https://german-uds.de/logo/logo-brb.png",
    alt: "Land Brandenburg",
    href: "https://mwfk.brandenburg.de/mwfk/de/wissenschaft/hochschulen/nicht-staatliche-hochschulen/german-university-of-digital-science/",
  },
];

export function programImage(slug: string) {
  return PROGRAM_IMAGES[slug] ?? CATALOGUE_IMAGES.master;
}

export function microImage(slug: string) {
  return MICRO_IMAGES[slug] ?? CATALOGUE_IMAGES.micro;
}
