export const experience = [
  {
    company: 'Capital One',
    role: 'Principal Software & Data Engineer',
    location: 'New York, NY',
    period: 'Feb 2025 — Present',
    type: 'Full-time',
    bullets: [
      'Spearheaded a 0→1 platform modernization effort, migrating 150+ core engineering teams from Presto to a high-performance Databricks stack (Spark, Delta Lake, Databricks SQL)',
      'Architected cluster governance policies and optimized Spark/SQL workloads, capturing >30% reduction in annual compute expenditure while scaling analytics capabilities',
      'Engineered a cross-platform observability and telemetry engine integrating Databricks and Datadog for real-time pipeline diagnostics, cutting MTTR by 75%',
      'Pioneered a secure, scalable IAM framework by integrating Unity Catalog with AWS Secrets Manager, facilitating seamless migration of 50+ system users from legacy secret scopes',
    ],
    tech: ['Databricks', 'Apache Spark', 'Delta Lake', 'Unity Catalog', 'AWS', 'Datadog', 'Python', 'SQL'],
  },
  {
    company: 'Capital One',
    role: 'Senior Software & Data Engineer',
    location: 'New York, NY',
    period: 'Feb 2022 — Feb 2025',
    type: 'Full-time',
    bullets: [
      'Automated Kubernetes cluster scaling management using AWS Lambda, improving infrastructure efficiency and reducing 15+ hours of weekly manual DevOps overhead',
      'Engineered SSO-enabled authentication for an internal Presto JDBC driver, adopted by 100+ enterprise users across data platforms',
      'Developed JWT-based authorization microservice securing mission-critical services for 10+ teams',
      'Optimized high-volume cost chargeback microservice using REST APIs, reducing query latency 10x',
      'Designed a Data Serving Layer using AWS Lambda and Snowflake, accelerating ML feature retrieval and downstream analytics performance',
    ],
    tech: ['AWS Lambda', 'Kubernetes', 'Snowflake', 'Presto', 'Splunk', 'JWT', 'REST APIs', 'Python'],
  },
  {
    company: 'Capital One',
    role: 'Associate Fullstack Engineer',
    location: 'McLean, VA',
    period: 'Feb 2020 — Feb 2022',
    type: 'Full-time',
    bullets: [
      'Developed a cross-functional KPI dashboard (React / Spring Boot) to monitor user-facing onboarding health metrics across multiple lines of business',
      'Maintained Platinum-tier SLA compliance by resolving critical production incidents in under 30 minutes through advanced fault-tolerant fallback strategies',
      'Streamlined CI/CD pipelines using Jenkins and Docker, reducing software release cycles by 40%',
    ],
    tech: ['React', 'Spring Boot', 'Java', 'Jenkins', 'Docker', 'REST APIs', 'AWS'],
  },
  {
    company: 'Capital One',
    role: 'Developer Academy',
    location: 'McLean, VA',
    period: 'Aug 2019 — Feb 2020',
    type: 'Program',
    bullets: [
      'Completed immersive full-stack cloud engineering program focused on Python, JavaScript, AWS, and SQL',
      'Developed REST APIs, microservices, and full-stack applications following TDD and Agile best practices',
      'Led a machine learning project using Pandas + Scikit-Learn to analyze Slack collaboration patterns',
    ],
    tech: ['Python', 'JavaScript', 'AWS', 'SQL', 'Pandas', 'Scikit-Learn'],
  },
]

