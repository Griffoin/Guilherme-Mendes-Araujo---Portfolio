import { Project } from './types';
import { casesData } from './cases';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Sobre & Experiência', path: '/sobre' },
  { label: 'Cases Técnicos', path: '/cases' },
  { label: 'Contato', path: '/contato' },
];

export const PROFILE = {
  name: "Guilherme Araújo",
  title: "Supervisor de TI & Gestor de Operações",
  tagline: "Transformando operações reativas em modelos proativos e eficientes.",
  bio: "Supervisor de TI com experiência comprovada na liderança de equipes de suporte dedicado. Especializado em gestão de riscos, otimização de processos e desenvolvimento de talentos, com forte habilidade para alinhar a performance técnica com os objetivos estratégicos do negócio.",
  location: "São Paulo, Brasil",
  email: "guilherme.m.araujo@hotmail.com",
  linkedin: "https://www.linkedin.com/in/araujomguilherme/",
  github: "https://github.com/Griffoin"
};

export const PROJECTS: Project[] = casesData;