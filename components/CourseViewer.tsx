
import React from 'react';
import { COURSE_LINK } from '../constants';

const CourseViewer: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
        <div className="bg-orange-600 p-12 text-center text-white relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 opacity-10 -mr-10 -mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 relative z-10">Conteúdo do Curso</h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto relative z-10">
            Todo o nosso material didático, vídeos e exercícios estão organizados em nossa pasta exclusiva.
          </p>
        </div>

        <div className="p-8 md:p-12 text-center space-y-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-3xl mb-4">
              🎸
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Acesse sua Área de Aprendizado</h2>
            <p className="text-gray-500 mt-2 max-w-md mx-auto">
              Clique no botão abaixo para ser redirecionado ao TeraBox, onde você encontrará todos os módulos e arquivos do curso Violão Master.
            </p>
          </div>

          <div className="pt-4">
            <a 
              href={COURSE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-700 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              ACESSAR AULAS NO TERABOX
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 border-t">
            <div className="p-4">
              <span className="text-2xl">📱</span>
              <h4 className="font-bold mt-2">Mobile e Desktop</h4>
              <p className="text-xs text-gray-400 mt-1">Assista de qualquer lugar com o app do TeraBox.</p>
            </div>
            <div className="p-4">
              <span className="text-2xl">📥</span>
              <h4 className="font-bold mt-2">Download Offline</h4>
              <p className="text-xs text-gray-400 mt-1">Baixe as aulas para estudar mesmo sem internet.</p>
            </div>
            <div className="p-4">
              <span className="text-2xl">🔄</span>
              <h4 className="font-bold mt-2">Sempre Atualizado</h4>
              <p className="text-xs text-gray-400 mt-1">Novos conteúdos são adicionados direto na pasta.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseViewer;
