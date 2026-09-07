export type DegreeKind = "master" | "mba";

export type Program = {
  slug: string;
  kind: DegreeKind;
  title: string;
  tagline: string;
  duration: string;
  ects: number;
  years: number;
  quarters: number;
  language: "English";
  fees: string;
  mode: string;
  coordinator?: string;
  applyPath: string;
  officialUrl: string;
  requirements: string[];
  overview: string;
  objectives: string[];
  career: string[];
  modules: { quarter: string; items: string[] }[];
  electives: string[];
  indiaFit: string;
  fastTrack?: boolean;
};

export type Quarter = "Q1" | "Q2" | "Q3" | "Q4";

export const QUARTERS: { id: Quarter; label: string; months: string }[] = [
  { id: "Q1", label: "Quarter 1", months: "Jan – Mar" },
  { id: "Q2", label: "Quarter 2", months: "Apr – Jun" },
  { id: "Q3", label: "Quarter 3", months: "Jul – Sep" },
  { id: "Q4", label: "Quarter 4", months: "Oct – Dec" },
];

export type MicroDegree = {
  slug: string;
  title: string;
  category: "AI" | "Cybersecurity" | "Business" | "XR" | "Foundations";
  quarter: Quarter;
  summary: string;
  ects: number;
  duration: string;
  intake: string;
  fee: string;
};