export const projects = [
  {
    name: 'Neural Document Intelligence',
    description:
      'Production-grade RAG system that ingests PDFs, web pages, and Notion docs into a vector store, then answers questions with citations. Supports hybrid BM25 + semantic search and streaming responses.',
    tech: ['Python', 'LangChain', 'FAISS', 'FastAPI', 'React', 'OpenAI'],
    github: 'https://github.com/akhilchamarthy',
    demo: null,
    featured: true,
  },
  {
    name: 'LLM Fine-Tuning Pipeline',
    description:
      'End-to-end pipeline for QLoRA fine-tuning of LLaMA-2 and Mistral on custom datasets. Includes dataset prep, PEFT training, automated eval with EleutherAI harness, and W&B experiment tracking.',
    tech: ['Python', 'PyTorch', 'HuggingFace', 'LoRA', 'W&B', 'CUDA'],
    github: 'https://github.com/akhilchamarthy',
    demo: null,
    featured: true,
  },
  {
    name: 'Real-Time ML Feature Store',
    description:
      'High-throughput feature serving system built on Apache Kafka, Redis, and PostgreSQL. Handles 100k+ events/sec with a declarative feature registry and point-in-time correct training data generation.',
    tech: ['Python', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'FastAPI'],
    github: 'https://github.com/akhilchamarthy',
    demo: null,
    featured: true,
  },
  {
    name: 'AI Code Review Bot',
    description:
      'GitHub App that posts automated PR reviews powered by GPT-4, flagging security vulnerabilities, performance anti-patterns, and style issues with in-line diff comments.',
    tech: ['TypeScript', 'Node.js', 'OpenAI API', 'GitHub API', 'Redis'],
    github: 'https://github.com/akhilchamarthy',
    demo: null,
    featured: false,
  },
  {
    name: 'Streaming Sentiment Dashboard',
    description:
      'Real-time NLP pipeline that ingests social media streams via Kafka, classifies sentiment with a fine-tuned DistilBERT, and renders live charts with D3.js.',
    tech: ['Python', 'Transformers', 'Kafka', 'FastAPI', 'React', 'D3.js'],
    github: 'https://github.com/akhilchamarthy',
    demo: null,
    featured: false,
  },
  {
    name: 'Data Quality Monitor',
    description:
      'Automated data observability platform built on Great Expectations and dbt tests. Monitors 200+ assets with SLA tracking, anomaly detection, and Slack alerting.',
    tech: ['Python', 'dbt', 'Airflow', 'Great Expectations', 'PostgreSQL'],
    github: 'https://github.com/akhilchamarthy',
    demo: null,
    featured: false,
  },
]

export const blogPosts = [
  {
    title: 'RAG Is Not Enough: Building Production-Grade Retrieval Systems',
    date: 'March 14, 2025',
    excerpt:
      'Everyone says "just use RAG" — but production retrieval is a systems engineering problem. Here\'s how hybrid search, re-ranking, and query routing changed everything for us.',
    tags: ['AI', 'RAG', 'LLMs'],
    readTime: '8 min read',
  },
  {
    title: 'Fine-Tuning LLaMA-2 on 1 GPU: A Practical QLoRA Guide',
    date: 'January 28, 2025',
    excerpt:
      'Full walkthrough from dataset preparation to PEFT training and evaluation. Includes the gotchas that cost me two weeks of debugging so you don\'t have to.',
    tags: ['LLMs', 'Fine-Tuning', 'PyTorch'],
    readTime: '12 min read',
  },
  {
    title: 'The Feature Store Pattern: Why Your ML Pipeline Is Broken Without One',
    date: 'November 22, 2024',
    excerpt:
      'Training-serving skew kills ML products silently. Here\'s the architecture pattern that solved it for us — and why point-in-time correctness is the hardest part.',
    tags: ['Data Engineering', 'MLOps', 'Architecture'],
    readTime: '10 min read',
  },
]

export const aiCapabilities = [
  {
    title: 'Large Language Models',
    description: 'Fine-tuning, RAG, prompt engineering, and production LLM deployment at scale with observability.',
    color: 'purple',
  },
  {
    title: 'Data Engineering',
    description: 'Real-time streaming pipelines, feature stores, and distributed processing at petabyte scale.',
    color: 'cyan',
  },
  {
    title: 'ML Infrastructure',
    description: 'Training pipelines, model serving, A/B testing frameworks, and end-to-end MLOps.',
    color: 'pink',
  },
  {
    title: 'Neural Architectures',
    description: 'Transformers, diffusion models, GNNs — deep understanding from theory to implementation.',
    color: 'emerald',
  },
  {
    title: 'Analytics & Insights',
    description: 'Data modeling, BI tooling, and self-serve analytics that empower entire organizations.',
    color: 'purple',
  },
  {
    title: 'AI Safety & Evals',
    description: 'Evaluation frameworks, RLHF, red-teaming, and responsible production AI deployment.',
    color: 'cyan',
  },
]
