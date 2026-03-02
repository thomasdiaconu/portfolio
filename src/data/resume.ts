export interface ResumeSkillGroup {
  title: string;
  items: string[];
}

export interface ResumeExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  technologies: Array<{ name: string; iconSlug: string }>;
  highlights: string[];
}

export interface ResumeEducation {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

export interface ResumeContent {
  skills: ResumeSkillGroup[];
  experience: ResumeExperience[];
  education: ResumeEducation[];
}

export const resumeContent: ResumeContent = {
  skills: [
    {
      title: "Programming",
      items: ["Python", "TypeScript (Angular, React)", "Java", "SQL", "Bash", "Git"],
    },
    {
      title: "Core CS",
      items: ["Algorithms", "Data Structures"],
    },
    {
      title: "Cloud & Infrastructure",
      items: [
        "AWS (EC2, S3, Lambda, IAM, CloudWatch, Bedrock)",
        "Docker",
        "CI/CD",
        "Observability",
        "Security architecture",
      ],
    },
    {
      title: "AI Engineering",
      items: [
        "LLMs",
        "RAG",
        "Prompt engineering",
        "Agents (Strands, CrewAI)",
        "Classical ML",
      ],
    },
    {
      title: "Languages",
      items: [
        "French (native)",
        "English (fluent, IELTS 7)",
        "Romanian (bilingual)",
        "German (intermediate)",
      ],
    },
    {
      title: "Hobbies",
      items: ["Tennis", "Chess", "Reading"],
    },
  ],
  experience: [
    {
      company: "Amazon Web Services (AWS)",
      role: "Software Development Engineer II",
      location: "Paris, France",
      period: "Jan 2023 - Present",
      technologies: [
        { name: "Python", iconSlug: "python" },
        { name: "Java", iconSlug: "openjdk" },
        { name: "Angular", iconSlug: "angular" },
        { name: "PostgreSQL", iconSlug: "postgresql" },
        { name: "Docker", iconSlug: "docker" },
        { name: "RabbitMQ", iconSlug: "rabbitmq" },
      ],
      highlights: [
        "Led end-to-end AI-assisted modernization of 100k+ LOC COBOL systems into DDD microservices (Java/Angular), orchestrating custom and IDE-integrated AI agents for transformation, validation, and integration.",
        "Technical lead on modernization of a 5M+ LOC AS400 COBOL platform into a distributed architecture (Java Spring Boot, Angular, PostgreSQL, AWS), delivering maintainable production code with high quality standards, JaCoCo reporting, and 100+ E2E tests.",
        "Designed and implemented a batch-processing platform using RabbitMQ, IBM MQ, and SQS, with Quartz scheduling, persistent DB state, and a frontend control panel for operations and monitoring.",
        "Reduced critical database query latency from 30 seconds to under 1 second via indexing, views, and JMeter validation.",
        "Built and integrated agentic GenAI tooling for automated code-quality remediation, CI/CD break prevention, and Playwright-based test exploration on stateful modern applications.",
        "Designed an AI agent to translate C code to Java, transforming 50+ programs and reducing conversion effort from days to hours.",
        "Led a 2-month security review for an isolated AWS environment handling sensitive customer code, delivering 15+ improvements across IAM, networking, proxying, and observability.",
      ],
    },
    {
      company: "Paprec",
      role: "Software Development Engineer",
      location: "Paris, France",
      period: "Oct 2021 - Dec 2022",
      technologies: [
        { name: "Python", iconSlug: "python" },
        { name: "Go", iconSlug: "go" },
        { name: "Angular", iconSlug: "angular" },
        { name: "Docker", iconSlug: "docker" },
        { name: "TensorFlow", iconSlug: "tensorflow" },
        { name: "OpenCV", iconSlug: "opencv" },
      ],
      highlights: [
        "Led development of a new internal payroll platform with Python, Go, Angular, and Docker; implemented 10+ screens and 5+ REST APIs, and contributed to a high-performance wage computation engine.",
        "Built an image annotation and waste prediction platform using classical ML and Python pipelines, doubling labeling throughput and enabling annotation of 10k+ images.",
        "Delivered a waste classification solution with Python, TensorFlow, and OpenCV; evaluated pre-trained R-CNN performance and implemented YOLO while identifying overfitting through train/test analysis.",
      ],
    },
    {
      company: "Sopra Banking Software",
      role: "Artificial Intelligence Intern",
      location: "Paris, France",
      period: "Feb 2021 - Aug 2021",
      technologies: [
        { name: "Python", iconSlug: "python" },
        { name: "REST API", iconSlug: "fastapi" },
        { name: "NGINX", iconSlug: "nginx" },
      ],
      highlights: [
        "Developed machine learning algorithms for investment profiling in a psychography context.",
        "Designed and implemented 10+ REST APIs for an online banking proof of concept and implemented a reverse proxy layer.",
      ],
    },
    {
      company: "Paprec (Freelance, During Studies)",
      role: "Frontend Developer (Angular)",
      location: "Paris, France",
      period: "Summers 2019, 2020",
      technologies: [
        { name: "Angular", iconSlug: "angular" },
        { name: "TypeScript", iconSlug: "typescript" },
      ],
      highlights: [
        "Served as main frontend developer on two production Angular web applications and presented outcomes to General Management.",
      ],
    },
  ],
  education: [
    {
      degree: "MSc in Data Science and Engineering",
      institution: "Eurecom",
      location: "Nice, France",
      period: "2019 - 2021",
      details: [
        "GPA: 3.6/4.0",
        "Machine Learning, Deep Learning, Optimization, Software Engineering",
      ],
    },
    {
      degree: "MSc in Engineering",
      institution: "IMT Atlantique",
      location: "Brest, France",
      period: "2018 - 2021",
      details: ["Programming, Mathematics"],
    },
  ],
};
