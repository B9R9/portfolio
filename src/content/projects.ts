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
    tagline: 'Une web app pour organiser et comparer ses candidatures.',
    type: 'personal',
    tags: ['Personnel', 'Web App', 'Full-Stack', 'Vue'],
    stack: ['Vue', 'FastAPI', 'PostgreSQL'],
    problem:
      "Suivre ses candidatures implique souvent des fichiers éparpillés, des CV différents, et peu de visibilité sur l'historique et l'avancement.",
    solution:
      'J’ai conçu une application centralisée pour suivre chaque candidature, comparer les documents utilisés, et préparer l’ajout futur de fonctionnalités avancées (tags, scoring, rappels).',
    highlights: [
      'Vue claire des candidatures et statuts',
      'Comparaison de CV / lettres',
      'Structure pensée pour évoluer (tags, scoring, historique)',
    ],
    description: [
      "Cette application web permet de suivre ses candidatures d'emploi en un seul endroit. Elle offre une vue d'ensemble claire des postes postulés, de leurs statuts, et permet de comparer facilement les CV et lettres de motivation utilisés pour chaque candidature.",
      "L'interface utilisateur est construite avec Vue.js pour une expérience fluide, tandis que le backend utilise FastAPI et PostgreSQL pour gérer les données de manière efficace.",
    ],
    learnings: [
      'Structurer une application pour supporter des évolutions produit futures',
      'Concevoir une API claire et évolutive avec FastAPI',
      'Améliorer la lisibilité et la maintenabilité du front avec Vue',
    ],
    roadmap: [
      'Ajout de notifications et rappels',
      'Extension navigateur pour capturer les offres',
      'Partage de candidatures entre utilisateurs',
    ],
    imageUrl: ['/images/projects/job-app-tracker-1.png'],
    repoUrl: 'https://github.com/yourname/yourrepo',
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

    tags: ['Mobile', 'Privacy-first', 'Offline', 'POC', 'Flutter'],
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
      '/images/projects/thought/list.png',
      '/images/projects/thought/settings.png',
    ],

    repoUrl: 'https://github.com/B9R9/Thoughts?tab=readme-ov-file#readme',
    demoUrl: undefined,

    downloadUrl: 'https://github.com/B9R9/Thoughts/archive/refs/heads/main.zip',
  },
  {
    slug: 'hivemind-rag-assistant',
    title: 'HiveMind',
    tagline:
      'A modular RAG backend that turns user queries into vectors, retrieves relevant context with metadata filtering, and generates grounded answers.',

    type: 'personal',
    tags: ['RAG', 'LLM', 'Vector Search', 'FastAPI', 'Portfolio'],
    stack: [
      'FastAPI',
      'Python',
      'Vector DB (Qdrant/Chroma)',
      'Embeddings (e.g. bge / OpenAI-compatible)',
      'React',
      'Tailwind CSS',
      'Docker',
    ],

    problem:
      'I needed a reliable way to answer user questions based on my own documents and project knowledge, without hallucinations. Traditional keyword search wasn’t enough, and I also wanted metadata-aware filtering (topic, recency, type of source) to improve precision.',
    solution:
      'I built a modular RAG pipeline: the user query is embedded, searched in a vector store, refined with metadata filters/boosting, then a response is generated with citations. Internal endpoints expose each step (embed/search/rerank/generate) so the system stays testable and evolvable.',

    highlights: [
      'End-to-end RAG pipeline with metadata-aware retrieval',
      'Separation of concerns: embed → retrieve → refine → generate',
      'Configurable retrieval (filters/boosting) to improve relevance',
      'Response generation designed for grounding + citations',
      'Backend structured as modules/services (no premature microservices)',
    ],

    description: [
      'HiveMind is a portfolio-oriented assistant that can answer questions using a curated knowledge base.',
      'It supports semantic search via vector embeddings, plus metadata filtering to narrow results by source type, topic, or recency.',
      'The API exposes internal endpoints for experimentation (embedding, indexing, retrieval, reranking, and final generation).',
    ],

    learnings: [
      'Metadata filtering is a big quality lever for RAG: it reduces noise and improves answer faithfulness.',
      'Keeping retrieval and generation decoupled makes testing far easier (unit tests for retrieval quality, integration tests for the whole flow).',
      'A modular monolith is often the best starting point before splitting into microservices.',
    ],

    roadmap: [
      'Add reranking (cross-encoder) for better top-k selection',
      'Implement evaluation harness (golden Q/A, retrieval metrics, regression tests)',
      'Add observability: request tracing + retrieval debugging UI',
      'Streaming responses + source previews in the UI',
      'Multi-tenant knowledge bases (per user / per workspace)',
    ],

    imageUrl: [
      '/images/projects/hivemind/cover.png',
      '/images/projects/hivemind/architecture.png',
      '/images/projects/hivemind/ui.png',
    ],

    repoUrl: 'https://github.com/<your-username>/hivemind',
    demoUrl: 'https://<your-demo-domain>',
    downloadUrl: 'https://<your-download-link>',
  },
  {
    slug: 'arties-work',
    title: 'Arties',
    tagline:
      'A modular RAG backend that turns user queries into vectors, retrieves relevant context with metadata filtering, and generates grounded answers.',

    type: 'work',
    tags: ['RAG', 'LLM', 'Vector Search', 'FastAPI', 'Portfolio'],
    stack: [
      'FastAPI',
      'Python',
      'Vector DB (Qdrant/Chroma)',
      'Embeddings (e.g. bge / OpenAI-compatible)',
      'React',
      'Tailwind CSS',
      'Docker',
    ],

    problem:
      'I needed a reliable way to answer user questions based on my own documents and project knowledge, without hallucinations. Traditional keyword search wasn’t enough, and I also wanted metadata-aware filtering (topic, recency, type of source) to improve precision.',
    solution:
      'I built a modular RAG pipeline: the user query is embedded, searched in a vector store, refined with metadata filters/boosting, then a response is generated with citations. Internal endpoints expose each step (embed/search/rerank/generate) so the system stays testable and evolvable.',

    highlights: [
      'End-to-end RAG pipeline with metadata-aware retrieval',
      'Separation of concerns: embed → retrieve → refine → generate',
      'Configurable retrieval (filters/boosting) to improve relevance',
      'Response generation designed for grounding + citations',
      'Backend structured as modules/services (no premature microservices)',
    ],

    description: [
      'HiveMind is a portfolio-oriented assistant that can answer questions using a curated knowledge base.',
      'It supports semantic search via vector embeddings, plus metadata filtering to narrow results by source type, topic, or recency.',
      'The API exposes internal endpoints for experimentation (embedding, indexing, retrieval, reranking, and final generation).',
    ],

    learnings: [
      'Metadata filtering is a big quality lever for RAG: it reduces noise and improves answer faithfulness.',
      'Keeping retrieval and generation decoupled makes testing far easier (unit tests for retrieval quality, integration tests for the whole flow).',
      'A modular monolith is often the best starting point before splitting into microservices.',
    ],

    roadmap: [
      'Add reranking (cross-encoder) for better top-k selection',
      'Implement evaluation harness (golden Q/A, retrieval metrics, regression tests)',
      'Add observability: request tracing + retrieval debugging UI',
      'Streaming responses + source previews in the UI',
      'Multi-tenant knowledge bases (per user / per workspace)',
    ],

    imageUrl: [
      '/images/projects/hivemind/cover.png',
      '/images/projects/hivemind/architecture.png',
      '/images/projects/hivemind/ui.png',
    ],

    repoUrl: 'https://github.com/<your-username>/hivemind',
    demoUrl: 'https://<your-demo-domain>',
    downloadUrl: 'https://<your-download-link>',
  },
  {
    slug: 'hyperin-work',
    title: 'hyperin',
    tagline:
      'A modular RAG backend that turns user queries into vectors, retrieves relevant context with metadata filtering, and generates grounded answers.',

    type: 'work',
    tags: ['RAG', 'LLM', 'Vector Search', 'FastAPI', 'Portfolio'],
    stack: [
      'FastAPI',
      'Python',
      'Vector DB (Qdrant/Chroma)',
      'Embeddings (e.g. bge / OpenAI-compatible)',
      'React',
      'Tailwind CSS',
      'Docker',
    ],

    problem:
      'I needed a reliable way to answer user questions based on my own documents and project knowledge, without hallucinations. Traditional keyword search wasn’t enough, and I also wanted metadata-aware filtering (topic, recency, type of source) to improve precision.',
    solution:
      'I built a modular RAG pipeline: the user query is embedded, searched in a vector store, refined with metadata filters/boosting, then a response is generated with citations. Internal endpoints expose each step (embed/search/rerank/generate) so the system stays testable and evolvable.',

    highlights: [
      'End-to-end RAG pipeline with metadata-aware retrieval',
      'Separation of concerns: embed → retrieve → refine → generate',
      'Configurable retrieval (filters/boosting) to improve relevance',
      'Response generation designed for grounding + citations',
      'Backend structured as modules/services (no premature microservices)',
    ],

    description: [
      'HiveMind is a portfolio-oriented assistant that can answer questions using a curated knowledge base.',
      'It supports semantic search via vector embeddings, plus metadata filtering to narrow results by source type, topic, or recency.',
      'The API exposes internal endpoints for experimentation (embedding, indexing, retrieval, reranking, and final generation).',
    ],

    learnings: [
      'Metadata filtering is a big quality lever for RAG: it reduces noise and improves answer faithfulness.',
      'Keeping retrieval and generation decoupled makes testing far easier (unit tests for retrieval quality, integration tests for the whole flow).',
      'A modular monolith is often the best starting point before splitting into microservices.',
    ],

    roadmap: [
      'Add reranking (cross-encoder) for better top-k selection',
      'Implement evaluation harness (golden Q/A, retrieval metrics, regression tests)',
      'Add observability: request tracing + retrieval debugging UI',
      'Streaming responses + source previews in the UI',
      'Multi-tenant knowledge bases (per user / per workspace)',
    ],

    imageUrl: [
      '/images/projects/hivemind/cover.png',
      '/images/projects/hivemind/architecture.png',
      '/images/projects/hivemind/ui.png',
    ],

    repoUrl: 'https://github.com/<your-username>/hivemind',
    demoUrl: 'https://<your-demo-domain>',
    downloadUrl: 'https://<your-download-link>',
  },
  {
    slug: 'tenant-dashboard',
    title: 'tenant-dashboard',
    tagline:
      'A modular RAG backend that turns user queries into vectors, retrieves relevant context with metadata filtering, and generates grounded answers.',

    type: 'work',
    tags: ['RAG', 'LLM', 'Vector Search', 'FastAPI', 'Portfolio'],
    stack: [
      'FastAPI',
      'Python',
      'Vector DB (Qdrant/Chroma)',
      'Embeddings (e.g. bge / OpenAI-compatible)',
      'React',
      'Tailwind CSS',
      'Docker',
    ],

    problem:
      'I needed a reliable way to answer user questions based on my own documents and project knowledge, without hallucinations. Traditional keyword search wasn’t enough, and I also wanted metadata-aware filtering (topic, recency, type of source) to improve precision.',
    solution:
      'I built a modular RAG pipeline: the user query is embedded, searched in a vector store, refined with metadata filters/boosting, then a response is generated with citations. Internal endpoints expose each step (embed/search/rerank/generate) so the system stays testable and evolvable.',

    highlights: [
      'End-to-end RAG pipeline with metadata-aware retrieval',
      'Separation of concerns: embed → retrieve → refine → generate',
      'Configurable retrieval (filters/boosting) to improve relevance',
      'Response generation designed for grounding + citations',
      'Backend structured as modules/services (no premature microservices)',
    ],

    description: [
      'HiveMind is a portfolio-oriented assistant that can answer questions using a curated knowledge base.',
      'It supports semantic search via vector embeddings, plus metadata filtering to narrow results by source type, topic, or recency.',
      'The API exposes internal endpoints for experimentation (embedding, indexing, retrieval, reranking, and final generation).',
    ],

    learnings: [
      'Metadata filtering is a big quality lever for RAG: it reduces noise and improves answer faithfulness.',
      'Keeping retrieval and generation decoupled makes testing far easier (unit tests for retrieval quality, integration tests for the whole flow).',
      'A modular monolith is often the best starting point before splitting into microservices.',
    ],

    roadmap: [
      'Add reranking (cross-encoder) for better top-k selection',
      'Implement evaluation harness (golden Q/A, retrieval metrics, regression tests)',
      'Add observability: request tracing + retrieval debugging UI',
      'Streaming responses + source previews in the UI',
      'Multi-tenant knowledge bases (per user / per workspace)',
    ],

    imageUrl: [
      '/images/projects/hivemind/cover.png',
      '/images/projects/hivemind/architecture.png',
      '/images/projects/hivemind/ui.png',
    ],

    repoUrl: 'https://github.com/<your-username>/hivemind',
    demoUrl: 'https://<your-demo-domain>',
    downloadUrl: 'https://<your-download-link>',
  },
]
