
import React, { useState, useEffect } from 'react';

const StudyTracker: React.FC = () => {
  const [markedDays, setMarkedDays] = useState<string[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('study_tracker') || '[]');
    setMarkedDays(saved);
  }, []);

  const toggleDay = (day: string) => {
    const newMarked = markedDays.includes(day)
      ? markedDays.filter(d => d !== day)
      : [...markedDays, day];
    
    setMarkedDays(newMarked);
    localStorage.setItem('study_tracker', JSON.stringify(newMarked));
  };

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const monthName = currentMonth.toLocaleString('pt-BR', { month: 'long' });
  const totalDays = daysInMonth(year, month);
  const offset = firstDayOfMonth(year, month);

  const getDayString = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const isToday = (day: number) => {
    const today = new Date();
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 capitalize">{monthName} {year}</h2>
            <p className="text-gray-500">Marque os dias que você estudou para manter sua ofensiva!</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentMonth(new Date(year, month - 1))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setCurrentMonth(new Date(year, month + 1))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-7 gap-4 mb-8">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(d => (
            <div key={d} className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">{d}</div>
          ))}
          
          {Array(offset).fill(null).map((_, i) => (
            <div key={`offset-${i}`} className="h-14 sm:h-24"></div>
          ))}

          {Array(totalDays).fill(null).map((_, i) => {
            const day = i + 1;
            const dateStr = getDayString(day);
            const marked = markedDays.includes(dateStr);
            const today = isToday(day);
            
            return (
              <button
                key={day}
                onClick={() => toggleDay(dateStr)}
                className={`relative h-14 sm:h-24 rounded-2xl flex flex-col items-center justify-center transition-all group border-2 ${
                  marked 
                  ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-200' 
                  : today 
                    ? 'bg-orange-50 border-orange-300 text-orange-900' 
                    : 'bg-white border-gray-100 text-gray-400 hover:border-orange-200'
                }`}
              >
                <span className={`text-sm sm:text-xl font-bold ${today && !marked ? 'text-orange-600' : ''}`}>{day}</span>
                {marked && (
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                {today && !marked && <span className="absolute bottom-1 sm:bottom-2 text-[8px] sm:text-[10px] font-bold uppercase">Hoje</span>}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-100">
          <div className="text-center p-4">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total de Dias</p>
            <p className="text-3xl font-bold text-gray-900">{markedDays.length}</p>
          </div>
          <div className="text-center p-4">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Este Mês</p>
            <p className="text-3xl font-bold text-orange-600">
              {markedDays.filter(d => d.startsWith(`${year}-${String(month + 1).padStart(2, '0')}`)).length}
            </p>
          </div>
          <div className="text-center p-4">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Ofensiva Atual</p>
            <p className="text-3xl font-bold text-blue-600">--</p>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 flex items-center gap-4">
        <div className="bg-white p-3 rounded-full shadow-sm text-2xl">💡</div>
        <p className="text-orange-900 text-sm leading-relaxed">
          <strong>Lembrete:</strong> A marcação de estudos é apenas para seu controle pessoal. Seja honesto consigo mesmo e tente praticar pelo menos 15 minutos em cada dia marcado!
        </p>
      </div>
    </div>
  );
};

export default StudyTracker;