export const masters: Program[] = [
  {
    slug: "applied-ai",
    kind: "master",
    title: "M.Sc. Applied AI",
    tagline: "Shaping the future with intelligence.",
    duration: "Online, 2 years, 8 quarters, 120 ECTS",
    ects: 120,
    years: 2,
    quarters: 8,
    language: "English",
    fees: "€7,500 p.a.",
    mode: "Full-time / part-time",
    coordinator: "Prof. Dr. Felix Weitkämper",
    applyPath: "/apply?program=applied-ai",
    officialUrl: "https://german-uds.de/study/msc-applied-ai",
    fastTrack: true,
    requirements: [
      "Bachelor's degree in a STEM discipline with at least 180 ECTS",
      "English Level B2 (CEFR) or equivalent",
    ],
    overview:
      "The Master in Applied Artificial Intelligence is a two-year programme that covers the theoretical aspects of AI with an emphasis on concrete applications in industry, services, health and education. Students take required and elective courses, working in teams to solve complex real-world problems. The programme covers symbolic AI, neural networks and deep learning, advanced logic systems, language models, and the coding of complex systems — including the ethical and security implications of AI from the start of a project.",
    objectives: [
      "State-of-the-art knowledge in symbolic, sub-symbolic, probabilistic and language-model AI",
      "Ability to code complex applications using big-data systems and AI libraries",
      "Skills to adapt generic AI models to industry, healthcare, education and services",
      "Independent Master's thesis and final project (30 ECTS combined)",
    ],
    career: [
      "AI developer, AI system designer or AI officer",
      "Roles in product, research and applied machine learning teams",
      "Foundation for entrepreneurial AI ventures",
    ],
    modules: [
      { quarter: "1st quarter", items: ["Rootcamp I: Complex Problem Solving (5 ECTS)", "Logic and Symbolic AI (5 ECTS)", "Coding Camp I: Fundamentals (5 ECTS)"] },
      { quarter: "2nd quarter", items: ["Rootcamp II: Design Thinking (5 ECTS)", "Machine Learning & Analytics (5 ECTS)", "Coding Camp II: Interactivity (5 ECTS)"] },
      { quarter: "3rd quarter", items: ["Big Data, Software Systems, Cloud Computing (5 ECTS)", "Deep Learning (5 ECTS)", "Applications of AI (5 ECTS)"] },
      { quarter: "4th quarter", items: ["Experiment I: Group Challenge AI (15 ECTS)"] },
      { quarter: "5th–6th quarter", items: ["Six electives (5 ECTS each) from the AI and open pool"] },
      { quarter: "7th–8th quarter", items: ["Experiment II: Master's Challenge (15 ECTS)", "Master Thesis (15 ECTS)"] },
    ],
    electives: [
      "Advanced Deep Learning",
      "Probabilistic Graphical Models",
      "AI Ethics in the Digital Economy",
      "Natural Language Processing",
      "Explainability in AI Systems",
      "Reinforcement Learning",
    ],
    indiaFit:
      "India's AI product, services and GCC market is hiring at scale. This M.Sc. lets you upskill from home, keep your current job, and graduate with a German-accredited AI Master's that you can use when applying in Bengaluru, Hyderabad, Pune, Europe or remotely.",
  },
  {
    slug: "cybersecurity",
    kind: "master",
    title: "M.Sc. Cybersecurity",
    tagline: "Securing the digital world, one expert at a time.",
    duration: "Online, 2 years, 8 quarters, 120 ECTS",
    ects: 120,
    years: 2,
    quarters: 8,
    language: "English",
    fees: "€7,500 p.a.",
    mode: "Full-time / part-time",
    applyPath: "/apply?program=cybersecurity",
    officialUrl: "https://german-uds.de/study/msc-cybersecurity",
    fastTrack: true,
    requirements: [
      "Bachelor's degree from STEM disciplines or another relevant field",
      "English Level B2 (CEFR) or equivalent",
    ],
    overview:
      "The Master's programme in Cybersecurity teaches advanced knowledge for protecting digital systems as attacks become more sophisticated. Graduates are prepared for management and leadership positions where the development, maintenance and operation of complex security systems play a key role — as security engineers, analysts, privacy officers, CISOs or IT-security entrepreneurs.",
    objectives: [
      "Research and develop next-generation security strategies for complex IT infrastructures",
      "Cover enterprise, cloud, identity, forensics, AI-powered and web security",
      "Combine technical depth with communication design and the human factor in security",
    ],
    career: [
      "Security engineer, security analyst, privacy officer or CISO-track roles",
      "Positions in large organisations, consultancies and academia",
      "IT-security entrepreneurship",
    ],
    modules: [
      { quarter: "Core themes", items: ["Cybersecurity Fundamentals", "Systems & Network Security", "Identity Management & Authentication", "AI-Powered Security", "Computer Forensics", "Internet & Web Security", "Enterprise Security", "Communication Design for Cybersecurity"] },
      { quarter: "Capstone", items: ["Group challenge, Master's challenge and thesis across later quarters"] },
    ],
    electives: ["AI & Emerging Topics in Cybersecurity", "Information Security Management", "Software and Application Security", "Mobile & Wireless Security"],
    indiaFit:
      "Indian banks, IT services firms and product companies face a severe cybersecurity talent gap. Complete a German-accredited M.Sc. without leaving India, then apply for security roles locally or with European employers that recognise German university degrees.",
  },
  {
    slug: "advanced-digital-reality",
    kind: "master",
    title: "M.Sc. Advanced Digital Reality",
    tagline: "Redefining perception, transforming innovation.",
    duration: "Online, 2 years, 8 quarters, 120 ECTS",
    ects: 120,
    years: 2,
    quarters: 8,
    language: "English",
    fees: "€7,500 p.a.",
    mode: "Full-time / part-time",
    applyPath: "/apply?program=advanced-digital-reality",
    officialUrl: "https://german-uds.de/study/msc-advanced-digital-reality",
    fastTrack: true,
    requirements: [
      "Bachelor's degree from STEM disciplines or any other discipline",
      "English Level B2 (CEFR) or equivalent",
    ],
    overview:
      "An interdisciplinary Master's that combines technical know-how with creative application in virtual, augmented and mixed reality. Students learn 3D modelling, computer vision, immersive content creation, software development for digital reality, and project management for XR ventures.",
    objectives: [
      "Master AR, VR, MR, 3D modelling and immersive environments",
      "Build interactive worlds and simulated environments",
      "Apply XR across medicine, business, entertainment, architecture and journalism",
    ],
    career: [
      "XR developer, immersive designer or spatial-computing specialist",
      "Roles in product, media, industrial training and healthcare simulation",
      "Entrepreneurial ventures in digital reality",
    ],
    modules: [
      { quarter: "Core themes", items: ["Advanced 3D Modeling", "Augmented Human Performance", "Computer Vision and Perception", "Digital Reality Content Creation", "Software Development for Digital Reality", "Gamification in the Age of AI", "Project Management & Entrepreneurship in Digital Reality"] },
    ],
    electives: ["Building Virtual Worlds and Simulated Environments", "Immersive Technologies", "Multimodal Interaction and Sensor Integration"],
    indiaFit:
      "India's gaming, media, industrial-training and digital-twin markets are expanding. Study XR from home with German faculty and graduate with a degree you can take into studios, GCC teams or your own venture.",
  },
  {
    slug: "digital-leadership",
    kind: "master",
    title: "M.Sc. Digital Leadership",
    tagline: "Driving change, leading digital.",
    duration: "Online, 2 years, 8 quarters, 120 ECTS",
    ects: 120,
    years: 2,
    quarters: 8,
    language: "English",
    fees: "€7,500 p.a.",
    mode: "Full-time / part-time",
    applyPath: "/apply?program=digital-leadership",
    officialUrl: "https://german-uds.de/study/programs/master",
    fastTrack: true,
    requirements: [
      "Bachelor's degree (any discipline; STEM background recommended but not required)",
      "English Level B2 (CEFR) or equivalent",
    ],
    overview:
      "Digital Leadership prepares graduates to lead organisations through technological change. The programme combines digital strategy, innovation management, people and transformation skills with enough technical literacy to work credibly with engineering and data teams.",
    objectives: [
      "Lead digital transformation programmes across industries",
      "Connect strategy, people, technology and ethics",
      "Build a portfolio of team projects and a Master's thesis",
    ],
    career: [
      "Transformation manager, digital product lead or strategy consultant",
      "Leadership roles in GCCs, IT services and digital businesses",
      "Public-sector and NGO digitalisation roles",
    ],
    modules: [
      { quarter: "Core themes", items: ["Complex Problem Solving & Design Thinking", "Understanding & Designing the Digital World", "Digital Age Leadership and Innovation Management", "Digital Management & Human Resources", "Strategic Management and Entrepreneurial Transformation", "Data Analytics and Decision-Making"] },
    ],
    electives: ["Digital Ecosystems and Platform Economy", "Digital Transformation in Public Sector", "AI Ethics in the Digital Economy"],
    indiaFit:
      "Built for working professionals in India who want a German Master's without a career break. Lead from where you are — then use the degree when applying for senior digital roles at home or abroad.",
  },
  {
    slug: "quantum-computing",
    kind: "master",
    title: "M.Sc. Quantum Computing",
    tagline: "Shaping the future with quantum innovation.",
    duration: "Online, 2 years, 8 quarters, 120 ECTS",
    ects: 120,
    years: 2,
    quarters: 8,
    language: "English",
    fees: "€7,500 p.a.",
    mode: "Full-time / part-time",
    applyPath: "/apply?program=quantum-computing",
    officialUrl: "https://german-uds.de/study/programs/master",
    requirements: [
      "Bachelor's degree in a STEM discipline",
      "English Level B2 (CEFR) or equivalent",
    ],
    overview:
      "The Quantum Computing Master's is designed for students who want to enter one of the most rapidly developing fields in digital science. The programme connects computational foundations with emerging quantum technologies and their application in research and industry.",
    objectives: [
      "Build a rigorous foundation for quantum algorithms and applications",
      "Work in teams on research-oriented digital science projects",
      "Complete a Master's thesis at the frontier of the field",
    ],
    career: [
      "Quantum software and research-adjacent industry roles",
      "R&D positions in technology companies and labs",
      "Further academic research",
    ],
    modules: [
      { quarter: "Programme structure", items: ["Rootcamp and coding foundations", "Core quantum and computational modules", "Electives from the German UDS pool", "Group challenge, Master's challenge and thesis"] },
    ],
    electives: ["Advanced Deep Learning", "Probabilistic Graphical Models", "Logic and Symbolic AI"],
    indiaFit:
      "India is investing in quantum research and industry partnerships. This fully online German M.Sc. lets you specialise without relocating, while remaining eligible to apply for research and industry roles after graduation.",
  },
];

