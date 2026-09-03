const FILE = "https://german-uds.de/api/media/file";

export function mediaFile(name: string) {
  return `${FILE}/${name.split("/").map(encodeURIComponent).join("/")}`;
}

export const HERO_IMAGE = mediaFile("Header-6.jpeg");

export const PROGRAM_IMAGES: Record<string, string> = {
  "applied-ai": mediaFile("M.Sc. Applied AI.jpg"),
  cybersecurity: mediaFile("M.Sc. Cybersecurity.jpg"),
  "advanced-digital-reality": mediaFile("M.Sc. Advanced Digital Reality.jpg"),
  "digital-leadership": mediaFile("M.Sc. Digital Leadership.jpg"),
  "quantum-computing": mediaFile("AdobeStock_876124851.jpeg"),
  "digital-transformation": mediaFile("MBA Digital Transformation.jpg"),
  "digital-technologies": mediaFile("MBA Digital Technologies.jpg"),
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
  "ai-business-innovation": mediaFile("applicationsAI.png"),
  "advanced-deep-learning": mediaFile("DeepLearningML2.png"),
  "applications-of-ai": mediaFile("applicationsAI.png"),
  "deep-learning": mediaFile("DeepLearningML2.png"),
  nlp: mediaFile("Applied AI.png"),
  "explainability-ai": mediaFile("Explainability_In_AI_Systems.png"),
  "cyber-fundamentals": mediaFile("CybersecurityFundamentals.png"),
  "systems-network-security": mediaFile("Systems_Network_Security.png"),
  "identity-management": mediaFile("Software&Application_Security.jpg"),
  "info-sec-management": mediaFile("Information_Security_Management.jpg"),
  "computer-forensics": mediaFile("cyber.png"),
  "digital-leadership-innovation": mediaFile("Digital_Age_Leadership&Innovation_Management.jpg"),
  "digital-business-models": mediaFile("DigitalEcosystemsandPlatformEconomy.png"),
  "strategic-management": mediaFile("UnderstandingTheDigitalWorld.png"),
  "design-thinking": mediaFile("Complex_Problem_solving&Design_Thinking.jpg"),
  "coding-camp-i": mediaFile("Coding_CampI_Python.png"),
  "immersive-technologies": mediaFile("VR.png"),
  "virtual-worlds": mediaFile("VR.png"),
  "big-data-cloud": mediaFile("BigDataSSCC-2.png"),
};

export const UNIQUE_IMAGES = {
  worldClass: mediaFile("World Class Learning.png"),
  flexible: mediaFile("Flexible Learning.png"),
  accessibility: mediaFile(
    "composition_representing_the_theme_of_digitalization_and_the_connection_of_electronic_networks_line_i7bpizuloojff370jst6_1.png",
  ),
  sustainability: mediaFile("Students journey 1.png"),
};

export function programImage(slug: string) {
  return PROGRAM_IMAGES[slug] ?? CATALOGUE_IMAGES.master;
}

export function microImage(slug: string) {
  return MICRO_IMAGES[slug] ?? CATALOGUE_IMAGES.micro;
}
