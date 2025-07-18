// This file defines TypeScript types and interfaces used throughout the backend.

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'parent' | 'teacher';
}

export interface Student extends User {
    parentId: string;
    grades: Record<string, number>;
}

export interface Parent extends User {
    children: Student[];
}

export interface Teacher extends User {
    subjects: string[];
}

export interface AuthCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}