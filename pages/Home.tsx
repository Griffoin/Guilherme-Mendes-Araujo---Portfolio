
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ShieldCheck, Server, Users, FileText, Globe, Anchor, Target, Zap } from 'lucide-react';
import { Section } from '../components/UIComponents';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  // Filter for the most impactful "Leadership" or "Scale" cases
  const selectedCases = PROJECTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      
      {/* PROFESSIONAL HERO SECTION WITH VISUAL ANCHORS */}
      <section className="relative bg-slate-950 pt-28 pb-16 md:pt-40 md:pb-24 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.5),rgba(2,6,23,1))]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            
            {/* ANCHOR 1: Primary Role Definition */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Operações de TI <br />
              <span className="text-slate-500">& Liderança Técnica em Ambientes Críticos</span>
            </h1>

            {/* VISUAL IDENTITY ANCHORS (SCAN < 5s) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              
              {/* Anchor: Seniority */}
              <div className="bg-slate-900/60 border-l-2 border-purple-500 p-4 rounded-r-lg backdrop-blur-sm">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Senioridade</p>
                <p className="text-white font-bold text-sm">+10 Anos de Experiência</p>
                <p className="text-slate-500 text-xs">Liderança Técnica & Gestão</p>
              </div>

              {/* Anchor: Responsibility */}
              <div className="bg-slate-900/60 border-l-2 border-blue-500 p-4 rounded-r-lg backdrop-blur-sm">
                 <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Responsabilidade</p>
                 <p className="text-white font-bold text-sm">Sustentação Operacional</p>
                 <p className="text-slate-500 text-xs">Ambientes de Missão Crítica</p>
              </div>

              {/* Anchor: Environment */}
              <div className="bg-slate-900/60 border-l-2 border-emerald-500 p-4 rounded-r-lg backdrop-blur-sm">
                 <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Ambiente</p>
                 <p className="text-white font-bold text-sm">Escala Distribuída</p>
                 <p className="text-slate-500 text-xs">Gestão de 80+ Unidades</p>
              </div>

              {/* Anchor: Focus */}
              <div className="bg-slate-900/60 border-l-2 border-amber-500 p-4 rounded-r-lg backdrop-blur-sm">
                 <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Foco</p>
                 <p className="text-white font-bold text-sm">Redução de Risco</p>
                 <p className="text-slate-500 text-xs">Padronização & Governança</p>
              </div>
            </div>
            
            {/* Professional Statement */}
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-3xl border-l-4 border-slate-800 pl-6">
              Assumo a responsabilidade pela continuidade de negócios e estabilidade de infraestruturas. 
              Meu foco é eliminar a "Cultura de Herói" através de processos auditáveis, liderança ativa e engenharia de confiabilidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/cases"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-purple-700 hover:bg-purple-800 transition-all shadow-lg shadow-purple-900/20"
              >
                Ver Decisões & Projetos <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 bg-slate-900 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              >
                Ver Histórico Profissional
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION - OWNERSHIP & MATURITY */}
      <Section className="bg-slate-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4">O que entrego</h2>
            <h3 className="text-3xl font-bold text-white mb-6">
              Gestão de Riscos e Maturidade Técnica
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Mais do que configurar servidores ou fechar tickets, meu papel é garantir que a tecnologia sustente a estratégia da empresa sem se tornar um gargalo.
            </p>
            <ul className="space-y-4 mt-6">
               <li className="flex items-start text-slate-300">
                  <div className="bg-purple-900/30 p-1 rounded mr-3 mt-1"><Target size={16} className="text-purple-400"/></div>
                  <span><strong>Autonomia Operacional:</strong> Redução da dependência de escalonamentos para a diretoria.</span>
               </li>
               <li className="flex items-start text-slate-300">
                  <div className="bg-purple-900/30 p-1 rounded mr-3 mt-1"><Zap size={16} className="text-purple-400"/></div>
                  <span><strong>Previsibilidade:</strong> Transformação de problemas "surpresa" em manutenções planejadas.</span>
               </li>
               <li className="flex items-start text-slate-300">
                  <div className="bg-purple-900/30 p-1 rounded mr-3 mt-1"><ShieldCheck size={16} className="text-purple-400"/></div>
                  <span><strong>Blindagem:</strong> Documentação e processos que protegem a empresa contra turnover técnico.</span>
               </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
             {/* Evidence Card 1 */}
             <div className="p-6 rounded-lg border border-slate-800 bg-slate-900 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-4">
                   <div className="p-2 bg-slate-800 rounded text-purple-400"><Globe size={20} /></div>
                   <span className="text-xs font-bold text-slate-500 uppercase">Escala</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Gestão de Ambientes Distribuídos</h4>
                <p className="text-slate-400 text-sm">
                   Responsável pela padronização e operação de redes em mais de 80 unidades, garantindo conectividade, segurança (VPN) e integridade de dados.
                </p>
             </div>

             {/* Evidence Card 2 */}
             <div className="p-6 rounded-lg border border-slate-800 bg-slate-900 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-4">
                   <div className="p-2 bg-slate-800 rounded text-purple-400"><Users size={20} /></div>
                   <span className="text-xs font-bold text-slate-500 uppercase">Liderança</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Desenvolvimento de Times</h4>
                <p className="text-slate-400 text-sm">
                   Transformação de cultura técnica: implementação de rituais de gestão, PDIs e foco em resolução de causa raiz (RCA) para equipes de suporte.
                </p>
             </div>
          </div>
        </div>
      </Section>

      {/* SELECTED CASES TEASER */}
      <Section className="bg-slate-950 border-t border-slate-900">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-3">Cases de Liderança</h2>
            <h3 className="text-3xl font-bold text-white mb-2">Decisões e Impacto</h3>
            <p className="text-slate-400">
              Projetos onde atuei diretamente na tomada de decisão, gestão de crise e reestruturação.
            </p>
          </div>
          <Link to="/cases" className="hidden md:flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Ver portfólio completo <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCases.map((project, idx) => (
             <Link 
             key={project.id}
             to={`/cases/${project.slug}`}
             className="group block bg-slate-900 rounded-lg border border-slate-800 p-6 hover:border-purple-500/50 transition-all flex flex-col h-full"
           >
             <div className="flex justify-between items-start mb-4">
               <span className="text-xs font-semibold text-slate-400 border border-slate-700 px-2 py-1 rounded">
                 {project.category}
               </span>
             </div>
             <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
               {project.title}
             </h4>
             <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">
               {project.shortDescription}
             </p>
             <div className="flex items-center text-xs font-bold text-purple-500 uppercase tracking-wide mt-auto pt-4 border-t border-slate-800/50">
               Análise do Case <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
             </div>
           </Link>
          ))}
        </div>
        
        <div className="mt-8 md:hidden flex justify-center">
           <Link to="/cases" className="w-full flex justify-center items-center px-6 py-4 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors border border-slate-800">
            Ver todos os cases
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Home;
