export interface Parent {
    id: string;
    name: string;
    email: string;
    children: string[]; // Array of student IDs associated with the parent
    createdAt: Date;
    updatedAt: Date;
}