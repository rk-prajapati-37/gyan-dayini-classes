import { Request, Response } from 'express';
import Teacher from '../models/teacher';

// Get all teachers
export const getAllTeachers = async (req: Request, res: Response) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving teachers', error });
    }
};

// Get a teacher by ID
export const getTeacherById = async (req: Request, res: Response) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving teacher', error });
    }
};

// Create a new teacher
export const createTeacher = async (req: Request, res: Response) => {
    const newTeacher = new Teacher(req.body);
    try {
        const savedTeacher = await newTeacher.save();
        res.status(201).json(savedTeacher);
    } catch (error) {
        res.status(400).json({ message: 'Error creating teacher', error });
    }
};

// Update a teacher
export const updateTeacher = async (req: Request, res: Response) => {
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTeacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.status(200).json(updatedTeacher);
    } catch (error) {
        res.status(400).json({ message: 'Error updating teacher', error });
    }
};

// Delete a teacher
export const deleteTeacher = async (req: Request, res: Response) => {
    try {
        const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
        if (!deletedTeacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.status(200).json({ message: 'Teacher deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting teacher', error });
    }
};