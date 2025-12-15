export const RESUME_DATA = {
  name: "Mingyu Hwang",
  initials: "MK",
  location: "Seoul, South Korea",
  locationLink: "https://www.google.com/maps/place/Seoul",
  about:
    "AI Engineer focused on building stable automation systems and LLM applications ",
  summary:
    "As a AI enginner, I specialize in Python-based AI engineering and web automation. I lead a team of engineers, focusing on migrating legacy projects to stable systems and establishing code quality standards. My expertise lies in Playwright, Asyncio, and orchestrating LLMs for practical business solutions.",
  avatarUrl: "https://github.com/suted2.png",
  personalWebsiteUrl: "https://jaban-96.tistory.com/",
  contact: {
    email: "suted321@gmail.com",
    tel: "+82 10-8936-3675",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/suted2",
        icon: "GitHubIcon",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/%EB%AF%BC%EA%B7%9C-%ED%99%A9-45a022257/",
        icon: "LinkedInIcon",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/jaban.mg/",
        icon: "InstagramIcon",
      },
      {
        name: "Blog",
        url: "https://jaban-96.tistory.com/",
        icon: "GlobeIcon", // 블로그 아이콘
      },
    ],
  },
  education: [
    {
      school: "서강대학교 (Sogang Univ.)",
      degree: "경영학 학사 (Business Administration)",
      start: "2016",
      end: "2023",
    },
    {
      school: "Alphaco Deep Learning Bootcamp",
      degree: "AI 딥러닝 부트캠프 5기 수료 (우수 수료)",
      start: "2022.12",
      end: "2023.06",
    },
  ],
  work: [
    {
      company: "MATA EDU",
      link: "https://www.mataedu.com/",
      badges: ["Full-time", "LLM", "EdTech", "MLOps"],
      title: "AI Engineer",
      start: "Aug 2023",
      end: "May 2024",
      description:
      "수학 교육용 챗봇 및 문제 정오답 예측 모델 개발을 전담했습니다. Mistral/Gemma 기반 sLLM을 QLoRA와 DPO로 파이프닝하여 Kor-LLM-Leaderboard 상위 10% 성능을 달성했으며, RAG(Vector Search)를 도입해 환각(Hallucination) 현상을 억제했습니다. 또한 BentoML과 Prometheus를 활용해 모델 서빙 대시보드를 구축했습니다.",    },
    {
      company: "Dalpha",
      link: "https://dalpha.so/ko",
      badges: ["Full-time"],
      title: "AI Engineer",
      start: "May 2024",
      end: "Present",
      description:
      "Spring 팀의 리더로서 주니어 엔지니어 멘토링 및 코드 컨벤션 수립. 레거시 프로젝트를 CX팀으로 안정적으로 이관하는 파이프라인 구축. Act 팀으로 Playwright와 Asyncio를 활용한 고성능 웹 오토메이션 및 AI 에이전트 개발을 주도하고 있습니다."},
  ],
  skills: [
    "Python",
    "PyTorch",
    "LLM",
    "Playwright",
    "BentoML & Prometheus",
    "Rust",
  ],
  projects: [
    {
      title: "Review Analysis System (ACOS)",
      techStack: [
        "Dalpa",
        "Python",
        "LLM Prompting",
        "Data Analysis",
      ],
      description: "고객 리뷰에서 속성(Aspect), 범주(Category), 의견(Opinion), 감성(Sentiment)을 추출하는 ACOS 분석 시스템 개발. 복잡한 리뷰 데이터를 구조화하여 클라이언트에게 비즈니스 인사이트를 제공.",
    },
    {
      title: "Math Tutor AI Chatbot",
      techStack: [
        "Bitroove",
        "LLM Fine-tuning",
        "RAG",
        "Claude/GPT API",
      ],
      description:
        "자사 수학 문제 데이터를 활용한 교육용 AI 챗봇. 10만 건 이상의 문제/해설 데이터를 전처리하고, 용어집 기반의 RAG를 구축하여 답변 정확도를 높임. 학생의 감정 케어(격려) 기능과 수학 개념 설명을 분리하여 설계.",
      link: {
        label: "Project Review",
        href: "https://jaban-96.tistory.com/", // 관련 회고 글이 있다면 연결
      },
    },
    {
      title: "Student Score Prediction Model",
      techStack: ["Bitroove", "XGBoost", "Autoencoder", "Knowledge Tracing"],
      description:
        "학생의 문제 풀이 이력을 기반으로 정답 여부를 예측하는 모델 개발. 기존 KT 모델 대비 AUC 0.85 -> 0.88로 성능 향상. Cold Start 문제를 해결하기 위해 군집 분석(Clustering) 도입.",
    },
    {
      title: "Seoul City GenAI Hackathon",
      techStack: ["Award", "TTS", "Lip-sync Model"],
      description:
        "서울시 주최 생성형 AI 해커톤 우수상 수상 (2023). 공공 행정 서비스 효율화를 위한 디지털 휴먼(Lip-sync) 및 TTS 모델 개발.",
    },
  ],
} as const;
