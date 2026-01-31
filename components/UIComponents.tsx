
import React from 'react';
import { ArrowRight, Brain, Target, Wrench, Activity, Lightbulb, Scale, AlertTriangle, GitPullRequest } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Badges ---
export const Badge: React.FC<{ children: React.ReactNode; color?: 'blue' | 'slate' | 'green' }> = ({ children, color = 'slate' }) => {
  const styles = {
    blue: 'bg-purple-900/40 text-purple-300 border-purple-700/50',
    slate: 'bg-slate-800 text-slate-300 border-slate-700',
    green: 'bg-emerald-900/30 text-emerald-300 border-emerald-800/50',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[color]}`}>
      {children}
    </span>
  );
};

// --- Case Summary Card ---
interface CaseSummaryProps {
  slug: string;
  title: string;
  category: string;
  description: string;
  index: number;
}

export const CaseSummary: React.FC<CaseSummaryProps> = ({ slug, title, category, description, index }) => {
  return (
    <Link 
      to={`/cases/${slug}`}
      className="group block bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 px-2 py-1 rounded">
            Case #{index + 1}
          </span>
          <span className="text-xs text-slate-400 font-medium">{category}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 mb-6 flex-grow line-clamp-3 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center text-purple-400 text-sm font-semibold mt-auto group-hover:underline decoration-purple-400/30 underline-offset-4">
          Ver Case Completo <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

// --- Metric Card ---
interface MetricCardProps {
  label: string;
  value: string;
  description: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, value, description }) => (
  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 shadow-sm hover:border-slate-700 transition-colors duration-300 flex flex-col h-full">
    <div className="flex items-center justify-between mb-3">
      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{label}</p>
      <Activity size={16} className="text-purple-500" />
    </div>
    <p className="text-3xl font-extrabold text-white mb-3">{value}</p>
    <p className="text-sm text-slate-400 leading-relaxed border-t border-slate-800 pt-3 mt-auto">
      {description}
    </p>
  </div>
);

// --- Strategic Block (Template Requirement: Decision & Risk) ---
interface StrategyBlockProps {
  decision: string;
  risk: string;
  tradeoff: string;
}

export const StrategyBlock: React.FC<StrategyBlockProps> = ({ decision, risk, tradeoff }) => {
  return (
    <div className="border border-slate-800 rounded-2xl bg-slate-900/30 overflow-hidden">
       <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center gap-2">
          <Brain size={20} className="text-purple-400" />
          <h3 className="text-lg font-bold text-white">Decisão Estratégica & Risco</h3>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          
          <div className="p-6">
             <div className="flex items-center gap-2 mb-3 text-slate-300 font-bold text-sm uppercase tracking-wide">
                <GitPullRequest size={16} className="text-blue-400" />
                Decisão-Chave
             </div>
             <p className="text-slate-400 text-sm leading-relaxed">{decision}</p>
          </div>

          <div className="p-6 bg-red-950/10">
             <div className="flex items-center gap-2 mb-3 text-red-300 font-bold text-sm uppercase tracking-wide">
                <AlertTriangle size={16} className="text-red-500" />
                Risco Assumido
             </div>
             <p className="text-slate-400 text-sm leading-relaxed">{risk}</p>
          </div>

          <div className="p-6 bg-amber-950/10">
             <div className="flex items-center gap-2 mb-3 text-amber-300 font-bold text-sm uppercase tracking-wide">
                <Scale size={16} className="text-amber-500" />
                Trade-off (O custo)
             </div>
             <p className="text-slate-400 text-sm leading-relaxed">{tradeoff}</p>
          </div>

       </div>
    </div>
  );
};


// --- Decision Block (Legacy/Simple) ---
interface DecisionBlockProps {
  context: string;
  problem: string;
  solution: string;
}

export const DecisionBlock: React.FC<DecisionBlockProps> = ({ context, problem, solution }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
        <div className="flex items-center gap-2 mb-3 text-slate-200 font-bold">
          <Brain size={20} className="text-slate-500" />
          <h4>Contexto</h4>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{context}</p>
      </div>
      
      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
        <div className="flex items-center gap-2 mb-3 text-slate-200 font-bold">
          <Target size={20} className="text-slate-500" />
          <h4>Problema Real</h4>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{problem}</p>
      </div>

      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
        <div className="flex items-center gap-2 mb-3 text-slate-200 font-bold">
          <Wrench size={20} className="text-slate-500" />
          <h4>Solução Técnica</h4>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{solution}</p>
      </div>
    </div>
  );
};

// --- Execution & Lessons Block ---
export const ExecutionBlock: React.FC<{ execution: string; lessons: string[] }> = ({ execution, lessons }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
       <div className="prose prose-invert prose-slate">
         <h3 className="text-lg font-bold text-white mb-4">Execução (Alto Nível)</h3>
         <p className="text-slate-400 leading-relaxed whitespace-pre-line text-sm">{execution}</p>
       </div>
       <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-4 text-purple-300 font-bold">
            <Lightbulb size={20} className="text-purple-500" />
            <h3>Lições Aprendidas</h3>
          </div>
          <ul className="space-y-3">
            {lessons.map((lesson, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-400">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500"></span>
                {lesson}
              </li>
            ))}
          </ul>
       </div>
    </div>
  );
};

// --- Section Wrapper ---
export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);