export const mbas: Program[] = [
  {
    slug: "digital-transformation",
    kind: "mba",
    title: "MBA Digital Transformation",
    tagline: "Lead the change in the digital era.",
    duration: "Online, one year, 4 quarters, 60 ECTS",
    ects: 60,
    years: 1,
    quarters: 4,
    language: "English",
    fees: "€7,500",
    mode: "Full-time / part-time",
    coordinator: "Prof. Dr. Mike Friedrichsen",
    applyPath: "/apply?program=mba-digital-transformation",
    officialUrl: "https://german-uds.de/study/mba-digital-transformation",
    requirements: [
      "University degree or higher education qualification",
      "Relevant professional experience in a digital environment of at least three years",
      "English Level B2 (CEFR) or equivalent",
    ],
    overview:
      "An application-oriented MBA for international professionals with at least three years' experience. Graduates gain specialist knowledge in economics and information science: planning and applying digital technologies in business, developing digital business models, and leading interdisciplinary teams through transformation — including ethical and legal issues in a digital context.",
    objectives: [
      "Lead complex digital transformation projects",
      "Combine IT competence with strategic management",
      "Assess ethical and legal issues in digital business",
      "Set up companies or take senior management roles",
    ],
    career: [
      "Change, IT or strategy consultant",
      "Transformation manager and digital decision-maker",
      "Founder or intrapreneur in digitally transforming firms",
    ],
    modules: [
      { quarter: "1st quarter", items: ["Rootcamp: Complex Problem Solving & Design Thinking (4 ECTS)", "Understanding & Designing the Digital World (4 ECTS)", "Big Data, Software Systems, Cloud Computing (4 ECTS)", "Coding Camp I: Fundamentals (4 ECTS)"] },
      { quarter: "2nd quarter", items: ["Data Analytics & Decision-Making (4 ECTS)", "Digital Business Models & Venture Building (4 ECTS)", "Strategic Management & Entrepreneurial Transformation (4 ECTS)", "Coding Camp II: Interactivity (4 ECTS)"] },
      { quarter: "3rd quarter", items: ["Elective 1 (4 ECTS)", "Elective 2 (4 ECTS)", "Elective 3 (4 ECTS)", "Group Challenge (4 ECTS)"] },
      { quarter: "4th quarter", items: ["Impact Project (12 ECTS)"] },
    ],
    electives: [
      "Digital Age Leadership & Change Management",
      "AI Ethics in the Digital Economy",
      "Digital Marketing",
      "Digital Ecosystems & Platform Economy",
      "Entrepreneurial Finance & Innovation",
      "Digital Transformation in Public Sector",
      "Digital Management & Human Resources",
    ],
    indiaFit:
      "Designed for Indian professionals who cannot pause a career for a campus MBA abroad. Finish in four quarters from home, keep earning, and hold a German-accredited MBA when you next apply for leadership roles — in India or internationally.",
  },
  {
    slug: "digital-technologies",
    kind: "mba",
    title: "MBA Digital Technologies",
    tagline: "Lead with tech, succeed with strategy.",
    duration: "Online, one year, 4 quarters, 60 ECTS",
    ects: 60,
    years: 1,
    quarters: 4,
    language: "English",
    fees: "€7,500",
    mode: "Full-time / part-time",
    applyPath: "/apply?program=mba-digital-technologies",
    officialUrl: "https://german-uds.de/study/programs/mba",
    requirements: [
      "University degree or higher education qualification",
      "Relevant professional experience in a digital environment of at least three years",
      "English Level B2 (CEFR) or equivalent",
    ],
    overview:
      "The MBA Digital Technologies is for professionals who want to lead with a strong command of digital tools — from cloud and data to applied AI — without leaving the management track. It pairs technology literacy with strategy, venture building and leadership.",
    objectives: [
      "Translate digital technologies into business advantage",
      "Lead technology-enabled products and platforms",
      "Complete a one-year MBA with an impact project",
    ],
    career: [
      "Technology-facing general management",
      "Product and platform leadership",
      "Consulting and digital venture roles",
    ],
    modules: [
      { quarter: "Year structure", items: ["Rootcamp and coding camps", "Digital world, data, cloud and business models", "Electives and group challenge", "Impact project (12 ECTS)"] },
    ],
    electives: ["AI-Powered Business Innovation", "Big Data, Software Systems, Cloud Computing", "Digital Business Models & Venture Building"],
    indiaFit:
      "A one-year German MBA you can complete while working in India's product and IT-services economy — no relocation, no blocked account, same accredited credential.",
  },
  {
    slug: "digital-management",
    kind: "mba",
    title: "MBA Digital Management",
    tagline: "Lead the change in the digital era.",
    duration: "Online, one year, 4 quarters, 60 ECTS",
    ects: 60,
    years: 1,
    quarters: 4,
    language: "English",
    fees: "€7,500",
    mode: "Full-time / part-time",
    applyPath: "/apply?program=mba-digital-management",
    officialUrl: "https://german-uds.de/study/programs/mba",
    requirements: [
      "University degree or higher education qualification",
      "Relevant professional experience in a digital environment of at least three years",
      "English Level B2 (CEFR) or equivalent",
    ],
    overview:
      "MBA Digital Management focuses on how organisations are led when work, people and value creation are digital. Students develop frameworks for managing transformation and its impact on work, talent and organisational design.",
    objectives: [
      "Manage digital organisations and hybrid teams",
      "Connect HR, leadership and transformation practice",
      "Deliver an impact project in a real organisational context",
    ],
    career: [
      "People and organisation roles in digital firms",
      "Operations and transformation leadership",
      "Consulting in digital management",
    ],
    modules: [
      { quarter: "Core themes", items: ["Digital Management & Human Resources", "Digital Age Leadership and Innovation Management", "Strategic Management and Entrepreneurial Transformation", "Impact project"] },
    ],
    electives: ["Digital Transformation in Public Sector", "Complex Problem Solving", "Entrepreneurial Finance and Innovation"],
    indiaFit:
      "For Indian managers in IT services, GCCs and startups who need a European MBA credential without a year abroad.",
  },
  {
    slug: "digital-media",
    kind: "mba",
    title: "MBA Digital Media",
    tagline: "Lead with tech, succeed with strategy.",
    duration: "Online, one year, 4 quarters, 60 ECTS",
    ects: 60,
    years: 1,
    quarters: 4,
    language: "English",
    fees: "€7,500",
    mode: "Full-time / part-time",
    applyPath: "/apply?program=mba-digital-media",
    officialUrl: "https://german-uds.de/study/programs/mba",
    requirements: [
      "University degree or higher education qualification",
      "Relevant professional experience in a digital environment of at least three years",
      "English Level B2 (CEFR) or equivalent",
    ],
    overview:
      "MBA Digital Media prepares leaders for media, platforms and content businesses shaped by AI, immersive formats and new distribution models.",
    objectives: [
      "Lead digital media products and organisations",
      "Understand platforms, audiences and emerging formats",
      "Complete a practice-oriented impact project",
    ],
    career: [
      "Digital media management and strategy",
      "Platform and content leadership",
      "Agency and in-house transformation roles",
    ],
    modules: [
      { quarter: "Core themes", items: ["Understanding & Designing the Digital World", "Digital Ecosystems and Platform Economy", "Digital Marketing", "Impact project"] },
    ],
    electives: ["Gamification in the Age of AI", "Immersive Technologies", "Communication Design for Cybersecurity"],
    indiaFit:
      "India's media, OTT and creator economy is global. Earn a German MBA from home and stay close to the market you already work in.",
  },
  {
    slug: "financial-technology",
    kind: "mba",
    title: "MBA Financial Technology",
    tagline: "Lead the change in the digital era.",
    duration: "Online, one year, 4 quarters, 60 ECTS",
    ects: 60,
    years: 1,
    quarters: 4,
    language: "English",
    fees: "€7,500",
    mode: "Full-time / part-time",
    applyPath: "/apply?program=mba-financial-technology",
    officialUrl: "https://german-uds.de/study/programs/mba",
    requirements: [
      "University degree or higher education qualification",
      "Relevant professional experience in a digital environment of at least three years",
      "English Level B2 (CEFR) or equivalent",
    ],
    overview:
      "MBA Financial Technology sits at the intersection of finance, data and regulation. It is supported by German UDS research in financial technology and law.",
    objectives: [
      "Lead FinTech products and digital finance transformation",
      "Connect markets, data, AI and regulatory context",
      "Complete an impact project in a finance setting",
    ],
    career: [
      "FinTech product and strategy roles",
      "Digital banking and payments leadership",
      "Consulting at the finance–technology boundary",
    ],
    modules: [
      { quarter: "Core themes", items: ["Data Analytics and Decision-Making", "Entrepreneurial Finance and Innovation", "Games and Finance", "Impact project"] },
    ],
    electives: ["AI Ethics in the Digital Economy", "Digital Business Models & Venture Building", "Information Security Management"],
    indiaFit:
      "India is one of the world's largest digital-payments and FinTech markets. Study a German FinTech MBA without leaving that market.",
  },
  {
    slug: "digital-law",
    kind: "mba",
    title: "MBA Digital Law",
    tagline: "Lead the change in the digital era.",
    duration: "Online, one year, 4 quarters, 60 ECTS",
    ects: 60,
    years: 1,
    quarters: 4,
    language: "English",
    fees: "€7,500",
    mode: "Full-time / part-time",
    applyPath: "/apply?program=mba-digital-law",
    officialUrl: "https://german-uds.de/study/programs/mba",
    requirements: [
      "University degree or higher education qualification",
      "Relevant professional experience in a digital environment of at least three years",
      "English Level B2 (CEFR) or equivalent",
    ],
    overview:
      "MBA Digital Law is for professionals who need to lead at the intersection of technology, regulation and business — including data protection, AI governance and digital markets.",
    objectives: [
      "Navigate digital regulation in a business context",
      "Lead compliant innovation programmes",
      "Bridge legal, technical and managerial teams",
    ],
    career: [
      "Privacy, compliance and digital-governance leadership",
      "Legal-operations and policy roles in tech firms",
      "Advisory work in digital markets",
    ],
    modules: [
      { quarter: "Core themes", items: ["AI Ethics in the Digital Economy", "Information Security Management", "Digital transformation and governance modules", "Impact project"] },
    ],
    electives: ["Cybersecurity Fundamentals", "Explainability in AI Systems", "Digital Transformation in Public Sector"],
    indiaFit:
      "Indian GCCs and product companies need leaders who understand EU-style digital regulation. This MBA is completed online from India with a German university award.",
  },
  {
    slug: "transformation-in-bureaucracy",
    kind: "mba",
    title: "MBA Transformation in Bureaucracy",
    tagline: "Lead the change in the digital era.",
    duration: "Online, one year, 4 quarters, 60 ECTS",
    ects: 60,
    years: 1,
    quarters: 4,
    language: "English",
    fees: "€7,500",
    mode: "Full-time / part-time",
    applyPath: "/apply?program=mba-transformation-in-bureaucracy",
    officialUrl: "https://german-uds.de/study/programs/mba",
    requirements: [
      "University degree or higher education qualification",
      "Relevant professional experience in a digital environment of at least three years",
      "English Level B2 (CEFR) or equivalent",
    ],
    overview:
      "This MBA addresses digital transformation in public administration and large bureaucratic organisations — citizen-centric services, constrained budgets, and the use of IT, AI and management techniques in the public sector.",
    objectives: [
      "Lead public-sector digitalisation with citizen-centric design",
      "Apply digital management under institutional constraints",
      "Deliver an impact project in administration or large organisations",
    ],
    career: [
      "Public digital service and transformation roles",
      "Consulting for government and regulated industries",
      "Leadership in large administrative organisations",
    ],
    modules: [
      { quarter: "Core themes", items: ["Digital Transformation in Public Sector", "Complex Problem Solving", "Digital Age Leadership and Innovation Management", "Impact project"] },
    ],
    electives: ["Digital Management & Human Resources", "AI Ethics in the Digital Economy", "Data Analytics and Decision-Making"],
    indiaFit:
      "Relevant for Indian civil servants, PSU professionals and public-tech leaders who want a German MBA while remaining in post.",
  },
];

