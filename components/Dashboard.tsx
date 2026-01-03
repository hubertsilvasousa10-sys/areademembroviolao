
import React, { useState, useEffect } from 'react';
import { User, AppState } from '../types';

interface DashboardProps {
  user: User;
  setPage: (page: AppState) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, setPage }) => {
  const [lastStudyDate, setLastStudyDate] = useState<string | null>(null);

  useEffect(() => {
    const tracker = JSON.parse(localStorage.getItem('study_tracker') || '[]');
    if (tracker.length > 0) {
      setLastStudyDate(tracker[tracker.length - 1]);
    }
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-gray-500 font-medium">Olá, {user.name}!</h2>
          <h1 className="text-4xl font-serif font-bold text-gray-900">{getGreeting()}, vamos praticar?</h1>
        </div>
        <div className="bg-orange-600 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs opacity-80 uppercase font-bold tracking-widest">Status da Conta</p>
            <p className="text-2xl font-bold">Premium</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">🎸</span> Acesso Rápido
            </h3>
            <div className="flex items-center gap-4 p-6 bg-orange-50 rounded-2xl border border-orange-100 group cursor-pointer" onClick={() => setPage(AppState.COURSE)}>
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-orange-900 text-lg">Ir para as Aulas</h4>
                <p className="text-sm text-orange-700 opacity-80">Acesse todo o conteúdo no TeraBox</p>
              </div>
              <div className="hidden sm:block">
                <button className="bg-white text-orange-600 px-6 py-2 rounded-xl font-bold shadow-md hover:bg-orange-100 transition-colors">
                  Acessar
                </button>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden group cursor-pointer" onClick={() => setPage(AppState.TRACKER)}>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-blue-100 uppercase text-xs font-bold tracking-widest mb-1">Rotina</h4>
              <h3 className="text-2xl font-bold">Marcar Estudo</h3>
              <p className="mt-2 text-sm text-blue-100">Registre sua evolução diária.</p>
            </div>
            
            <div className="bg-purple-600 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden group cursor-pointer" onClick={() => setPage(AppState.BONUS)}>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="text-purple-100 uppercase text-xs font-bold tracking-widest mb-1">Especial</h4>
              <h3 className="text-2xl font-bold">Meus Bônus</h3>
              <p className="mt-2 text-sm text-purple-100">30 mil cifras e muito mais.</p>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Meta Diária</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Último Estudo</span>
                <span className="text-sm font-bold text-gray-900">{lastStudyDate || 'Nenhum'}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: lastStudyDate ? '100%' : '0%' }}></div>
              </div>
              <p className="text-xs text-gray-400 italic">"A consistência supera o talento. Continue praticando!"</p>
            </div>
          </section>

          <section className="bg-gray-900 p-6 rounded-2xl text-white shadow-sm">
            <h3 className="text-lg font-bold mb-2">Dica da Semana</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Pratique pelo menos 15 minutos por dia. A memória muscular se forma com a frequência, não com a duração exaustiva.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
