import React from 'react';
import { Section } from '../components/UIComponents';
import { PROFILE } from '../constants';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen pt-10">
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Sobre Mim</h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-6">
              {PROFILE.bio}
            </p>
            <p className="text-slate-400 leading-relaxed">
              Minha trajetória é marcada pela busca constante em alinhar a tecnologia com as necessidades do negócio. Não vejo TI apenas como suporte, mas como um pilar estratégico que deve oferecer previsibilidade, segurança e eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Competências */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-purple-400">
                <Code size={24} />
                <h2 className="text-2xl font-bold text-white">Competências Core</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Liderança de Equipes Multidisciplinares",
                  "Gestão de Crises e Incidentes Críticos",
                  "ITIL & COBIT (Governança de TI)",
                  "Planejamento Estratégico (PDCA, SWOT)",
                  "Infraestrutura (Windows Server, Redes, Virtualização)",
                  "Análise de Dados Operacionais",
                  "Gestão de Fornecedores e Contratos"
                ].map((skill, i) => (
                  <li key={i} className="flex items-start text-slate-300">
                    <span className="mr-3 text-purple-500 mt-1.5">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Abordagem */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-purple-400">
                <Briefcase size={24} />
                <h2 className="text-2xl font-bold text-white">Abordagem de Gestão</h2>
              </div>
              <div className="space-y-6 text-slate-300">
                <div>
                  <h3 className="font-bold text-white mb-1">Pessoas Primeiro</h3>
                  <p className="text-sm text-slate-400">Desenvolvimento de autonomia e segurança psicológica. Acredito que processos servem às pessoas, não o contrário.</p>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Dados > Opinião</h3>
                  <p className="text-sm text-slate-400">Decisões baseadas em indicadores (TMA, SLA, MTTR) e análise de causa raiz (RCA).</p>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Prevenção</h3>
                  <p className="text-sm text-slate-400">O foco é sempre mover a operação do modo "Apagar Incêndios" para "Prevenção de Fogo".</p>
                </div>
              </div>
            </div>

          </div>

          {/* Education Placeholder */}
          <div className="mt-16 pt-16 border-t border-slate-800">
            <div className="flex items-center gap-2 mb-8 text-purple-400">
              <GraduationCap size={24} />
              <h2 className="text-2xl font-bold text-white">Certificações e Metodologias</h2>
            </div>
             <div className="flex flex-wrap gap-3">
               {['ITIL v4', 'COBIT', 'Scrum Essentials', 'Windows Server Admin', 'Mikrotik MTCNA'].map(cert => (
                 <span key={cert} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-medium text-sm border border-slate-700">
                   {cert}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;