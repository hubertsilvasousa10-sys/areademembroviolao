
import React from 'react';
import { User, AppState } from '../types';

interface NavbarProps {
  user: User;
  onLogout: () => void;
  currentPage: AppState;
  setPage: (page: AppState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout, currentPage, setPage }) => {
  const navItems = [
    { id: AppState.DASHBOARD, label: 'Início', icon: '🏠' },
    { id: AppState.COURSE, label: 'Aulas', icon: '🎸' },
    { id: AppState.TRACKER, label: 'Estudos', icon: '📅' },
    { id: AppState.BONUS, label: 'Bônus', icon: '🎁' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage(AppState.DASHBOARD)}>
            <div className="bg-orange-600 text-white p-1.5 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 3v9.135A3.495 3.495 0 005 12c-1.933 0-3.5 1.567-3.5 3.5S3.067 19 5 19s3.5-1.567 3.5-3.5V8.559l8-1.6V12a3.5 3.5 0 101 2.45V3z" />
              </svg>
            </div>
            <span className="font-serif font-bold text-xl hidden sm:inline">Violão Master</span>
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentPage === item.id 
                    ? 'bg-orange-50 text-orange-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-semibold text-gray-800 leading-tight">{user.name}</span>
              <span className="text-xs text-gray-400">Aluno Premium</span>
            </div>
            <button 
              onClick={onLogout}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              title="Sair"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Nav */}
      <div className="md:hidden flex justify-around py-2 border-t border-gray-100 bg-white">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`flex flex-col items-center p-2 ${
              currentPage === item.id ? 'text-orange-600' : 'text-gray-400'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[10px] uppercase font-bold tracking-wider mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
