export type Project = {
  slug: string
  title: string
  titleKey?: string
  tagline: string
  taglineKey?: string
  type: 'work' | 'personal' | 'ongoing'

  tags: string[]
  stack: string[]

  problem?: string
  problemKey?: string
  solution?: string
  solutionKey?: string

  highlights: string[]
  highlightsKey?: string

  description?: string[]
  descriptionKey?: string
  learnings?: string[]
  learningsKey?: string

  roadmap?: string[]
  roadmapKey?: string
  imageUrl?: string[]

  repoUrl?: string
  demoUrl?: string

  downloadUrl?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'job-app-tracker',
    title: 'Job Application Tracker',
    titleKey: 'projectsData.jobAppTracker.title',
    tagline: 'Une web app pour organiser et analyser ses candidatures.',
    taglineKey: 'projectsData.jobAppTracker.tagline',
    type: 'personal',
    tags: ['Web', 'Full-stack', 'Productivity'],

    stack: ['Vue', 'FastAPI', 'PostgreSQL'],

    problem:
      'La gestion des candidatures devient vite fragmentée : documents multiples, suivi imprécis et manque de visibilité globale.',
    problemKey: 'projectsData.jobAppTracker.problem',

    solution:
      'J’ai développé une application centralisée permettant de structurer et suivre ses candidatures de manière claire, tout en posant des bases solides pour des évolutions futures.',
    solutionKey: 'projectsData.jobAppTracker.solution',

    highlights: [
      'Suivi structuré des candidatures',
      'Vision claire des documents utilisés',
      'Architecture pensée pour évoluer',
    ],
    highlightsKey: 'projectsData.jobAppTracker.highlights',

    description: [
      "Cette application web permet de regrouper et suivre des candidatures d'emploi dans une interface unique et lisible.",
      'Le projet met l’accent sur la clarté des données, la maintenabilité du code et une architecture backend conçue pour évoluer progressivement.',
    ],
    descriptionKey: 'projectsData.jobAppTracker.description',

    learnings: [
      'Conception d’une architecture orientée produit',
      'Structuration d’une API claire avec FastAPI',
      'Organisation et lisibilité d’un front Vue à l’échelle',
    ],
    learningsKey: 'projectsData.jobAppTracker.learnings',

    roadmap: [
      'Amélioration continue de l’expérience utilisateur',
      'Fonctionnalités avancées autour de l’organisation et de l’analyse',
    ],
    roadmapKey: 'projectsData.jobAppTracker.roadmap',

    imageUrl: [],
    repoUrl: 'https://github.com/B9R9/NextStep-Docs',
    demoUrl: '',
    downloadUrl: '',
  },
  {
    slug: 'thought',
    title: 'Thought',
    titleKey: 'projectsData.thought.title',
    tagline: 'A privacy-first mobile app to capture and secure thoughts',
    taglineKey: 'projectsData.thought.tagline',
    type: 'personal',

    tags: ['Mobile', 'Privacy-first', 'Productivity'],

    stack: ['Flutter', 'Dart', 'Hive'],

    problem:
      'Most note-taking apps rely on cloud services, accounts, and analytics, creating friction and privacy concerns for users who simply want to write something down quickly.',
    problemKey: 'projectsData.thought.problem',

    solution:
      'Thought is a minimalist, local-first mobile app that allows users to capture thoughts instantly and store them securely on their device, without accounts, cloud sync, or tracking.',
    solutionKey: 'projectsData.thought.solution',

    highlights: [
      'Designed and shipped a fully functional mobile POC',
      'Local-first architecture with no cloud dependency',
      'PIN-based lock with fallback for basic security',
      'Clean, distraction-free UX focused on speed',
      'Published to Google Play (internal testing)',
    ],
    highlightsKey: 'projectsData.thought.highlights',

    description: [
      'Thought is a proof-of-concept mobile application built to explore minimalist UX, privacy-first design, and local data persistence.',
      'The app allows users to quickly write down thoughts and manage them locally without accounts, feeds, or external services.',
      'This project also serves as a technical and product-oriented demo for my portfolio, highlighting end-to-end ownership from idea to release.',
    ],
    descriptionKey: 'projectsData.thought.description',

    learnings: [
      'Designing mobile UX with a strong focus on reducing cognitive load',
      'Managing local persistence and data models with Hive',
      'Handling app security flows (PIN lock, fallback, lifecycle)',
      'Shipping and testing an app through the Google Play Console',
      'Balancing POC scope with production-ready decisions',
    ],
    learningsKey: 'projectsData.thought.learnings',

    roadmap: [
      'Full local encryption of stored data',
      'Search and filtering capabilities',
      'Tag-based and date-based organization',
      'Local export and backup',
      'Optional advanced modules (AI assistance, voice input)',
    ],
    roadmapKey: 'projectsData.thought.roadmap',

    imageUrl: [
      '/images/projects/thought/logo.png',
      '/images/projects/thought/image1.jpg',
      '/images/projects/thought/image6.jpg',
      '/images/projects/thought/image2.jpg',
      '/images/projects/thought/image4.jpg',
      '/images/projects/thought/image3.jpg',
      '/images/projects/thought/image5.jpg',
    ],

    repoUrl: 'https://github.com/B9R9/Thoughts?tab=readme-ov-file#readme',
    demoUrl: undefined,

    downloadUrl: 'https://github.com/B9R9/Thoughts/archive/refs/heads/main.zip',
  },
  {
    slug: 'hivemind-llm-platform',

    title: 'HiveMind',
    titleKey: 'projectsData.hivemindLlmPlatform.title',
    tagline: 'A modular LLM platform with vector search and metadata-driven reasoning',
    taglineKey: 'projectsData.hivemindLlmPlatform.tagline',
    type: 'personal',

    tags: ['AI', 'Backend', 'DevTools'],

    stack: [
      'FastAPI',
      'Python',
      'LLM (local & API-based)',
      'Vector Database',
      'Embeddings',
      'React',
      'Tailwind CSS',
    ],

    problem:
      'Most LLM-based applications lack structure, controllability, and scalability. \
    Prompt-only approaches make it difficult to refine results, apply filtering logic, \
    or evolve toward more complex reasoning systems.',
    problemKey: 'projectsData.hivemindLlmPlatform.problem',

    solution:
      'HiveMind introduces a modular backend architecture where user queries are transformed \
    into embeddings, compared against a vector store, refined through metadata affinity, \
    and then reformulated before being sent to the LLM. This enables precise, explainable, \
    and extensible LLM-driven workflows.',
    solutionKey: 'projectsData.hivemindLlmPlatform.solution',

    highlights: [
      'Vector-based semantic search combined with metadata filtering',
      'Clear separation between embedding, retrieval, and generation layers',
      'Modular service-oriented backend architecture (non-microservice)',
      'Designed for extensibility and experimentation with LLM behavior',
      'Frontend planned for observability and interaction flow debugging',
    ],
    highlightsKey: 'projectsData.hivemindLlmPlatform.highlights',

    description: [
      'HiveMind is an experimental LLM platform focused on control, structure, and evolvability.',
      'Instead of directly prompting a language model, user inputs are embedded and matched \
    against a vector store enriched with metadata.',
      'The system evaluates semantic affinity, applies contextual filters, and reformulates \
    the query to guide the LLM toward more relevant and consistent responses.',
      'The backend is implemented with FastAPI and organized into internal services to allow \
    future scaling without premature microservice complexity.',
    ],
    descriptionKey: 'projectsData.hivemindLlmPlatform.description',

    learnings: [
      'Designing LLM systems beyond prompt engineering',
      'Trade-offs between monoliths, modular services, and microservices',
      'Practical use of vector databases and embedding strategies',
      'Importance of metadata for relevance and control in RAG systems',
      'Architecting AI systems with future observability in mind',
    ],
    learningsKey: 'projectsData.hivemindLlmPlatform.learnings',

    roadmap: [
      'Finalize vector store and metadata schema',
      'Implement internal service boundaries and interfaces',
      'Add evaluation and scoring mechanisms for retrieval quality',
      'Build a frontend interface for query inspection and debugging',
      'Experiment with multiple LLM providers and local models',
    ],
    roadmapKey: 'projectsData.hivemindLlmPlatform.roadmap',

    repoUrl: 'https://github.com/B9R9/HiveMind?tab=readme-ov-file#readme',
  },
  {
    slug: 'arties-app',
    title: 'Arties',
    titleKey: 'projectsData.artiesApp.title',
    tagline: 'Discover cultural events around you',
    taglineKey: 'projectsData.artiesApp.tagline',
    type: 'work',

    tags: ['Mobile', 'Full-stack', 'Events'],
    stack: ['Flutter', 'Node.js', 'TypeScript', 'PostgreSQL', 'REST API', 'Testing', 'CI/CD'],

    problem:
      'Cultural events are often scattered across multiple platforms, making discovery difficult and time-consuming for users.',
    problemKey: 'projectsData.artiesApp.problem',

    solution:
      'Arties centralizes cultural events into a single mobile application, offering a smooth and intuitive experience to discover events based on user interests and location.',
    solutionKey: 'projectsData.artiesApp.solution',

    highlights: [
      'Developed a cross-platform mobile application using Flutter',
      'Designed and integrated REST APIs with Node.js and TypeScript',
      'Managed and optimized a PostgreSQL database',
      'Contributed to testing, debugging, and continuous deployment',
      'Worked fully remote in a collaborative environment',
    ],
    highlightsKey: 'projectsData.artiesApp.highlights',

    description: [
      'Arties is a mobile application dedicated to cultural event discovery.',
      'The project focused on delivering a fast, reliable, and user-friendly experience.',
      'I worked across the full stack, from API integration to mobile UI implementation.',
      'Special attention was given to data consistency, performance, and testing.',
    ],
    descriptionKey: 'projectsData.artiesApp.description',

    learnings: [
      'Building and maintaining production-ready mobile applications',
      'Improving API design and database modeling',
      'Working efficiently in a remote, asynchronous team',
      'Strengthening testing and deployment practices',
    ],
    learningsKey: 'projectsData.artiesApp.learnings',

    imageUrl: [
      '/images/arties/logo.jpeg',
      '/images/arties/arties1.jpg',
      '/images/arties/arties2.jpg',
    ],
  },
  {
    slug: 'hyperin-platform',
    title: 'HyperIn',
    titleKey: 'projectsData.hyperinPlatform.title',
    tagline: 'Smart management platform for shopping centers',
    taglineKey: 'projectsData.hyperinPlatform.tagline',
    type: 'work',

    tags: ['Web', 'SaaS', 'Product'],
    stack: ['Vue.js', 'Quasar', 'JavaScript', 'Node.js', 'REST API', 'Testing', 'Agile'],

    problem:
      'The existing platform required modernization to improve usability, performance, and long-term maintainability while supporting an evolving product roadmap.',
    problemKey: 'projectsData.hyperinPlatform.problem',

    solution:
      'Modernized key parts of the web application using Vue.js and Quasar, improving UI consistency, performance, and developer experience while ensuring seamless integration with backend APIs.',
    solutionKey: 'projectsData.hyperinPlatform.solution',

    highlights: [
      'Modernized user interfaces using Vue.js and Quasar',
      'Migrated legacy features to up-to-date frameworks',
      'Connected frontend features to backend APIs',
      'Wrote unit and integration tests to ensure reliability',
      'Collaborated with cross-functional teams to deliver end-to-end solutions',
    ],
    highlightsKey: 'projectsData.hyperinPlatform.highlights',

    description: [
      'HyperIn is a SaaS platform designed to help shopping centers manage digital experiences, offers, and customer engagement.',
      'I worked on improving and modernizing existing frontend features while maintaining product stability.',
      'The role required balancing technical improvements with business constraints in a live production environment.',
    ],
    descriptionKey: 'projectsData.hyperinPlatform.description',

    learnings: [
      'Working on large-scale, production-ready SaaS applications',
      'Refactoring and modernizing legacy codebases',
      'Improving UX without disrupting existing users',
      'Collaborating effectively with product and backend teams',
    ],
    learningsKey: 'projectsData.hyperinPlatform.learnings',
    imageUrl: [
      '/images/hyperin/logo.jpeg',
      '/images/hyperin/hyperin1.png',
      '/images/hyperin/hyperin2.png',
      '/images/hyperin/hyperin3.png',
    ],
    demoUrl: 'https://www.hyperin.com/',
  },
  {
    slug: 'dashboard-quasar',
    title: 'Dashboard UI avec Quasar',
    titleKey: 'projectsData.dashboardQuasar.title',
    tagline: 'Un dashboard moderne et modulaire construit avec Quasar et Vue.',
    taglineKey: 'projectsData.dashboardQuasar.tagline',
    type: 'personal',
    tags: ['Web', 'Frontend', 'UI'],
    stack: ['Vue', 'Quasar'],

    problem:
      'Mettre en place rapidement un dashboard moderne nécessite souvent de structurer correctement les layouts, la navigation et les composants dès le départ.',
    problemKey: 'projectsData.dashboardQuasar.problem',

    solution:
      'J’ai développé un dashboard front-end avec Quasar afin d’explorer ses patterns UI, structurer une base réutilisable et tester différentes approches de layout et de composants.',
    solutionKey: 'projectsData.dashboardQuasar.solution',

    highlights: [
      'Layouts responsives avec Quasar',
      'Navigation claire et structurée',
      'Composants UI réutilisables',
    ],
    highlightsKey: 'projectsData.dashboardQuasar.highlights',

    description: [
      'Ce projet est un dashboard front-end développé avec Quasar et Vue, servant de terrain d’expérimentation pour la conception d’interfaces modernes et maintenables.',
      'Il met l’accent sur la structuration des layouts, la navigation, et l’organisation des composants dans une application front-end à moyenne échelle.',
    ],
    descriptionKey: 'projectsData.dashboardQuasar.description',

    learnings: [
      'Prise en main approfondie de Quasar',
      'Structuration d’un dashboard modulaire',
      'Gestion des layouts et composants réutilisables',
    ],
    learningsKey: 'projectsData.dashboardQuasar.learnings',

    roadmap: [
      'Ajout de nouvelles vues et composants',
      'Amélioration de la cohérence visuelle',
      'Exploration de cas d’usage plus complexes',
    ],
    roadmapKey: 'projectsData.dashboardQuasar.roadmap',

    imageUrl: [],
    repoUrl: 'https://github.com/B9R9/dashboard-quasar',
    demoUrl: '',
    downloadUrl: '',
  },
]
