// Single source of truth for site copy.
// NOTE: the FAQ below is mirrored in public/index.html (FAQPage JSON-LD and the
// no-JS fallback content). If you change a question or answer here, update it there too.

export const SITE = {
  name: "Pure Digital",
  city: "Dublin",
  country: "Ireland",
  email: "hello@puredigital.ie",
  instagram: "https://instagram.com/wearepuredigital",
  instagramHandle: "@wearepuredigital",
};

export const SERVICES = [
  {
    n: "01",
    title: "iOS & Android apps",
    body:
      "Native-quality mobile apps for iPhone and Android, built to be fast, accessible and easy to grow. We handle everything from the first prototype to App Store and Google Play release.",
    tags: ["iOS", "Android", "Cross-platform", "App Store launch"],
  },
  {
    n: "02",
    title: "Web apps & platforms",
    body:
      "Customer portals, booking systems, dashboards and SaaS products. Responsive, secure web apps that work on every screen and plug into the tools you already use.",
    tags: ["Web apps", "SaaS", "Dashboards", "APIs"],
  },
  {
    n: "03",
    title: "Product design & UX",
    body:
      "Workshops, user journeys, wireframes and polished UI. We test ideas with real users early so you only build what people actually need.",
    tags: ["Discovery", "UX", "UI design", "Prototyping"],
  },
  {
    n: "04",
    title: "AI features & integrations",
    body:
      "Practical AI that earns its place: smart search, assistants, automation and data features added to new or existing apps, with privacy and GDPR in mind.",
    tags: ["AI assistants", "Automation", "Integrations", "GDPR"],
  },
];

export const PROCESS = [
  { step: "Discover", body: "A free call to understand your goals, users and budget. You get a clear scope and estimate." },
  { step: "Design", body: "Clickable prototypes you can put in front of real users before a line of production code." },
  { step: "Build", body: "Short sprints with a working build every week, so you always see progress." },
  { step: "Launch & grow", body: "Store release, analytics and ongoing support as your product and audience grow." },
];

export const FAQ = [
  {
    q: "What does Pure Digital do?",
    a: "Pure Digital is an app development studio in Dublin, Ireland. We design and build iOS, Android and web apps for startups, small businesses and sports organisations, from first idea to launch and beyond.",
  },
  {
    q: "Do you only work with businesses in Dublin?",
    a: "No. We are based in Dublin and work with clients across Ireland, the UK and Europe. Most projects run remotely, and we are happy to meet in person in Dublin.",
  },
  {
    q: "Do you build apps for both iPhone and Android?",
    a: "Yes. We build for iOS and Android, either natively or with a single cross-platform codebase, depending on what suits your product and budget best. We also build web apps.",
  },
  {
    q: "How much does it cost to build an app in Ireland?",
    a: "It depends on the features, platforms and integrations you need. After a free discovery call we give you a clear, itemised estimate so there are no surprises.",
  },
  {
    q: "Can you help after the app is launched?",
    a: "Yes. We offer ongoing support, maintenance, updates for new iOS and Android versions, and new feature development once your app is live.",
  },
  {
    q: "How do I start a project with Pure Digital?",
    a: "Email hello@puredigital.ie with a few lines about your idea. We will set up a free discovery call to talk through goals, timeline and budget.",
  },
];
