import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CasesList from './pages/CasesList';
import CaseDetail from './pages/CaseDetail';
import Contact from './pages/Contact';

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <span className="text-lg font-bold text-white">Guilherme Araújo</span>
        <p className="text-sm mt-1">Gestão de TI & Operações</p>
      </div>
      <div className="text-sm">
        &copy; {new Date().getFullYear()} - Portfólio Profissional
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans bg-slate-950 text-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/cases" element={<CasesList />} />
            <Route path="/cases/:slug" element={<CaseDetail />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;