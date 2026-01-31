
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Section, DecisionBlock, Badge, MetricCard, StrategyBlock } from '../components/UIComponents';
import { ArrowLeft, Calendar, CheckCircle2, Layers, Briefcase, AlertTriangle, Lightbulb } from 'lucide-react';

const CaseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const project = PROJECTS.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
        <h2 className="text-2xl font-bold mb-4">Case não encontrado</h2>
        <Link to="/cases" className="text-purple-400 hover:underline">Voltar para lista</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-slate-950">
      {/* 1. HEADER: Professional Identification */}
      <div className="bg-slate-900 text-white py-12 md:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/cases" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group text-sm font-medium">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Voltar para Portfólio
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-purple-900/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wide">
              <Briefcase size={12} /> {project.role}
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wide">
              <Calendar size={12} /> {project.timeline}
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed border-l-2 border-purple-500 pl-4">
            {project.shortDescription}
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* 2. CONTEXTO OPERACIONAL & PROBLEMA (The Setup) */}
          <section>
             <h2 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-6 flex items-center gap-2">
               <span className="w-8 h-px bg-purple-400"></span> Fase 1: O Cenário
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800">
                  <h3 className="text-white font-bold text-lg mb-3">Contexto Operacional</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.context}</p>
               </div>
               <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-10">
                    <AlertTriangle size={64} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3 text-red-100">Problema Central</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
               </div>
             </div>
          </section>

          {/* 3. DECISÃO CHAVE (The Strategy) */}
          <section>
             <h2 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-6 flex items-center gap-2">
               <span className="w-8 h-px bg-purple-400"></span> Fase 2: A Decisão
             </h2>
             <StrategyBlock 
               decision={project.strategic.decision}
               risk={project.strategic.risk}
               tradeoff={project.strategic.tradeoff}
             />
          </section>

          {/* 4. EXECUÇÃO (High Level) */}
          <section>
             <h2 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-6 flex items-center gap-2">
               <span className="w-8 h-px bg-purple-400"></span> Fase 3: Execução
             </h2>
             <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
                <div className="prose prose-invert prose-slate max-w-none">
                   <p className="whitespace-pre-line leading-relaxed text-slate-300">
                     {project.execution}
                   </p>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-800">
                  <h4 className="text-sm font-bold text-slate-400 uppercase mb-4">Stack & Ferramentas</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <Badge key={tech} color="slate">{tech}</Badge>
                    ))}
                  </div>
                </div>
             </div>
          </section>

          {/* 5. RESULTADOS (The Impact) */}
          <section>
             <h2 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-6 flex items-center gap-2">
               <span className="w-8 h-px bg-purple-400"></span> Fase 4: Impacto no Negócio
             </h2>
             
             {/* Quantitative */}
             {project.metrics && project.metrics.length > 0 && (
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                 {project.metrics.map((metric, idx) => (
                   <MetricCard 
                     key={idx}
                     label={metric.label}
                     value={metric.value}
                     description={metric.description}
                   />
                 ))}
               </div>
             )}

             {/* Qualitative */}
             <div className="bg-green-900/10 border border-green-900/30 rounded-xl p-6">
                <ul className="space-y-3">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="mr-3 text-green-500 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-300 text-sm font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </section>

          {/* 6. LIÇÕES APRENDIDAS (Maturity) */}
          <section>
             <div className="bg-gradient-to-r from-slate-900 to-slate-900 border border-slate-800 rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-900/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 bg-purple-900/30 rounded-lg text-purple-400">
                      <Lightbulb size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-white">Maturidade Profissional</h3>
                </div>
                
                <div className="space-y-4">
                  {project.lessonsLearned.map((lesson, idx) => (
                    <div key={idx} className="flex gap-4">
                       <span className="text-purple-500 font-bold text-lg select-none">0{idx + 1}.</span>
                       <p className="text-slate-300 italic">"{lesson}"</p>
                    </div>
                  ))}
                </div>
             </div>
          </section>

          {/* Footer Navigation */}
          <div className="border-t border-slate-800 pt-10 flex justify-between items-center">
             <Link to="/cases" className="text-slate-400 hover:text-purple-400 font-medium flex items-center gap-2 group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar para o Portfólio
             </Link>
          </div>
        </div>
      </Section>
    </article>
  );
};

export default CaseDetail;
