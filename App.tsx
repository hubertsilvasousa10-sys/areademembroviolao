
import React, { useState, useEffect } from 'react';
import { User, AppState } from './types';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CourseViewer from './components/CourseViewer';
import StudyTracker from './components/StudyTracker';
import BonusSection from './components/BonusSection';
import AITutor from './components/AITutor';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<AppState>(AppState.LOGIN);
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('violao_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setCurrentPage(AppState.DASHBOARD);
    }
  }, []);

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('violao_user', JSON.stringify(newUser));
    setCurrentPage(AppState.DASHBOARD);
  };

  const handleLogout = () => {
    localStorage.removeItem('violao_user');
    setUser(null);
    setCurrentPage(AppState.LOGIN);
  };

  if (!user || currentPage === AppState.LOGIN) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        user={user} 
        onLogout={handleLogout} 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
      />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {currentPage === AppState.DASHBOARD && <Dashboard user={user} setPage={setCurrentPage} />}
        {currentPage === AppState.COURSE && <CourseViewer />}
        {currentPage === AppState.TRACKER && <StudyTracker />}
        {currentPage === AppState.BONUS && <BonusSection />}
      </main>

      {/* Persistent Floating AI Tutor Toggle */}
      <button 
        onClick={() => setIsAITutorOpen(!isAITutorOpen)}
        className="fixed bottom-6 right-6 bg-orange-600 text-white p-4 rounded-full shadow-2xl hover:bg-orange-700 transition-all z-50 flex items-center gap-2"
      >
        <span className="hidden md:inline font-medium text-sm">Tutor IA</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {isAITutorOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-96 md:h-[600px] z-50">
          <AITutor onClose={() => setIsAITutorOpen(false)} />
        </div>
      )}

      <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
        <p>© 2024 Violão Master. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
