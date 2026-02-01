export type Project = {
  slug: string
  title: string
  tagline: string
  type: 'work' | 'personal' | 'ongoing'

  tags: string[]
  stack: string[]

  problem?: string
  solution?: string

  highlights: string[]

  description?: string[]
  learnings?: string[]

  roadmap?: string[]
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
    slug: 'thought-notes-app',
    title: 'Thought',
    tagline: 'Capture rapide de pensées, verrouillée et chiffrée localement.',
    type: 'personal',

    tags: ['mobile', 'productivity', 'privacy-first', 'offline-first'],
    stack: ['Flutter', 'Dart', 'Hive', 'Local authentication'],

    problem:
      'Noter une pensée sur le moment est souvent trop lent, et les apps classiques n’offrent pas toujours une vraie confidentialité (stockage cloud par défaut, friction, collecte).',
    solution:
      'Une app minimaliste pour capturer une pensée en 1 geste, avec verrouillage (PIN + biométrie si dispo) et stockage chiffré localement, sans compte.',

    highlights: [
      'Ajout instantané de pensées + liste chronologique',
      'Édition + vue détaillée',
      'Suppression rapide (interaction pensée)',
      'Bottom sheet pour naviguer par date',
      'Écran d’introduction / onboarding réaffichable',
      'Settings: langue, reset, changement PIN',
      'Chiffrement du stockage local (Hive)',
    ],

    description: [
      'Thought est un POC orienté “privacy-first” : tout reste sur l’appareil.',
      'L’expérience est volontairement minimaliste : écrire, retrouver, éditer — sans distraction.',
      'La sécurité n’est pas une option : verrouillage dès l’ouverture et données locales chiffrées.',
    ],

    learnings: [
      'Architecture Flutter simple et maintenable (models/widgets/screens)',
      'Gestion du stockage local avec Hive (migrations, perf, structure des données)',
      'UX mobile: interactions rapides, focus clavier, patterns de suppression',
      'Onboarding + réglages multilingues basés sur la langue du téléphone',
    ],

    roadmap: [
      'Recherche + filtres (tags, dates, mots-clés)',
      'Export/backup chiffré (fichier local)',
      'Support pièces jointes (image / audio) en option',
      'Assistant IA local (résumé / classification) si activé',
      'Widgets / raccourcis (quick capture)',
    ],

    imageUrl: [
      '/projects/thought/cover.png',
      '/projects/thought/screen-home.png',
      '/projects/thought/screen-detail.png',
      '/projects/thought/screen-settings.png',
    ],

    repoUrl: 'https://github.com/<your-username>/thought',
    demoUrl: 'https://<your-demo-url>',
    downloadUrl: 'https://play.google.com/store/apps/details?id=<your.package.name>',
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
