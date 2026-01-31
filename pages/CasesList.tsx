import React from 'react';
import { Section, CaseSummary } from '../components/UIComponents';
import { PROJECTS } from '../constants';

const CasesList: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-10">
      <Section>
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Cases Técnicos</h1>
          <p className="text-xl text-slate-400">
            Uma coleção detalhada de desafios reais, decisões estratégicas e os resultados alcançados em operações de TI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <CaseSummary 
              key={project.id}
              slug={project.slug}
              title={project.title}
              category={project.category}
              description={project.shortDescription}
              index={idx}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default CasesList;