export const microDegrees: MicroDegree[] = [
  { slug: "ai-ethics", title: "AI Ethics in the Digital Economy", category: "AI", quarter: "Q4", summary: "Ethical challenges of AI across law, urban planning, finance and healthcare, including comparative regulation.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "ai-business-innovation", title: "AI-Powered Business Innovation", category: "Business", quarter: "Q3", summary: "Use AI to drive innovation, digital transformation and new ventures, from literacy to pitching a viable model.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "advanced-deep-learning", title: "Advanced Deep Learning", category: "AI", quarter: "Q3", summary: "Neural networks from CNNs to transformers and agents, with efficient AI, compression and deployment.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "applications-of-ai", title: "Applications of AI", category: "AI", quarter: "Q4", summary: "Bridge theoretical AI knowledge and real-world application through teamwork, experimentation and iteration.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "deep-learning", title: "Deep Learning (ML II)", category: "AI", quarter: "Q4", summary: "Build deep networks, train with popular libraries, deploy in the cloud, and meet reinforcement learning.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "nlp", title: "Natural Language Processing", category: "AI", quarter: "Q1", summary: "Current techniques in NLP for language understanding, generation and applied language systems.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "explainability-ai", title: "Explainability in AI Systems", category: "AI", quarter: "Q4", summary: "Build ethical, transparent AI-backed systems using explainable AI (XAI) methods.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "cyber-fundamentals", title: "Cybersecurity Fundamentals", category: "Cybersecurity", quarter: "Q4", summary: "CIA triad, threats, authentication, cryptography, system, network and enterprise security, and compliance.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "systems-network-security", title: "Systems & Network Security", category: "Cybersecurity", quarter: "Q4", summary: "Vulnerabilities from traditional computers to IoT and 6G, attack vectors and practical analysis tools.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "identity-management", title: "Identity Management and Authentication", category: "Cybersecurity", quarter: "Q3", summary: "Security engineering methods that ensure authorised access to data and systems.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "info-sec-management", title: "Information Security Management", category: "Cybersecurity", quarter: "Q4", summary: "Security principles, industry standards, frameworks and critical evaluation for organisations.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "computer-forensics", title: "Computer Forensics", category: "Cybersecurity", quarter: "Q1", summary: "Investigate and report digital evidence across computers, mobile, cloud and networks.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "digital-leadership-innovation", title: "Digital Age Leadership and Innovation Management", category: "Business", quarter: "Q4", summary: "Leadership and change-management skills to drive digital transformation and innovation.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "digital-business-models", title: "Digital Business Models & Venture Building", category: "Business", quarter: "Q1", summary: "New ways of value creation and remaining competitive in an increasingly digital world.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "strategic-management", title: "Strategic Management and Entrepreneurial Transformation", category: "Business", quarter: "Q3", summary: "Economic foundations of strategy and entrepreneurial transformation across industries.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "design-thinking", title: "Design Thinking", category: "Foundations", quarter: "Q1", summary: "User-centric innovation methods used in the German UDS Rootcamp onboarding.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "coding-camp-i", title: "Coding Camp I: Fundamentals", category: "Foundations", quarter: "Q4", summary: "Team software-development project to experience how modern software is built.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "immersive-technologies", title: "Immersive Technologies", category: "XR", quarter: "Q4", summary: "3D modelling, real-time rendering and interaction for engaging AR/VR experiences.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "virtual-worlds", title: "Building Virtual Worlds and Simulated Environments", category: "XR", quarter: "Q1", summary: "Design immersive worlds with geometry, light, physics and interaction using tools such as Unity.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
  { slug: "big-data-cloud", title: "Big Data, Software Systems, Cloud Computing", category: "Foundations", quarter: "Q4", summary: "Platforms, systems and utilisation of big data and cloud technologies in industry.", ects: 5, duration: "3 months", intake: "Quarterly", fee: "€900" },
];

const MICRO_OFFICIAL_SLUGS: Record<string, string> = {
  "ai-ethics": "ai-ethics-in-the-digital-economy",
  "ai-business-innovation": "ai-powered-business-innovation-from-automation-to-entrepreneurship",
  "advanced-deep-learning": "advanced-deep-learning",
  "applications-of-ai": "applications-of-ai",
  "deep-learning": "deep-learning-ml-ii",
  nlp: "natural-language-processing",
  "explainability-ai": "explainability-in-ai-systems",
  "cyber-fundamentals": "cybersecurity-fundamentals",
  "systems-network-security": "systems--network-security",
  "identity-management": "identity-management-and-authentication",
  "info-sec-management": "information-security-management",
  "computer-forensics": "computer-forensics",
  "digital-leadership-innovation": "digital-age-leadership-and-innovation-management",
  "digital-business-models": "digital-business-models--venture-building",
  "strategic-management": "strategic-management-and-entrepreneurial-transformation",
  "design-thinking": "design-thinking",
  "coding-camp-i": "coding-camp-i-fundamentals",
  "immersive-technologies": "immersive-technologies",
  "virtual-worlds": "building-virtual-worlds-and-simulated-environments",
  "big-data-cloud": "big-data-software-systems-cloud-computing",
};

export function microOfficialUrl(slug: string) {
  const official = MICRO_OFFICIAL_SLUGS[slug];
  return official
    ? `https://german-uds.de/study/${official}`
    : "https://german-uds.de/study/programs/micro-degree";
}

export function getProgram(kind: DegreeKind, slug: string) {
  const list = kind === "master" ? masters : mbas;
  return list.find((p) => p.slug === slug);
}

export function allPrograms() {
  return [...masters, ...mbas];
}
