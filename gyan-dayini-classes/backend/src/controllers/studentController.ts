import { Request, Response } from 'express';
import Student from '../models/student';

// Get all students
export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving students', error });
    }
};

// Get a single student by ID
export const getStudentById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving student', error });
    }
};

// Create a new student
export const createStudent = async (req: Request, res: Response) => {
    const newStudent = new Student(req.body);
    try {
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({ message: 'Error creating student', error });
    }
};

// Update a student by ID
export const updateStudent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: 'Error updating student', error });
    }
};

// Delete a student by ID
export const deleteStudent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }
};