export interface User {
  id: string;
  name: string;
  email: string;
  photoUrl?: string;
  createdAt: Date;
  lastLogin: Date;
  points: number;
  level: number;
  settings?: any;
}