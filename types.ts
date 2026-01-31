
export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface StrategicContext {
  decision: string;
  risk: string;
  tradeoff: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  timeline: string;
  
  // Strategic Layer (New)
  strategic: StrategicContext;

  // Technical Layer Structure
  context: string;
  problem: string;
  solution: string; // Decisão Técnica
  execution: string; // Execução (Alto Nível)
  
  competencies: string[];
  results: string[]; // Texto descritivo dos resultados
  metrics: ProjectMetric[]; // Cards de métricas destacadas
  lessonsLearned: string[];
  techStack: string[];
}

export interface NavigationItem {
  label: string;
  path: string;
}
