
export interface User {
  name: string;
  email: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  teraBoxLink?: string;
  content: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface StudyDay {
  date: string; // ISO format YYYY-MM-DD
  completed: boolean;
}

export enum AppState {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  COURSE = 'COURSE',
  TRACKER = 'TRACKER',
  BONUS = 'BONUS'
}
