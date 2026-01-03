
import React, { useState } from 'react';
import { COURSE_LINK } from '../constants';

const BonusSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const genres = [
    "Sertanejo e Música Caipira", "Rock e Metal", "MPB e Bossa Nova", 
    "Pop e Dance", "Gospel e Religioso", "Blues e Jazz", 
    "Reggae e Ska", "Forró e Axé"
  ];

  const levels = [
    { name: "Iniciante", desc: "Acordes básicos e ritmos simples" },
    { name: "Intermediário", desc: "Pestanas e levadas mais elaboradas" },
    { name: "Avançado", desc: "Técnicas complexas e arranjos desafiadores" }
  ];

  const faqs = [
    { q: "O arquivo está em qual formato?", a: "O arquivo está disponível em formato PDF organizado, que pode ser aberto em qualquer dispositivo (computador, tablet ou celular). Ele possui marcadores e índice para facilitar a busca." },
    { q: "Como posso usar as cifras no meu violão?", a: "Basta abrir o arquivo, procurar a música desejada pelo índice, estudar os acordes indicados e praticar seguindo a letra e o tempo da música." },
    { q: "O bônus é gratuito para todos os alunos?", a: "Sim! Este bônus é 100% gratuito e exclusivo para todos os alunos matriculados no curso Violão Master." },
    { q: "Preciso estar conectado à internet para usar?", a: "Não. Após fazer o download uma vez, o arquivo é seu para sempre e você pode acessá-lo offline em qualquer lugar." }
  ];

  return (
    <div className="bg-[#121212] text-white -mx-4 -mt-8 px-4 py-12 md:px-8 md:py-20 rounded-t-[3rem] shadow-2xl overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-6">
          <span className="bg-orange-600/20 text-orange-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-orange-600/30">
            Bônus Exclusivo
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            30 Mil Cifras para Transformar seu Aprendizado!
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Descubra uma coleção completa que vai revolucionar sua forma de praticar violão. 
            Este material exclusivo foi cuidadosamente preparado para acompanhar cada etapa da sua jornada musical.
          </p>
          <div className="pt-4">
            <a 
              href={COURSE_LINK}
              target="_blank"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all inline-block shadow-lg shadow-orange-600/20"
            >
              Baixar 30 Mil Cifras Agora
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-orange-600/20 rounded-full blur-3xl group-hover:bg-orange-600/30 transition-all"></div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800" 
               alt="Violão em estúdio" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: "🎵", title: "30 Mil Cifras Completas", desc: "Uma coleção massiva com músicas de todos os estilos e épocas." },
          { icon: "📁", title: "Organização Inteligente", desc: "Cifras divididas por gênero, dificuldade e estilo." },
          { icon: "✨", title: "Qualidade Garantida", desc: "Material revisado e formatado profissionalmente para melhor leitura." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Genres & Levels */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">Organização que Facilita seu Aprendizado</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-orange-500 border-l-4 border-orange-600 pl-4">Por Gênero Musical</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {genres.map((g, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-default">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-orange-500 border-l-4 border-orange-600 pl-4">Por Nível de Dificuldade</h3>
            <div className="space-y-4">
              {levels.map((l, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <h4 className="font-bold text-white">{l.name}</h4>
                  <p className="text-sm text-gray-500">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">Depoimentos de Quem Já Está Usando</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Maria Silva", text: "Incrível! Encontrei todas as músicas que eu queria aprender. A organização é perfeita." },
            { name: "João Santos", text: "Como iniciante, estava perdido sobre o que tocar. Esta coleção me deu um caminho claro." },
            { name: "Ana Costa", text: "Já toco há alguns anos, mas esta coleção me apresentou músicas que eu nem conhecia." }
          ].map((t, idx) => (
            <div key={idx} className="bg-white/5 p-8 rounded-3xl italic relative">
              <span className="text-6xl text-orange-600/20 absolute top-4 left-4 font-serif">"</span>
              <p className="text-gray-300 mb-4 relative z-10">{t.text}</p>
              <footer className="text-orange-500 font-bold not-italic">— {t.name}</footer>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-white/10 pb-4">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left flex justify-between items-center py-4 hover:text-orange-500 transition-colors"
              >
                <span className="font-bold">{f.q}</span>
                <span className="text-xl">{activeFaq === i ? '−' : '+'}</span>
              </button>
              {activeFaq === i && (
                <div className="text-gray-400 text-sm leading-relaxed animate-fadeIn">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-orange-600 to-red-700 p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid)"></path>
             </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Seu Futuro Musical Começa Agora</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Não perca esta oportunidade única de acelerar seu aprendizado e ter acesso a um repertório praticamente infinito.
          </p>
          <a 
            href={COURSE_LINK}
            target="_blank"
            className="bg-white text-orange-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all shadow-xl inline-flex items-center gap-3"
          >
            Acessar Minhas 30 Mil Cifras Grátis
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-orange-200 mt-6 text-xs uppercase font-bold tracking-widest">
            Acesso imediato via TeraBox
          </p>
        </div>
      </div>
    </div>
  );
};

export default BonusSection;
