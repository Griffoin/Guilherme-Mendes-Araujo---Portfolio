import React from 'react';
import { Section } from '../components/UIComponents';
import { Mail, Linkedin, MapPin, Github } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-10">
      <Section>
        <div className="max-w-2xl mx-auto bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-sm text-center">
          <h1 className="text-3xl font-bold text-white mb-6">Vamos Conversar?</h1>
          <p className="text-lg text-slate-400 mb-10">
            Estou disponível para novos desafios em liderança de TI e gestão de operações.
          </p>

          <div className="space-y-6">
             <a href={`mailto:${PROFILE.email}`} className="flex items-center justify-center gap-3 text-slate-300 hover:text-purple-400 transition-colors p-4 rounded-lg hover:bg-slate-800 border border-transparent hover:border-slate-700">
                <div className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center text-purple-400">
                   <Mail size={20} />
                </div>
                <span className="text-lg font-medium">{PROFILE.email}</span>
             </a>

             <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-slate-300 hover:text-purple-400 transition-colors p-4 rounded-lg hover:bg-slate-800 border border-transparent hover:border-slate-700">
                <div className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center text-purple-400">
                   <Linkedin size={20} />
                </div>
                <span className="text-lg font-medium">LinkedIn Profile</span>
             </a>

             {PROFILE.github && (
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-slate-300 hover:text-purple-400 transition-colors p-4 rounded-lg hover:bg-slate-800 border border-transparent hover:border-slate-700">
                  <div className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center text-purple-400">
                    <Github size={20} />
                  </div>
                  <span className="text-lg font-medium">GitHub Profile</span>
              </a>
             )}

             <div className="flex items-center justify-center gap-3 text-slate-500 p-4">
                <MapPin size={20} />
                <span>{PROFILE.location}</span>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;