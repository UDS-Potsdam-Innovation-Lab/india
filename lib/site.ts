export const SITE = {
  name: "German University of Digital Science",
  shortName: "German UDS",
  indiaName: "German UDS India",
  tagline: "A German-accredited university degree — studied from home in India.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://india.german-uds.de",
  mainSite: "https://german-uds.de",
  applyUrl: "https://german-uds.de/study",
  microDegreeUrl: "https://german-uds.de/study/programs/micro-degree",
  coveUrl: "https://german-uds.de/campus-of-virtual-education-cove",
  email: "office@german-uds.de",
  studentAffairsEmail: "office@german-uds.de",
  presidiumEmail: "presidium@german-uds.de",
  phone: "+49 331 982 237 81",
  phoneAlt: "+49 331 968 920 20",
  address: {
    line1: "German University of Digital Science gGmbH",
    line2: "CloudHouse, Marlene-Dietrich-Allee 14",
    city: "14482 Potsdam",
    country: "Germany",
  },
  legal: {
    court: "Amtsgericht Charlottenburg",
    register: "HRB 191881 B",
    representedBy: "Prof. Dr. Mike Friedrichsen & Prof. Dr. Christoph Meinel",
  },
  fees: {
    mastersYear: 7500,
    mbaYear: 7500,
    microDegree: 900,
    quarterlyYear: 8000,
    quarterlyInstalment: 2000,
  },
  deadlines: {
    degree: "20 September 2026",
    nextIntake: "October 2026",
    intakes: "April & October",
  },
  fastTrack: {
    duration: "Online, 1 year, 4 quarters, 60 ECTS",
    language: "English",
    fees: "€7,500",
    mode: "Full-time / Part-time",
    deadline: "20 September 2026",
    requirements: [
      "Bachelor's degree in a STEM discipline with 240 ECTS or equivalent",
      "English Level B2 (CEFR) or equivalent",
    ],
  },
  social: {
    linkedin: "https://www.linkedin.com/company/german-uds",
    instagram: "https://www.instagram.com/german_uds/",
  },
  /** Official wordmark from german-uds.de. Drop a replacement file at public/logo/logo-fixed.svg to swap it. */
  logo: {
    src: "/logo/logo-fixed.svg",
    srcOnDark: "https://german-uds.de/logo/logo.svg",
    width: 210,
    height: 40,
    showIndiaLabel: false,
  },
} as const;

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/study", label: "Study" },
  { href: "/study/masters", label: "Master" },
  { href: "/study/mba", label: "MBA" },
  { href: "/study/micro-degrees", label: "Micro-Degree" },
] as const;

export const FAQ = [
  {
    q: "Is German UDS a real, accredited German university?",
    a: "Yes. German University of Digital Science is a state-recognised university in Brandenburg. Its degree programmes are accredited by the German Accreditation Council (Akkreditierungsrat) and assessed by ASIIN. The Wissenschaftsrat reviewed the university concept positively. Graduates receive a full German university degree, not a private certificate.",
  },
  {
    q: "Can I complete the degree without moving to Germany?",
    a: "Yes. All Master's (including Fast Track), MBA and Micro-Degree programmes are delivered fully online in English. There is no compulsory campus attendance. You can live at home, keep working, and still earn a German-accredited degree.",
  },
  {
    q: "Do I need APS, a blocked account, or a student visa?",
    a: "Not for the online degree itself. APS, blocked accounts and student visas apply when you relocate to Germany for on-campus study. German UDS programmes are completed digitally from home, so those relocation steps are not required for enrolment. An optional later pathway to Germany exists through The Founder's MBAs.",
  },
  {
    q: "Will the degree help me apply for jobs after graduation?",
    a: "You graduate with a German university Master's or MBA, which you can use when applying for roles at home, in Germany and internationally. A German university degree is a recognised higher-education qualification. We do not guarantee employment or a residence permit. Student Affairs can advise on career documentation and next steps.",
  },
  {
    q: "What does it cost compared with studying in Germany in person?",
    a: "Tuition is €7,500 per year for Master's and MBA programmes, or €900 per Micro-Degree. Studying online means you do not pay German rent, a blocked account, visa fees or relocation flights. Use the cost comparison on this site for an illustrative breakdown.",
  },
  {
    q: "What is the Fast Track?",
    a: "Fast Track is a one-year, 60 ECTS online route to a German UDS Master's for applicants who already hold a STEM bachelor's with 240 ECTS or equivalent. Study in English, full-time or part-time, for €7,500. The next published deadline is 20 September 2026.",
  },
  {
    q: "What are The Founder's MBAs?",
    a: "A dual-MBA pathway with Berlin College of Business and Technology. Over two years, students work toward BCBT's International MBA and the German UDS MBA in Digital Transformation, with time in Berlin's startup ecosystem. Applications are expected to open later in 2026. Programme fees and full admissions criteria will be published on german-uds.de.",
  },
  {
    q: "What are the admission requirements?",
    a: "Master's (two years): a Bachelor's degree (STEM for some programmes) and English at CEFR B2. Fast Track (one year): a STEM bachelor's with 240 ECTS or equivalent, and English B2. MBA: a university degree or equivalent, at least three years of relevant professional experience in a digital environment, and English B2. Micro-Degrees: no prior qualifications required.",
  },
  {
    q: "How do I apply?",
    a: "Micro-Degrees can be booked directly. For Master's and MBA programmes, create an account on the German UDS application portal, verify your email, then start the application. You can also book a Student Affairs session first.",
  },
  {
    q: "What support will I receive as an online student?",
    a: "Student Affairs offers weekly drop-in sessions, personal appointments, application help, and academic webinars. Teaching is in English. Live sessions are scheduled so students in other time zones can join. You also have access to COVE, the Campus of Virtual Education.",
  },
];
